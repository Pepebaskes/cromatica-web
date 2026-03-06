/**
 * ==========================================
 * SECCIÓN: SHOW DE AUTOS CLÁSICOS
 * ==========================================
 * 
 * Galería de autos clásicos y vintage.
 * 
 * 🔧 AGREGAR MÁS AUTOS:
 * Agrega objetos al array 'autos'
 */

import { AutoCard } from '../components/AutoCard';

export function AutosClasicosSection() {
  // 👉 AGREGA O MODIFICA AUTOS AQUÍ
  const autos = [
    {
      id: 1,
      imagen: "",
      marca: "PENDIENTE",
      modelo: "",
      anio: "",
      dueno: "",
      descripcion: "",
    },
    {
      id: 2,
      imagen: "",
      marca: "",
      modelo: "",
      anio: "",
      dueno: "",
      descripcion: "",
    },
    {
      id: 3,
      imagen: "",
      marca: "PENDIENTE",
      modelo: "",
      anio: "",
      dueno: "",
      descripcion: "",
    },
    {
      id: 4,
      imagen: "",
      marca: "PENDIENTE",
      modelo: "PENDIENTE",
      anio: "PENDIENTE",
      dueno: "PENDIENTE",
      descripcion: "PENDIENTE",
    },
    {
      id: 5,
      imagen: "",
      marca: "PENDIENTE",
      modelo: "PENDIENTE",
      anio: "PENDIENTE",
      dueno: "PENDIENTE",
      descripcion: "PENDIENTE",
    },
    {
      id: 6,
      imagen: "",
      marca: "",
      modelo: "",
      anio: "",
      dueno: "",
      descripcion: "",
    },
  ];

  /* 
  👉 PARA AGREGAR UN NUEVO AUTO:
  
  {
    id: 7,
    imagen: "URL_IMAGEN",
    marca: "Marca",
    modelo: "Modelo",
    anio: "Año",
    dueno: "Nombre del dueño",
    descripcion: "Descripción del auto...",
  },
  */

  return (
    <section
      id="autos"
      className="py-20 md:py-32 relative overflow-hidden bg-[var(--cromatica-bg-darker)]"
    >
      {/* Fondo decorativo */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--cromatica-green)] rounded-full blur-[150px] opacity-10"></div>

      <div className="container-cromatica relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="badge-cromatica mb-4 inline-block">
            Clásicos
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Show de Autos Clásicos
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Exhibición de autos clásicos, vintage y modificados
          </p>
        </div>

        {/* Grid de autos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {autos.map((auto, index) => (
            <div
              key={auto.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AutoCard
                imagen={auto.imagen}
                marca={auto.marca}
                modelo={auto.modelo}
                anio={auto.anio}
                dueno={auto.dueno}
                descripcion={auto.descripcion}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block card-glow p-8 max-w-2xl">
            <h3 className="text-xl font-bold mb-3 text-[var(--cromatica-primary)]">
              🚗 ¿Tienes un auto clásico?
            </h3>
            <p className="text-[var(--cromatica-text-secondary)] mb-6">
              Exhibe tu auto en CROMÁTICA 2.0. Aceptamos autos clásicos,
              vintage, lowriders y modificados. Costo: $50 MXN.
            </p>
            <a href="#convocatoria" className="btn-cromatica">
              Registrar Mi Auto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ==========================================
 * NOTAS
 * ==========================================
 * 
 * - Grid de 3 columnas en desktop
 * - Cada card muestra: imagen, marca, modelo, año, dueño, descripción
 * - Para agregar autos: edita el array 'autos'
 * - Las imágenes se cargan con lazy loading para mejor performance
 */
