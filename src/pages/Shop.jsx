import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Women',
  },
  {
    id: 2,
    name: 'Classic Business Suit',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Men',
  },
  {
    id: 3,
    name: 'Designer Denim Collection',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Unisex',
  },
  {
    id: 4,
    name: 'Evening Gown',
    price: 259.99,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Women',
  },
  {
    id: 5,
    name: 'Casual Blazer',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Men',
  },
  {
    id: 6,
    name: 'Summer Collection Set',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Unisex',
  },
  {
    id: 7,
    name: 'Bohemian Maxi Dress',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Women',
  },
  {
    id: 8,
    name: 'Urban Streetwear Set',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Men',
  },
  {
    id: 9,
    name: 'Designer Handbag',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Accessories',
  },
  {
    id: 10,
    name: 'Statement Jewelry Set',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Accessories',
  },
  {
    id: 11,
    name: 'Wedding Collection',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1594552072238-48c869e11e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Bridal',
  },
  {
    id: 12,
    name: 'African Print Dress',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    category: 'Women',
  }
];

function Shop() {
  const { addToCart } = useCart();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;