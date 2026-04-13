import './homepage.css';
import axios from 'axios';
import { useEffect, useState, type ChangeEvent } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { cartQueryKey } from '../hooks/useCartQuery';
import { Header } from './Header';
import { Footer } from './Footer';
import { Product } from '../types/interfaces';

export function HomePage() {
  const queryClient = useQueryClient();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedProducts, setAddedProducts] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<string>('');

  const addToCart = async (product: Product): Promise<void> => {
    try {
      const quantity = quantities[product.id] || 1;

      await axios.post('/api/cart-items', {
        productId: product.id,
        quantity,
      });
      
     //  Here i use the ReactQuery instead of useState to update cart as the backend handle the cart data.

    
      await queryClient.invalidateQueries({ queryKey: cartQueryKey });

      setAddedProducts((prev) => ({
        ...prev,
        [product.id]: true,
      }));

      setTimeout(() => {
        setAddedProducts((prev) => ({
          ...prev,
          [product.id]: false,
        }));
      }, 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      if (axios.isAxiosError(error)) {
        alert(`Failed to add item: ${error.response?.data?.message || error.message}`);
      } else {
        alert('Failed to add item to cart. Please try again.');
      }
    }
  };

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response = await axios.get<Product[]>('/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const searchPlaceholder = products.length > 0
    ? `Search ${products.length} products...`
    : 'Search products...';

  const getImageSrc = (imagePath: string): string =>
    imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

  const getRoundedRating = (stars: number): number => {
    return Math.round(stars * 2) / 2;
  };

  return (
    <>
      <title>Ecommerce</title>
      <Header onSearch={setSearchQuery} products={products} searchPlaceholder={searchPlaceholder} />

      <div className="home-page">
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <div className="no-products-message">
              <p>No products found matching your search.</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={getImageSrc(product.image)} alt={product.name} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`/images/ratings/rating-${getRoundedRating(product.rating.stars) * 10}.png`}
                    alt={`${product.rating.stars} star rating`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  ${(product.priceCents / 100).toFixed(2)}
                </div>

                <div className="product-quantity-container">
                  <select
                    value={quantities[product.id] || 1}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setQuantities({
                        ...quantities,
                        [product.id]: Number(e.target.value),
                      })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className={`added-to-cart ${addedProducts[product.id] ? 'show' : ''}`}>
                  <img src="/images/icons/checkmark.png" alt="" />
                  Added
                </div>

                <button
                  className="add-to-cart-button button-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
