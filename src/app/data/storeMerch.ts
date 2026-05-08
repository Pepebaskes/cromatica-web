/**
 * ==========================================
 * TIENDA CROMATICA - DATOS EDITABLES
 * ==========================================
 *
 * Aqui puedes cambiar todo lo importante de la tienda sin buscar entre la interfaz:
 * - Numero de WhatsApp que recibe pedidos
 * - Costo de entrega local
 * - Municipio permitido
 * - Productos de merch
 *
 * PARA AGREGAR UN PRODUCTO:
 * 1. Duplica uno de los objetos del array "storeProducts".
 * 2. Cambia id, nombre, descripcion, precio, colores y etiqueta.
 * 3. El id debe ser unico y sin espacios, por ejemplo: "gorra-cromatica".
 * 4. Pon tus fotos en public/images y agregalas en images.
 *
 * EJEMPLO DE FOTOS:
 * images: [
 *   '/images/camisa-frente.png',
 *   '/images/camisa-espalda.png',
 *   '/images/camisa-detalle.png',
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

export const STORE_WHATSAPP_PHONE = '525667718342';
export const STORE_ALLOWED_CITY = 'El Grullo, Jalisco';
export const STORE_DELIVERY_FEE = 25;

export const storeProducts: StoreProduct[] = [
  {
    id: 'playera-cromatica',
    name: 'Playera Cromatica 2.0',
    description: 'Corte unisex, logo frontal y energia de expo para usar antes, durante y despues del festival.',
    price: 380,
    color: '#FF8A00',
    accent: '#FF6B9D',
    tag: 'Preventa',
    icon: 'shirt',
    images: [
      // Cuando tengas las fotos reales, cambia estas rutas:
      '/images/camisaCromaticaFront.jpeg',
       '/images/camisaCromaticaBack.jpeg',
    ],
    initialQuantity: 1,
  },
  /*
  {
    id: 'tote-cromatica',
    name: 'Tote bag Cromatica',
    description: 'Bolsa de tela para llevar prints, stickers, libretas y compras de los emprendedores.',
    price: 180,
    color: '#26A69A',
    accent: '#42A5F5',
    tag: 'Expo kit',
    icon: 'bag',
    images: [
      // '/images/tote-frente.png',
      // '/images/tote-detalle.png',
    ],
  },
  {
    id: 'stickers-cromatica',
    name: 'Pack de stickers',
    description: 'Set coleccionable con mascota, tipografia Cromatica y piezas tropicales del festival.',
    price: 75,
    color: '#AB47BC',
    accent: '#FDD835',
    tag: 'Limitado',
    icon: 'sparkles',
    images: [
      // '/images/stickers-pack.png',
      // '/images/stickers-detalle.png',
    ],
  },
  */

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
      '/images/mi-producto-1.png',
      '/images/mi-producto-2.png',
    ],
  },
  */
];

export const formatStoreCurrency = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
});
