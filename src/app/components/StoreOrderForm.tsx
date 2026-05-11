/**
 * ==========================================
 * COMPONENTE: FORMULARIO DE APARTADO
 * ==========================================
 *
 * Junta los datos del cliente y arma el mensaje de WhatsApp.
 * Al enviar, abre WhatsApp con toda la informacion lista para copiar/guardar.
 *
 * El pago NO se cobra aqui. Solo se solicita el apartado.
 */

import { FormEvent, useMemo, useState } from 'react';
import {
  CalendarDays,
  Heart,
  MapPin,
  MessageCircle,
  PackageCheck,
  UserRound,
} from 'lucide-react';
import {
  STORE_ALLOWED_CITY,
  STORE_DELIVERY_FEE,
  STORE_WHATSAPP_PHONE,
  StoreProduct,
  formatStoreCurrency,
} from '../data/storeMerch';

type CustomerData = {
  name: string;
  phone: string;
  city: string;
  address: string;
  schedule: string;
};

type StoreOrderFormProps = {
  products: StoreProduct[];
  quantities: Record<string, number>;
  subtotal: number;
};

const defaultCustomerData: CustomerData = {
  name: '',
  phone: '',
  city: STORE_ALLOWED_CITY,
  address: '',
  schedule: 'Tarde, despues de las 4:00 pm',
};

