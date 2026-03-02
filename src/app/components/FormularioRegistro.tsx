/**
 * ==========================================
 * COMPONENTE: FORMULARIO DE REGISTRO
 * ==========================================
 * * Componente reutilizable para formularios de registro.
 * Se usa en la RegistroSection con diferentes configuraciones.
 * * 🎯 PROPS:
 * - tipo: Tipo de registro (artista, banda, empresario, etc.)
 * - onSubmit: Función que se ejecuta al enviar el formulario
 */

import { useState } from 'react';
// Importamos la instancia de supabase desde tu carpeta lib
import { supabase } from '../../lib/supabase.ts';

interface FormularioRegistroProps {
  tipo: 'artista' | 'banda' | 'empresario' | 'disenador' | 'auto' | 'danza-folklorica' | 'danza-contemporanea';
}

export function FormularioRegistro({ tipo }: FormularioRegistroProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    descripcion: '',
  });

  // Estado para controlar el envío y feedback visual
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      /**
       * 👉 INTEGRACIÓN CON SUPABASE
       * Inserta los datos en la tabla 'registros'.
       * Asegúrate de que los nombres de las columnas en Supabase coincidan.
       */
      const { error } = await supabase
        .from('registros')
        .insert([
          { 
           tipo: tipo, 
            nombre: formData.nombre, 
            email: formData.email, 
            telefono: formData.telefono, 
            descripcion: formData.descripcion 
            // ❌ NO pongas created_at aquí. Supabase lo llenará solo.
          }
        ]);

      if (error) throw error;

      /**
       * 📧 INTEGRACIÓN CON VERCEL API (ZOHO MAIL)
       * Enviamos el correo de bienvenida automáticamente tras el registro exitoso.
       */
      try {
        await fetch('/api/enviar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            nombre: formData.nombre,
            tipo: tipo
          }),
        });
      } catch (mailError) {
        // Logueamos el error de correo pero no interrumpimos el flujo de éxito
        console.error('Error al solicitar envío de correo:', mailError);
      }

      // Mostrar mensaje de éxito
      alert('¡Registro enviado con éxito! Recibirás un correo de confirmación pronto.');
      
      // Limpiar formulario
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

  // Configuración según el tipo
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
      costo: '$50 MXN',
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
            background: 'var(--cromatica-gradient-1)',
            color: 'white',
          }}
        >
          {currentConfig.costo}
        </span>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
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

        {/* Email */}
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

        {/* Teléfono */}
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

        {/* Descripción */}
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

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={enviando}
          className="btn-cromatica w-full disabled:grayscale"
        >
          {enviando ? 'Enviando...' : 'Enviar Registro'}
        </button>

        <p className="text-xs text-[var(--cromatica-text-muted)] text-center mt-4">
          Al registrarte, aceptas nuestros términos y condiciones.
          Recibirás un correo de confirmación.
        </p>
      </form>
    </div>
  );
}

/**
 * ==========================================
 * GUÍA DE INTEGRACIÓN CON BACKEND (MODIFICADA)
 * ==========================================
 * * 1. SUPABASE (IMPLEMENTADO):
 * - La tabla en Supabase DEBE llamarse 'registros'.
 * - Columnas necesarias: id (int8/uuid), tipo (text), nombre (text), 
 * email (text), telefono (text), descripcion (text), created_at (timestamptz).
 * * 2. NOTIFICACIONES POR EMAIL (IMPLEMENTADO VÍA VERCEL API):
 * - Se realiza una petición POST a /api/enviar tras el insert en Supabase.
 * - Requiere variables EMAIL_USER y EMAIL_PASS configuradas en el dashboard de Vercel.
 */