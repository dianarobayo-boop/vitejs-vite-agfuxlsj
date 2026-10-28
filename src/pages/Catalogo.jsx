import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';
import FiltroPrecio from '../components/FiltroPrecio';

export default function Catalogo() {
  const { data: productos, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [precioMax, setPrecioMax] = useState(50000);

  // 1. Estado CARGANDO (Loading)
  if (loading) return <p style={{ textAlign: 'center', padding: '20px' }}> Cargando productos desde FakeStoreAPI...</p>;

  // 2. Estado ERROR
  if (error) return <p style={{ color: 'red', textAlign: 'center', padding: '20px' }}> Error: {error}</p>;

  const productosFiltrados = productos ? productos.filter((p) => p.price <= precioMax) : [];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Catálogo de Productos</h2>
      <FiltroPrecio precioMax={precioMax} setPrecioMax={setPrecioMax} />

      {/* 3. Estado VACÍO (Empty) */}
      {productosFiltrados.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}> No hay productos por debajo de ${precioMax}</p>
      ) : (
        /* 4. Estado ÉXITO (Success) */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {productosFiltrados.map((prod) => (
            <ProductCard key={prod.id} producto={prod} />
          ))}
        </div>
      )}
    </div>
  );
}
