/**
 * ==========================================
 * COMPONENTE: FORMULARIO DE REGISTRO (ACTUALIZADO)
 * ==========================================
 * Cambios realizados:
 * 1. 🛑 Lógica de Cierre: Se añadió 'categoriasCerradas' para gestionar cupos.
 * 2. 🛡️ Protección de Handler: 'handleSubmit' ahora ignora envíos si la categoría está cerrada.
 * 3. 🎨 UI Dinámica: El formulario se reemplaza por un mensaje de "Cupo Lleno".
 * 4. 🏷️ Etiquetas de Estado: El badge de costo cambia a "CUPO LLENO" y color neutro.
 */

import { useState } from 'react';
import { supabase } from '../../lib/supabase.ts';

interface FormularioRegistroProps {
  tipo: 'artista' | 'banda' | 'empresario' | 'disenador' | 'auto' | 'danza-folklorica' | 'danza-contemporanea';
}

export function FormularioRegistro({ tipo }: FormularioRegistroProps) {
  // --- GESTIÓN DE CUPOS ---
  // Agrega aquí los tipos que desees desactivar
  const categoriasCerradas = ['banda']; 
  const estaCerrado = categoriasCerradas.includes(tipo);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    descripcion: '',
  });

  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Seguridad adicional: si la categoría está cerrada, no procesar nada
    if (estaCerrado) return;

    setEnviando(true);

    try {
      const { error } = await supabase
        .from('registros')
        .insert([
          { 
            tipo: tipo, 
            nombre: formData.nombre, 
            email: formData.email, 
            telefono: formData.telefono, 
            descripcion: formData.descripcion 
          }
        ]);

      if (error) throw error;

      try {
        await fetch('/api/enviar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            nombre: formData.nombre,
            tipo: tipo
          }),
        });
      } catch (mailError) {
        console.error('Error al solicitar envío de correo:', mailError);
      }

      alert('¡Registro enviado con éxito! Recibirás un correo de confirmación pronto.');
      
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        descripcion: '',
      });

    } catch (error: any) {
      console.error('Error al enviar a Supabase:', error);
      alert('Hubo un error al procesar tu registro: ' + (error.message || 'Error desconocido'));
    } finally {
      setEnviando(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const config = {
    artista: {
      titulo: 'Registro de Artista Visual',
      icono: '🎨',
      costo: '$50 MXN',
      placeholder: 'Nombre completo o nombre artístico',
    },
    banda: {
      titulo: 'Registro de Banda/Músico',
      icono: '🎸',
      costo: 'CUPO LLENO', // Cambiado visualmente
      placeholder: 'Nombre de la banda o artista',
    },
    empresario: {
      titulo: 'Registro de Empresario/Stand',
      icono: '🏪',
      costo: '$100 MXN',
      placeholder: 'Nombre del negocio',
    },
    disenador: {
      titulo: 'Registro de Diseñador de Moda',
      icono: '👗',
      costo: '$50 MXN',
      placeholder: 'Nombre de la marca o diseñador',
    },
    auto: {
      titulo: 'Registro de Auto Clásico',
      icono: '🚗',
      costo: '$50 MXN',
      placeholder: 'Tu nombre completo',
    },
    'danza-folklorica': {
      titulo: 'Registro de Danza Folclórica',
      icono: '💃',
      costo: '$50 MXN',
      placeholder: 'Nombre del grupo o bailarín',
    },
    'danza-contemporanea': {
      titulo: 'Registro de Danza Contemporánea',
      icono: '🕺',
      costo: 'Gratis',
      placeholder: 'Nombre del grupo o bailarín',
    },
  };

  const currentConfig = config[tipo];

  return (
    <div className="card-glow p-8">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">{currentConfig.icono}</div>
        <h3 className="text-2xl font-bold mb-2">{currentConfig.titulo}</h3>
        <span
          className="inline-block px-4 py-2 rounded-full font-bold"
          style={{
            // Si está cerrado, usamos un color grisáceo, si no, el gradiente original
            background: estaCerrado ? '#4b5563' : 'var(--cromatica-gradient-1)',
            color: 'white',
          }}
        >
          {currentConfig.costo}
        </span>
      </div>

      {/* Condicional de Renderizado */}
      {estaCerrado ? (
        <div className="text-center p-8 bg-black/20 rounded-xl border border-white/10">
          <p className="text-lg font-medium text-[var(--cromatica-primary)] mb-2">
            Convocatoria Finalizada
          </p>
          <p className="text-sm text-[var(--cromatica-text-muted)]">
            Lo sentimos, el cupo para esta categoría se ha llenado. 
            ¡Mantente al tanto de nuestras redes para futuras ediciones!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor={`nombre-${tipo}`} className="block text-sm font-medium mb-2">
              Nombre *
            </label>
            <input
              type="text"
              id={`nombre-${tipo}`}
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder={currentConfig.placeholder}
              required
              disabled={enviando}
              className="w-full px-4 py-3 bg-[var(--cromatica-bg-light)] border border-[var(--cromatica-primary)]/30 rounded-lg focus:outline-none focus:border-[var(--cromatica-primary)] transition-colors disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor={`email-${tipo}`} className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id={`email-${tipo}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
              disabled={enviando}
              className="w-full px-4 py-3 bg-[var(--cromatica-bg-light)] border border-[var(--cromatica-primary)]/30 rounded-lg focus:outline-none focus:border-[var(--cromatica-primary)] transition-colors disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor={`telefono-${tipo}`} className="block text-sm font-medium mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              id={`telefono-${tipo}`}
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="55 1234 5678"
              required
              disabled={enviando}
              className="w-full px-4 py-3 bg-[var(--cromatica-bg-light)] border border-[var(--cromatica-primary)]/30 rounded-lg focus:outline-none focus:border-[var(--cromatica-primary)] transition-colors disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor={`descripcion-${tipo}`} className="block text-sm font-medium mb-2">
              Cuéntanos sobre ti *
            </label>
            <textarea
              id={`descripcion-${tipo}`}
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Describe tu trabajo, experiencia, estilo..."
              rows={4}
              required
              disabled={enviando}
              className="w-full px-4 py-3 bg-[var(--cromatica-bg-light)] border border-[var(--cromatica-primary)]/30 rounded-lg focus:outline-none focus:border-[var(--cromatica-primary)] transition-colors resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="btn-cromatica w-full disabled:grayscale"
          >
            {enviando ? 'Enviando...' : 'Enviar Registro'}
          </button>

          <p className="text-xs text-[var(--cromatica-text-muted)] text-center mt-4">
            Al registrarte, aceptas nuestros términos y condiciones.
          </p>
        </form>
      )}
    </div>
  );
}