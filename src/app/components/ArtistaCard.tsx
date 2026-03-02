/**
 * ==========================================
 * COMPONENTE: CARD DE ARTISTA VISUAL
 * ==========================================
 * 
 * Componente reutilizable para mostrar artistas visuales.
 * 
 * 🎯 PROPS:
 * - imagen: URL de la imagen/obra del artista
 * - nombre: Nombre del artista
 * - especialidad: Tipo de arte (pintura, fotografía, etc.)
 * - descripcion: Bio breve
 * - instagram: (opcional) Usuario de Instagram
 */

interface ArtistaCardProps {
  imagen: string;
  nombre: string;
  especialidad: string;
  descripcion: string;
  instagram?: string;
}

export function ArtistaCard({
  imagen,
  nombre,
  especialidad,
  descripcion,
  instagram,
}: ArtistaCardProps) {
  return (
    <div className="card-glow overflow-hidden h-full flex flex-col group">
      {/* Imagen del artista/obra */}
      <div className="img-hover-zoom h-80 bg-[var(--cromatica-bg-light)] overflow-hidden">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Información */}
      <div className="p-6 flex-grow">
        {/* Especialidad */}
        <span className="text-xs font-bold text-[var(--cromatica-secondary)] uppercase tracking-wider">
          {especialidad}
        </span>

        {/* Nombre */}
        <h3 className="text-xl font-bold mt-2 mb-3">
          {nombre}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-[var(--cromatica-text-secondary)] leading-relaxed">
          {descripcion}
        </p>

        {/* Instagram */}
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--cromatica-primary)] hover:text-[var(--cromatica-secondary)] transition-colors"
          >
            📷 @{instagram}
          </a>
        )}
      </div>
    </div>
  );
}

/**
 * ==========================================
 * GUÍA DE USO
 * ==========================================
 * 
 * <ArtistaCard
 *   imagen="url-imagen"
 *   nombre="Nombre del Artista"
 *   especialidad="Pintura / Ilustración / etc."
 *   descripcion="Bio del artista..."
 *   instagram="username" // Sin el @
 * />
 */
