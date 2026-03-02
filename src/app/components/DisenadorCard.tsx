/**
 * ==========================================
 * COMPONENTE: CARD DE DISEÑADOR
 * ==========================================
 * 
 * Componente reutilizable para mostrar diseñadores de moda.
 * 
 * 🎯 PROPS:
 * - imagen: URL de imagen del diseño/marca
 * - marca: Nombre de la marca
 * - disenador: Nombre del diseñador
 * - estilo: Estilo de moda
 * - descripcion: Descripción de la marca
 * - instagram: (opcional) Usuario de Instagram
 */

interface DisenadorCardProps {
  imagen: string;
  marca: string;
  disenador: string;
  estilo: string;
  descripcion: string;
  instagram?: string;
}

export function DisenadorCard({
  imagen,
  marca,
  disenador,
  estilo,
  descripcion,
  instagram,
}: DisenadorCardProps) {
  return (
    <div className="card-glow overflow-hidden h-full flex flex-col group">
      {/* Imagen */}
      <div className="img-hover-zoom h-96 bg-[var(--cromatica-bg-light)] overflow-hidden">
        <img
          src={imagen}
          alt={marca}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Información */}
      <div className="p-6 flex-grow">
        {/* Estilo */}
        <span
          className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-3"
          style={{
            background: 'var(--cromatica-gradient-2)',
            color: 'white',
          }}
        >
          {estilo}
        </span>

        {/* Marca */}
        <h3 className="text-2xl font-bold text-gradient mb-1">
          {marca}
        </h3>

        {/* Diseñador */}
        <p className="text-sm text-[var(--cromatica-text-muted)] mb-3">
          por {disenador}
        </p>

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
 * <DisenadorCard
 *   imagen="url-imagen"
 *   marca="Nombre de la Marca"
 *   disenador="Nombre del Diseñador"
 *   estilo="Streetwear / Haute Couture / etc."
 *   descripcion="Descripción de la marca..."
 *   instagram="username"
 * />
 */
