import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Pantalla de Pago y Checkout</h2>
      <p style={{ color: 'green', fontWeight: 'bold' }}>Acceso concedido mediante Token JWT en LocalStorage.</p>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <h3>Resumen de la Compra:</h3>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <span>{item.title} (x{item.cantidad})</span>
              <span>${(item.price * item.cantidad).toFixed(2)}</span>
            </div>
          ))}
          <h4>Total a Pagar: ${totalPrice.toFixed(2)}</h4>
          <button onClick={() => { alert('¡Compra realizada con éxito!'); clearCart(); }} style={{ padding: '10px 20px', background: '#3793de', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
}