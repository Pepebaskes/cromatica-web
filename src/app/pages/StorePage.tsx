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
    <div className="store-page min-h-screen">
      <Navigation />

      <main className="store-main pt-28">
        <section className="store-hero relative overflow-hidden">
          <div className="store-topography absolute inset-0" />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <a
              href="/#hero"
              className="store-return inline-flex items-center gap-2 text-sm font-black transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Cromática
            </a>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start">
              <div>
                <div className="store-kicker inline-flex items-center gap-2 px-4 py-2 mb-5">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-widest">
                    Tienda local de merch
                  </span>
                </div>

                <h1
                  className="store-title text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Tienda Cromática
                </h1>

                <p className="store-copy max-w-2xl text-base sm:text-lg leading-relaxed mb-8">
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
                      className="store-benefit flex items-center gap-3 rounded-lg px-4 py-3"
                    >
                      <item.icon className="w-5 h-5 shrink-0" style={{ color: item.color }} />
                      <span className="text-sm font-bold">{item.label}</span>
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
