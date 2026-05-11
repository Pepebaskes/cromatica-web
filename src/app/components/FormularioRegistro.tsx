/**
 * ==========================================
 * COMPONENTE: FORMULARIO DE REGISTRO
 * ==========================================
 *
 * Las inscripciones de CROMATICA 2.0 estan cerradas.
 * Fecha limite: 10 de mayo de 2026.
 *
 * El componente conserva la prop "tipo" para que RegistroSection no tenga que cambiar.
 * Cuando se abra una futura convocatoria, puedes volver a activar el formulario
 * cambiando INSCRIPCIONES_CERRADAS a false y restaurando el envio.
 */

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

const INSCRIPCIONES_CERRADAS = true;
const FECHA_LIMITE = '10 de mayo de 2026';

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

  return (
    <div className="card-glow p-8">
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">{currentConfig.icono}</div>
        <h3 className="text-2xl font-bold mb-2">{currentConfig.titulo}</h3>
        <span
          className="inline-block px-4 py-2 rounded-full font-bold text-white"
          style={{
            background: INSCRIPCIONES_CERRADAS
              ? '#4b5563'
              : 'var(--cromatica-gradient-1)',
          }}
        >
          INSCRIPCIONES CERRADAS
        </span>
      </div>

      <div className="text-center p-8 bg-[#FFF8F0] rounded-xl border-2 border-[#FF8A00]/20">
        <p className="text-xl font-black text-[var(--cromatica-primary)] mb-3">
          Ya no estamos recibiendo inscripciones
        </p>
        <p className="text-sm md:text-base text-[var(--cromatica-text-secondary)] leading-relaxed max-w-xl mx-auto">
          Gracias por tu interes en participar en CROMATICA 2.0. La fecha limite
          para inscribirse fue el {FECHA_LIMITE}, por lo que el formulario ya no
          acepta nuevos registros.
        </p>
        <p className="text-sm text-[var(--cromatica-text-muted)] mt-4">
          Te esperamos en la expo y en futuras convocatorias.
        </p>
      </div>
    </div>
  );
}