export function StoreOrderForm({
  products,
  quantities,
  subtotal,
}: StoreOrderFormProps) {
  const [customerData, setCustomerData] = useState<CustomerData>(defaultCustomerData);
  const [submitted, setSubmitted] = useState(false);

  const selectedProducts = useMemo(
    () => products.filter((product) => quantities[product.id] > 0),
    [products, quantities]
  );

  const deliveryFee = subtotal > 0 ? STORE_DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;
  const cityAllowed = customerData.city.trim().toLowerCase() === STORE_ALLOWED_CITY.toLowerCase();

  const updateCustomerData = (field: keyof CustomerData, value: string) => {
    setSubmitted(false);
    setCustomerData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const buildWhatsAppMessage = () => {
    const productLines = selectedProducts
      .map((product) => {
        const quantity = quantities[product.id];
        const lineTotal = product.price * quantity;
        return `- ${quantity} x ${product.name}: ${formatStoreCurrency.format(lineTotal)}`;
      })
      .join('\n');

    return [
      'Hola, quiero apartar merch de Cromatica 2.0.',
      '',
      'PRODUCTOS:',
      productLines,
      '',
      `Subtotal: ${formatStoreCurrency.format(subtotal)}`,
      `Entrega local: ${formatStoreCurrency.format(deliveryFee)}`,
      `Total estimado: ${formatStoreCurrency.format(total)}`,
      '',
      'DATOS:',
      `Nombre: ${customerData.name}`,
      `WhatsApp: ${customerData.phone}`,
      `Municipio: ${customerData.city}`,
      `Direccion: ${customerData.address}`,
      `Horario preferido: ${customerData.schedule}`,
      '',
      'Nota: entiendo que este pedido es un apartado y que el pago se coordina directamente.',
    ].join('\n');
  };

  const buildWhatsAppUrl = () =>
    `https://wa.me/${STORE_WHATSAPP_PHONE}?text=${encodeURIComponent(buildWhatsAppMessage())}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg border border-[#FF8A00]/20 shadow-xl overflow-hidden"
    >
      <div className="p-5 sm:p-6 bg-gradient-to-br from-[#FF8A00] via-[#FF6B9D] to-[#AB47BC] text-white">
        <div className="flex items-center gap-3 mb-3">
          <PackageCheck className="w-6 h-6" />
          <h2 className="text-2xl font-black">Tu pedido</h2>
        </div>
        <p className="text-sm text-white/90">
          Apartado manual para entregar antes de la expo.
        </p>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        <div className="space-y-3">
          {selectedProducts.length === 0 ? (
            <div className="rounded-lg bg-[#FFF8F0] border border-[#FF8A00]/20 p-4 text-sm font-bold text-gray-600">
              Agrega al menos un producto para armar el pedido.
            </div>
          ) : (
            selectedProducts.map((product) => (
              <div key={product.id} className="flex justify-between gap-4 text-sm">
                <span className="font-bold text-gray-700">
                  {quantities[product.id]} x {product.name}
                </span>
                <span className="font-black text-gray-900">
                  {formatStoreCurrency.format(product.price * quantities[product.id])}
                </span>
              </div>
            ))
          )}

          <div className="border-t border-gray-100 pt-3 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="font-bold">{formatStoreCurrency.format(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Entrega local</span>
              <span className="font-bold">{formatStoreCurrency.format(deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-xl font-black text-gray-950">
              <span>Total estimado</span>
              <span>{formatStoreCurrency.format(total)}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="flex items-center gap-2 text-sm font-black text-gray-800 mb-2">
              <UserRound className="w-4 h-4 text-[#FF8A00]" />
              Nombre completo
            </span>
            <input
              required
              type="text"
              value={customerData.name}
              onChange={(event) => updateCustomerData('name', event.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#FF8A00] focus:ring-2 focus:ring-[#FF8A00]/20"
              placeholder="Tu nombre"
            />
          </label>

          <label className="block">
            <span className="text-sm font-black text-gray-800 mb-2 block">
              WhatsApp
            </span>
            <input
              required
              type="tel"
              value={customerData.phone}
              onChange={(event) => updateCustomerData('phone', event.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#FF8A00] focus:ring-2 focus:ring-[#FF8A00]/20"
              placeholder="321 000 0000"
            />
          </label>

          <label className="block">
            <span className="flex items-center gap-2 text-sm font-black text-gray-800 mb-2">
              <MapPin className="w-4 h-4 text-[#26A69A]" />
              Municipio
            </span>
            <input
              required
              value={customerData.city}
              onChange={(event) => updateCustomerData('city', event.target.value)}
              className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                cityAllowed
                  ? 'border-gray-200 focus:border-[#26A69A] focus:ring-[#26A69A]/20'
                  : 'border-[#FF6B9D] focus:border-[#FF6B9D] focus:ring-[#FF6B9D]/20'
              }`}
            />
            {!cityAllowed && (
              <span className="mt-2 block text-xs font-bold text-[#AB47BC]">
                Por ahora la entrega solo esta activa en {STORE_ALLOWED_CITY}.
              </span>
            )}
          </label>

          <label className="block">
            <span className="text-sm font-black text-gray-800 mb-2 block">
              Direccion de entrega
            </span>
            <textarea
              required
              rows={3}
              value={customerData.address}
              onChange={(event) => updateCustomerData('address', event.target.value)}
              className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#FF8A00] focus:ring-2 focus:ring-[#FF8A00]/20"
              placeholder="Calle, colonia, numero y referencias"
            />
          </label>

          <label className="block">
            <span className="flex items-center gap-2 text-sm font-black text-gray-800 mb-2">
              <CalendarDays className="w-4 h-4 text-[#AB47BC]" />
              Horario preferido
            </span>
            <select
              value={customerData.schedule}
              onChange={(event) => updateCustomerData('schedule', event.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#FF8A00] focus:ring-2 focus:ring-[#FF8A00]/20"
            >
              <option>Tarde, despues de las 4:00 pm</option>
              <option>Mañana, antes de las 12:00 pm</option>
              <option>Noche, despues de las 7:00 pm</option>
              <option>Lo coordinamos por WhatsApp</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={subtotal === 0 || !cityAllowed}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-4 text-sm font-black text-white shadow-lg transition-all duration-300 enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:bg-gray-300"
          style={
            subtotal > 0 && cityAllowed
              ? {
                  background:
                    'linear-gradient(135deg, #FF8A00 0%, #FF6B9D 50%, #AB47BC 100%)',
                }
              : undefined
          }
        >
          <MessageCircle className="w-4 h-4" />
          Solicitar apartado por WhatsApp
        </button>

        {submitted && cityAllowed && subtotal > 0 && (
          <div className="rounded-lg bg-[#F0FFF8] border border-[#26A69A]/30 p-4 text-sm text-gray-700">
            <div className="flex items-center gap-2 font-black text-[#26A69A] mb-1">
              <Heart className="w-4 h-4 fill-current" />
              Pedido enviado a WhatsApp
            </div>
            <p className="mb-3">
              Se abrio WhatsApp con el mensaje del pedido listo. Si no se abrio, usa este enlace.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#26A69A] px-4 py-2 text-xs font-black text-white hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              Abrir WhatsApp
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
