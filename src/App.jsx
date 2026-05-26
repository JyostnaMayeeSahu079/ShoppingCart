import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const Products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 2, name: 'Smartphone', price: 4999 },
    { id: 3, name: 'Headphones', price: 199 }, 
      { id: 4, name: 'Smartwatch', price: 299 },
  ];

  const addToCart = (product) => {
   const newItem = {...product, cartId: crypto.randomUUID()};
   setCart([...cart, newItem]);
  };

  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (
     < >
      <div className=''>
        <h1>My Cart</h1>
        <div className='product-list'>
          {Products.map((product) => (
            <div key={product.id} className='product-card'>

              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>
                Add to Cart</button>

            </div>
          ))}
        </div>
        <div className='cart-container'>
          <h2>Cart Items</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.cartId} className='cart-item'>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => setCart(cart.filter(cartItem => cartItem.cartId !== item.cartId))}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
          
      </div>
           
     </>
  )
}

export default App