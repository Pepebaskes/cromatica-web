/**
 * ==========================================
 * TIENDA CROMATICA - DATOS EDITABLES
 * ==========================================
 *
 * Aqui puedes cambiar todo lo importante de la tienda sin buscar entre la interfaz:
 * - Numero de WhatsApp que recibe pedidos
 * - Costo de entrega local
 * - Municipio permitido
 * - Productos de merch que se pueden apartar
 * - Promociones que se muestran, pero no entran al pedido
 *
 * PARA AGREGAR UN PRODUCTO:
 * 1. Duplica un objeto dentro de "storeProducts".
 * 2. Cambia id, name, description, price, colors y tag.
 * 3. El id debe ser unico y sin espacios, por ejemplo: "gorra-cromatica".
 * 4. Pon tus fotos en public/images/tienda y agregalas en images.
 *
 * PARA AGREGAR UNA PROMOCION:
 * 1. Duplica la plantilla dentro de "storePromotions".
 * 2. Una promocion NO se agrega al pedido ni necesita precio.
 *
 * EJEMPLO DE FOTOS:
 * images: [
 *   '/images/tienda/camisa-frente.png',
 *   '/images/tienda/camisa-espalda.png',
 *   '/images/tienda/camisa-detalle.png',
 * ],
 */

export type StoreProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  accent: string;
  tag: string;
  icon: 'shirt' | 'bag' | 'sparkles';
  images?: string[];
  initialQuantity?: number;
};

export type StorePromotion = {
  id: string;
  title: string;
  description: string;
  tag: string;
  color: string;
  accent: string;
  image?: string;
  actionLabel?: string;
  actionHref?: string;
};

export const STORE_WHATSAPP_PHONE = '525667718342';
export const STORE_ALLOWED_CITY = 'El Grullo, Jalisco';
export const STORE_DELIVERY_FEE = 25;

export const storeProducts = [
  {
    id: 'playera-cromatica',
    name: 'Playera Cromática 2026',
    description: 'Corte unisex, logo frontal y energia de expo para usar antes, durante y despues del festival.',
    price: 380,
    color: '#FF8A00',
    accent: '#FF6B9D',
    tag: 'Preventa',
    icon: 'shirt',
    images: [
      '/images/tienda/camisaFrente.jpeg',
      '/images/tienda/camisaDetras.jpeg',
    ],
    initialQuantity: 1,
  },
  /*
  DUPLICA ESTE OBJETO PARA AGREGAR MAS MERCH:

  {
    id: 'nuevo-producto',
    name: 'Nombre del producto',
    description: 'Descripcion breve del producto.',
    price: 000,
    color: '#FF8A00',
    accent: '#FF6B9D',
    tag: 'Nuevo',
    icon: 'shirt', // Opciones: 'shirt', 'bag', 'sparkles'
    images: [
      '/images/tienda/mi-producto-1.png',
      '/images/tienda/mi-producto-2.png',
    ],
  },
  */
] satisfies StoreProduct[];

export const storePromotions = [
  /*
  {
    id: 'promo-expo-kit',
    title: 'Expo kit de preventa',
    description: 'Lleva playera, tote y stickers con precio especial hasta agotar existencias.',
    tag: 'Promocion',
    color: '#EC168C',
    accent: '#27B7E6',
    image: '/images/tienda/expo-kit.jpg',
    actionLabel: 'Ver productos',
    actionHref: '#productos',
  },
  */
] satisfies StorePromotion[];

export const formatStoreCurrency = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
});
