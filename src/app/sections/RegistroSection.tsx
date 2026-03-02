import { useState } from 'react';
import { FormularioRegistro } from '../components/FormularioRegistro';
import { Palette, Music, Store, Shirt, Car, Users } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export function RegistroSection() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>('artista');

  const categorias = [
    { id: 'artista', label: 'Artista Visual', icono: Palette },
    { id: 'banda', label: 'Banda/Músico', icono: Music },
    { id: 'empresario', label: 'Empresario', icono: Store },
    { id: 'disenador', label: 'Diseñador', icono: Shirt },
    { id: 'auto', label: 'Auto Clásico', icono: Car },
    { id: 'danza-contemporanea', label: 'Danza', icono: Users },
  ];

  return (
    <section
      id="registro"
      className="scroll-mt-40 py-20 md:py-32 relative bg-gradient-to-b from-[#F8F9FA] to-[#FFFFFF]"
    >
      {/* Fondo decorativo */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F48FB1 0%, transparent 70%)' }}
      ></div>

      <div className="container-cromatica relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-lg border-2 border-[#FF8A00]/20 mb-4">
            <Palette className="w-4 h-4 text-[#FF8A00]" />
            <span className="font-bold text-sm text-[#FF8A00] uppercase tracking-wide">
              ¡Únete!
            </span>
          </span>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Registro
          </h2>

          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Selecciona tu categoría y completa tu registro para participar en CROMÁTICA 2.0
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Pestañas Desktop */}
          <div className="mb-8">
            <div className="hidden lg:flex gap-2 bg-white p-2 rounded-lg overflow-x-auto shadow-md border border-gray-100">
              {categorias.map((cat) => {
                const IconComponent = cat.icono;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCategoriaActiva(cat.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                      categoriaActiva === cat.id
                        ? 'bg-gradient-to-r from-[var(--cromatica-primary)] to-[var(--cromatica-secondary)] text-white shadow-lg'
                        : 'text-[var(--cromatica-text-secondary)] hover:bg-[#FFF8F0]'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
              <select
                value={categoriaActiva}
                onChange={(e) => setCategoriaActiva(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-[var(--cromatica-primary)]/30 rounded-lg text-[var(--cromatica-text-primary)] font-semibold focus:outline-none focus:border-[var(--cromatica-primary)] shadow-md"
              >
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Formulario */}
          <div className="animate-fade-in-up">
            {categoriaActiva === 'artista' && <FormularioRegistro tipo="artista" />}
            {categoriaActiva === 'banda' && <FormularioRegistro tipo="banda" />}
            {categoriaActiva === 'empresario' && <FormularioRegistro tipo="empresario" />}
            {categoriaActiva === 'disenador' && <FormularioRegistro tipo="disenador" />}
            {categoriaActiva === 'auto' && <FormularioRegistro tipo="auto" />}
            {categoriaActiva === 'danza-contemporanea' && (
              <FormularioRegistro tipo="danza-contemporanea" />
            )}
          </div>

          {/* Costos */}
          <div className="mt-12 card-glow p-8">
            <h3 className="text-xl font-bold mb-4 text-center text-gradient">
              💰 Costos de Participación
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="bg-[var(--cromatica-bg-light)] p-4 rounded-lg">
                <p className="font-semibold text-[var(--cromatica-primary)] mb-1">
                  Artistas Visuales
                </p>
                <p className="text-2xl font-bold">$50 MXN</p>
              </div>

              <div className="bg-[var(--cromatica-bg-light)] p-4 rounded-lg">
                <p className="font-semibold text-[var(--cromatica-secondary)] mb-1">
                  Bandas/Músicos
                </p>
                <p className="text-2xl font-bold">$50 MXN</p>
              </div>

              <div className="bg-[var(--cromatica-bg-light)] p-4 rounded-lg">
                <p className="font-semibold text-[var(--cromatica-tertiary)] mb-1">
                  Empresarios
                </p>
                <p className="text-2xl font-bold">$100 MXN</p>
              </div>

              <div className="bg-[var(--cromatica-bg-light)] p-4 rounded-lg">
                <p className="font-semibold text-[var(--cromatica-accent)] mb-1">
                  Diseñadores
                </p>
                <p className="text-2xl font-bold">$50 MXN</p>
              </div>

              <div className="bg-[var(--cromatica-bg-light)] p-4 rounded-lg">
                <p className="font-semibold text-[var(--cromatica-purple)] mb-1">
                  Autos Clásicos
                </p>
                <p className="text-2xl font-bold">$50 MXN</p>
              </div>

              <div className="bg-[var(--cromatica-bg-light)] p-4 rounded-lg">
                <p className="font-semibold text-[var(--cromatica-green)] mb-1">
                  Danza
                </p>
                <p className="text-2xl font-bold">$50 MXN </p>
              </div>
            </div>

            <p className="text-center text-sm text-[var(--cromatica-text-muted)] mt-6">
              El pago se realiza después de que tu registro sea aprobado.
              Recibirás instrucciones por correo electrónico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}