/**
 * ==========================================
 * COMPONENTE: TARJETA DE PROMOCION
 * ==========================================
 *
 * Las promociones se leen desde src/app/data/storeMerch.ts.
 * No participan en el carrito ni en el pedido de WhatsApp.
 */

import { ArrowUpRight, Sparkles } from 'lucide-react';
import { StorePromotion } from '../data/storeMerch';

type StorePromotionCardProps = {
  promotion: StorePromotion;
};

export function StorePromotionCard({ promotion }: StorePromotionCardProps) {
  const content = (
    <article
      className="group relative overflow-hidden rounded-lg border border-white/15 p-6 text-white transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: `linear-gradient(125deg, ${promotion.color} 0%, ${promotion.accent} 100%)`,
      }}
    >
      {promotion.image && (
        <img
          src={promotion.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex h-full min-h-40 flex-col items-start justify-between gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide">
          <Sparkles className="h-3.5 w-3.5" />
          {promotion.tag}
        </span>
        <div>
          <h3 className="text-2xl font-black leading-tight">{promotion.title}</h3>
          <p className="mt-2 max-w-lg text-sm font-medium leading-relaxed text-white/90">
            {promotion.description}
          </p>
        </div>
        {promotion.actionLabel && (
          <span className="inline-flex items-center gap-2 text-sm font-black">
            {promotion.actionLabel}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </article>
  );

  return promotion.actionHref ? (
    <a href={promotion.actionHref} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
      {content}
    </a>
  ) : content;
}
