/**
 * ==========================================
 * COMPONENTE: FORMULARIO DE REGISTRO
 * ==========================================
 *
 * Formulario reutilizable para las convocatorias abiertas de CROMÁTICA 3.0.
 */

import { FormEvent, useState } from 'react';
import { supabase } from '../../lib/supabase';

interface FormularioRegistroProps {
  tipo:
    | 'artista'
    | 'banda'
    | 'empresario'
    | 'disenador'
    | 'auto'
    | 'danza-folklorica'
    | 'danza-contemporanea';
}

const config = {
  artista: {
    titulo: 'Registro de Artista Visual',
    icono: '🎨',
  },
  banda: {
    titulo: 'Registro de Banda/Musico',
    icono: '🎸',
  },
  empresario: {
    titulo: 'Registro de Empresario/Stand',
    icono: '🏪',
  },
  disenador: {
    titulo: 'Registro de Disenador de Moda',
    icono: '👗',
  },
  auto: {
    titulo: 'Registro de Auto Clasico',
    icono: '🚗',
  },
  'danza-folklorica': {
    titulo: 'Registro de Danza Folclorica',
    icono: '💃',
  },
  'danza-contemporanea': {
    titulo: 'Registro de Danza Contemporanea',
    icono: '🕺',
  },
};

export function FormularioRegistro({ tipo }: FormularioRegistroProps) {
  const currentConfig = config[tipo];
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    descripcion: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionState('idle');

    const { error } = await supabase.from('registros').insert({
      tipo,
      ...formData,
    });

    setIsSubmitting(false);

    if (error) {
      setSubmissionState('error');
      return;
    }

    setSubmissionState('success');
    setFormData({ nombre: '', email: '', telefono: '', descripcion: '' });
  };

  return (
    <div className="card-glow p-8">
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">{currentConfig.icono}</div>
        <h3 className="text-2xl font-bold mb-2">{currentConfig.titulo}</h3>
        <span className="inline-block px-4 py-2 rounded-full font-bold text-white bg-gradient-to-r from-[#EC168C] via-[#A364DF] to-[#27B7E6]">
          CONVOCATORIA ABIERTA
        </span>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5 max-w-2xl mx-auto">
        <label className="grid gap-2 text-sm font-bold">
          Nombre completo
          <input
            required
            value={formData.nombre}
            onChange={(event) => handleChange('nombre', event.target.value)}
            className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#27B7E6] focus:outline-none focus:ring-2 focus:ring-[#27B7E6]/20"
            placeholder="Tu nombre o nombre del proyecto"
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">
            Correo electrónico
            <input
              required
              type="email"
              value={formData.email}
              onChange={(event) => handleChange('email', event.target.value)}
              className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#27B7E6] focus:outline-none focus:ring-2 focus:ring-[#27B7E6]/20"
              placeholder="correo@ejemplo.com"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold">
            Teléfono o WhatsApp
            <input
              type="tel"
              value={formData.telefono}
              onChange={(event) => handleChange('telefono', event.target.value)}
              className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#27B7E6] focus:outline-none focus:ring-2 focus:ring-[#27B7E6]/20"
              placeholder="Tu número de contacto"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-bold">
          Cuéntanos sobre tu propuesta
          <textarea
            required
            rows={5}
            value={formData.descripcion}
            onChange={(event) => handleChange('descripcion', event.target.value)}
            className="w-full resize-y rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#27B7E6] focus:outline-none focus:ring-2 focus:ring-[#27B7E6]/20"
            placeholder="Comparte una breve descripción de tu proyecto, obra, marca o presentación."
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-cromatica w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Enviando registro...' : 'Enviar registro'}
        </button>

        {submissionState === 'success' && (
          <p className="rounded-lg border border-[#65CA77]/45 bg-[#65CA77]/10 px-4 py-3 text-sm font-semibold text-[#B7F2C2]" role="status">
            Registro enviado. Te contactaremos con los siguientes pasos.
          </p>
        )}

        {submissionState === 'error' && (
          <p className="rounded-lg border border-[#EC168C]/45 bg-[#EC168C]/10 px-4 py-3 text-sm font-semibold text-[#FFC0DE]" role="alert">
            No pudimos enviar tu registro. Inténtalo de nuevo en unos minutos.
          </p>
        )}
      </form>
    </div>
  );
}
