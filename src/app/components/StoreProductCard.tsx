/**
 * ==========================================
 * COMPONENTE: TARJETA DE PRODUCTO
 * ==========================================
 *
 * Muestra un producto de la tienda con:
 * - Fotos reales en carrusel si el producto tiene images
 * - Imagen visual generada con colores del producto si aun no hay fotos
 * - Precio
 * - Descripcion
 * - Controles para sumar/restar unidades
 *
 * No necesitas tocar este archivo para agregar merch.
 * Agrega productos en: src/app/data/storeMerch.ts
 */

import { ChevronLeft, ChevronRight, Minus, Plus, Shirt, ShoppingBag, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { StoreProduct, formatStoreCurrency } from '../data/storeMerch';

type StoreProductCardProps = {
  product: StoreProduct;
  quantity: number;
  onQuantityChange: (productId: string, quantity: number) => void;
};

const iconMap = {
  shirt: Shirt,
  bag: ShoppingBag,
  sparkles: Sparkles,
};

export function StoreProductCard({
  product,
  quantity,
  onQuantityChange,
}: StoreProductCardProps) {
  const ProductIcon = iconMap[product.icon];
  const productImages = product.images?.filter(Boolean) || [];
  const hasImages = productImages.length > 0;
  const [activeImage, setActiveImage] = useState(0);

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? productImages.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setActiveImage((current) =>
      current === productImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <article className="group bg-white rounded-lg border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${product.color} 0%, ${product.accent} 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_78%_65%,rgba(255,255,255,0.24),transparent_30%)]" />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[11px] font-black uppercase tracking-wider text-gray-700">
          {product.tag}
        </div>

        {hasImages ? (
          <>
            <img
              src={productImages[activeImage]}
              alt={`${product.name} foto ${activeImage + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            {productImages.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label={`Ver foto anterior de ${product.name}`}
                  onClick={showPreviousImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 text-gray-800 shadow-md flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label={`Ver foto siguiente de ${product.name}`}
                  onClick={showNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 text-gray-800 shadow-md flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                  {productImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      aria-label={`Ver foto ${index + 1} de ${product.name}`}
                      onClick={() => setActiveImage(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeImage === index ? 'w-6 bg-white' : 'w-2 bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-28 h-28 rounded-[28px] bg-white/95 shadow-2xl flex items-center justify-center rotate-[-6deg] group-hover:rotate-0 group-hover:scale-105 transition-transform duration-300">
              <ProductIcon className="w-16 h-16" style={{ color: product.color }} />
              <img
                src="/images/favicon.png"
                alt=""
                className="absolute right-3 bottom-3 w-8 h-8 object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h2 className="text-lg font-black text-gray-900 leading-tight">
            {product.name}
          </h2>
          <span className="text-base font-black text-[#FF8A00] whitespace-nowrap">
            {formatStoreCurrency.format(product.price)}
          </span>
        </div>
        <p className="text-sm text-[var(--cromatica-text-secondary)] leading-relaxed min-h-[84px]">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between rounded-lg bg-[#FFF8F0] p-2">
          <button
            type="button"
            aria-label={`Quitar ${product.name}`}
            onClick={() => onQuantityChange(product.id, quantity - 1)}
            className="w-10 h-10 rounded-md bg-white text-[#FF8A00] shadow-sm flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-lg font-black text-gray-900 tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            aria-label={`Agregar ${product.name}`}
            onClick={() => onQuantityChange(product.id, quantity + 1)}
            className="w-10 h-10 rounded-md bg-gradient-to-br from-[#FF8A00] to-[#FF6B9D] text-white shadow-sm flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
