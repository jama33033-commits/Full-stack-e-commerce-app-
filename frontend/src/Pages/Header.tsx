import './header.css';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { useCartQuery } from '../hooks/useCartQuery';
import { getTotalQuantity } from '../assets/cartSummary';
import { Product } from '../types/interfaces';

interface HeaderProps {
  onSearch?: (query: string) => void;
  products?: Product[];
  searchPlaceholder?: string;
}

export function Header({
  onSearch,
  products = [],
  searchPlaceholder = 'Search products...',
}: HeaderProps) {
  const { data: cart = [] } = useCartQuery();
  const totalQuantity = getTotalQuantity(cart);
  const [currentProductIndex, setCurrentProductIndex] = useState<number>(0);

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [products.length]);

  const dynamicPlaceholder = products.length > 0
    ? `Search "${products[currentProductIndex]?.name}"...`
    : searchPlaceholder;

  return (
    <div className="header">
      <Link to="/" className="logo-brand">
        <span className="store-name">eStore</span>
      </Link>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder={dynamicPlaceholder}
          onChange={(e) => onSearch?.(e.target.value)}
        />

        <button className="search-button">
          <img className="search-icon" src="/images/icons/search-icon.png" alt="Search" />
        </button>
      </div>

      <div className="right-section">
        <Link className="cart-link" to="/checkout">
          <img className="cart-icon" src="/images/icons/cart-icon.png" alt="Cart" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
