/**
 * ==========================================
 * COMPONENTE: CARD DE BANDA
 * ==========================================
 * 
 * Este es un componente REUTILIZABLE para mostrar información de bandas.
 * 
 * 🎯 PROPS (propiedades que recibe):
 * - imagen: URL de la imagen de la banda
 * - nombre: Nombre de la banda
 * - genero: Género musical
 * - horario: Hora de presentación
 * - descripcion: Descripción breve
 * - redesSociales: (opcional) Enlaces a redes sociales
 * 
 * 🔧 CÓMO USAR:
 * <BandCard
 *   imagen="url-imagen"
 *   nombre="Nombre de la Banda"
 *   genero="Rock"
 *   horario="20:00 - 21:00"
 *   descripcion="Descripción de la banda..."
 * />
 */

interface BandCardProps {
  imagen: string;
  nombre: string;
  genero: string;
  horario: string;
  descripcion: string;
  redesSociales?: {
    instagram?: string;
    facebook?: string;
    spotify?: string;
    youtube?: string;
  };
}

export function BandCard({
  imagen,
  nombre,
  genero,
  horario,
  descripcion,
  redesSociales,
}: BandCardProps) {
  return (
    <div className="card-glow p-6 h-full flex flex-col">
      {/* Imagen de la banda con efecto hover */}
      <div className="img-hover-zoom mb-4 rounded-lg overflow-hidden h-64 bg-[var(--cromatica-bg-light)]">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Información de la banda */}
      <div className="flex-grow">
        {/* Género (badge) */}
        <span
          className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-3"
          style={{
            background: 'var(--cromatica-gradient-1)',
            color: 'white',
          }}
        >
          {genero}
        </span>

        {/* Nombre de la banda */}
        <h3 className="text-2xl font-bold mb-2 text-gradient">
          {nombre}
        </h3>

        {/* Horario */}
        <p className="text-sm text-[var(--cromatica-primary)] font-semibold mb-3">
          🕐 {horario}
        </p>

        {/* Descripción */}
        <p className="text-[var(--cromatica-text-secondary)] text-sm leading-relaxed mb-4">
          {descripcion}
        </p>
      </div>

      {/* Redes sociales (si existen) */}
      {redesSociales && (
        <div className="flex gap-3 pt-4 border-t border-[var(--cromatica-primary)]/20">
          {redesSociales.instagram && (
            <a
              href={redesSociales.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-colors"
              aria-label="Instagram"
            >
              📷
            </a>
          )}
          {redesSociales.facebook && (
            <a
              href={redesSociales.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-colors"
              aria-label="Facebook"
            >
              📘
            </a>
          )}
          {redesSociales.spotify && (
            <a
              href={redesSociales.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-colors"
              aria-label="Spotify"
            >
              🎵
            </a>
          )}
          {redesSociales.youtube && (
            <a
              href={redesSociales.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-colors"
              aria-label="YouTube"
            >
              📺
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * ==========================================
 * GUÍA DE USO
 * ==========================================
 * 
 * 1. IMPORTAR EL COMPONENTE:
 *    import { BandCard } from './components/BandCard';
 * 
 * 2. USAR EL COMPONENTE:
 *    <BandCard
 *      imagen="https://ejemplo.com/imagen.jpg"
 *      nombre="Los Rockeros"
 *      genero="Rock Alternativo"
 *      horario="20:00 - 21:00"
 *      descripcion="Una banda increíble..."
 *      redesSociales={{
 *        instagram: "https://instagram.com/banda",
 *        spotify: "https://open.spotify.com/artist/..."
 *      }}
 *    />
 * 
 * 3. AGREGAR MÁS REDES SOCIALES:
 *    - Modifica la interfaz BandCardProps
 *    - Agrega el nuevo campo en redesSociales
 *    - Agrega el link en el return del componente
 * 
 * 4. PERSONALIZAR ESTILOS:
 *    - Los colores usan variables CSS de cromatica.css
 *    - Modifica las clases de Tailwind según necesites
 */
