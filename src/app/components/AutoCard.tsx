/**
 * ==========================================
 * COMPONENTE: CARD DE AUTO CLÁSICO
 * ==========================================
 * 
 * Componente reutilizable para mostrar autos clásicos.
 * 
 * 🎯 PROPS:
 * - imagen: URL de la imagen del auto
 * - modelo: Modelo del auto
 * - marca: Marca del auto
 * - anio: Año del auto
 * - dueno: Nombre del dueño
 * - descripcion: Descripción breve
 */

interface AutoCardProps {
  imagen: string;
  modelo: string;
  marca: string;
  anio: string;
  dueno: string;
  descripcion: string;
}

export function AutoCard({
  imagen,
  modelo,
  marca,
  anio,
  dueno,
  descripcion,
}: AutoCardProps) {
  return (
    <div className="card-glow overflow-hidden h-full flex flex-col">
      {/* Imagen del auto */}
      <div className="img-hover-zoom h-64 bg-[var(--cromatica-bg-light)] overflow-hidden">
        <img
          src={imagen}
          alt={`${marca} ${modelo}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Información */}
      <div className="p-6 flex-grow">
        {/* Año (badge) */}
        <span
          className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-3"
          style={{
            background: 'var(--cromatica-gradient-3)',
            color: 'white',
          }}
        >
          {anio}
        </span>

        {/* Marca y Modelo */}
        <h3 className="text-xl font-bold text-gradient mb-1">
          {marca} {modelo}
        </h3>

        {/* Dueño */}
        <p className="text-sm text-[var(--cromatica-text-muted)] mb-3">
          🏆 Propietario: {dueno}
        </p>

        {/* Descripción */}
        <p className="text-sm text-[var(--cromatica-text-secondary)] leading-relaxed">
          {descripcion}
        </p>
      </div>
    </div>
  );
}

/**
 * ==========================================
 * GUÍA DE USO
 * ==========================================
 * 
 * <AutoCard
 *   imagen="url-imagen"
 *   modelo="Modelo del auto"
 *   marca="Marca"
 *   anio="1970"
 *   dueno="Nombre del dueño"
 *   descripcion="Descripción del auto..."
 * />
 */
