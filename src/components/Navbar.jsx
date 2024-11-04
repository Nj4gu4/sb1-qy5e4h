import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            VAGI Fashion
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600">
              Home
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-purple-600">
              Shop
            </Link>
            {user && (
              <Link to="/cart" className="relative text-gray-600 hover:text-purple-600">
                <ShoppingBagIcon className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>
            )}
            {user?.isAdmin && (
              <Link to="/admin" className="text-gray-600 hover:text-purple-600">
                Admin
              </Link>
            )}
            {user ? (
              <Menu as="div" className="relative">
                <Menu.Button className="text-gray-600 hover:text-purple-600">
                  Account
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Menu.Item>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50"
                    >
                      Sign out
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-purple-600">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;