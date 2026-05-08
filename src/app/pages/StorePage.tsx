/**
 * ==========================================
 * PAGINA: TIENDA DE MERCH CROMATICA
 * ==========================================
 *
 * Esta pagina solo ensambla la tienda:
 * - Encabezado visual
 * - Lista de productos
 * - Formulario de apartado
 *
 * Para cambiar productos, precios, envio o WhatsApp:
 * ve a src/app/data/storeMerch.ts
 */

import { useMemo, useState } from 'react';
import { ArrowLeft, BadgeCheck, MapPin, ShoppingBag, Truck } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { StoreOrderForm } from '../components/StoreOrderForm';
import { StoreProductCard } from '../components/StoreProductCard';
import { STORE_ALLOWED_CITY, storeProducts } from '../data/storeMerch';

const initialQuantities = storeProducts.reduce<Record<string, number>>((quantities, product) => {
  quantities[product.id] = product.initialQuantity || 0;
  return quantities;
}, {});

export function StorePage() {
  const [quantities, setQuantities] = useState<Record<string, number>>(initialQuantities);

  const subtotal = useMemo(
    () =>
      storeProducts.reduce(
        (total, product) => total + product.price * (quantities[product.id] || 0),
        0
      ),
    [quantities]
  );

  const updateQuantity = (id: string, nextQuantity: number) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(0, Math.min(9, nextQuantity)),
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-28">
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-white to-white">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF8A00] via-[#FF6B9D] via-[#AB47BC] to-[#26A69A]" />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <a
              href="/#hero"
              className="inline-flex items-center gap-2 text-sm font-black text-[#FF8A00] hover:text-[#AB47BC] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Cromatica
            </a>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#FF8A00]/20 mb-5">
                  <ShoppingBag className="w-4 h-4 text-[#FF8A00]" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#AB47BC]">
                    Tienda local de merch
                  </span>
                </div>

                <h1
                  className="text-4xl sm:text-5xl lg:text-7xl font-black text-gradient leading-tight mb-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Merch Cromatica
                </h1>

                <p className="max-w-2xl text-base sm:text-lg text-[var(--cromatica-text-secondary)] leading-relaxed mb-8">
                  Aparta tu merch para entrega local en {STORE_ALLOWED_CITY} antes de la expo.
                  El pedido queda como solicitud; el pago se coordina directo con el equipo.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {[
                    { icon: MapPin, label: 'Solo El Grullo', color: '#FF8A00' },
                    { icon: Truck, label: 'Entrega local', color: '#26A69A' },
                    { icon: BadgeCheck, label: 'Sin cobro en linea', color: '#AB47BC' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-lg bg-white border border-gray-100 px-4 py-3 shadow-sm"
                    >
                      <item.icon className="w-5 h-5 shrink-0" style={{ color: item.color }} />
                      <span className="text-sm font-bold text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {storeProducts.map((product) => (
                    <StoreProductCard
                      key={product.id}
                      product={product}
                      quantity={quantities[product.id] || 0}
                      onQuantityChange={updateQuantity}
                    />
                  ))}
                </div>
              </div>

              <aside className="lg:sticky lg:top-28">
                <StoreOrderForm
                  products={storeProducts}
                  quantities={quantities}
                  subtotal={subtotal}
                />
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
