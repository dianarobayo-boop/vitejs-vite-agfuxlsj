import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function Detalle() {
  const { id } = useParams();
  const { data: producto, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  // 1. Estado CARGANDO
  if (loading) return <p style={{ padding: '20px' }}>Cargando detalle del producto #{id}...</p>;
  
  // 2. Estado ERROR
  if (error) return <p style={{ color: 'red', padding: '20px' }}>Error: {error}</p>;

  // 3. Validación de seguridad (Evita el TypeError si producto es null)
  if (!producto) return <p style={{ padding: '20px' }}>No se encontró el producto.</p>;

  // 4. Estado ÉXITO
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/catalogo">← Volver al Catálogo</Link>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ height: '220px', objectFit: 'contain' }} />
      <p style={{ fontSize: '1.3rem', color: '#2e7d32', fontWeight: 'bold' }}>${producto.price}</p>
      <p>{producto.description}</p>
    </div>
  );
}