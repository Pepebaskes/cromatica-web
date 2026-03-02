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
      imagen: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
      marca: "Volkswagen",
      modelo: "Beetle",
      anio: "1967",
      dueno: "Ricardo Montoya",
      descripcion: "Vocho restaurado con pintura original. Motor renovado y completamente funcional. Una joya de la ingeniería alemana.",
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop",
      marca: "Ford",
      modelo: "Mustang",
      anio: "1969",
      dueno: "Carlos Vega",
      descripcion: "Mustang clásico en condiciones de exhibición. Motor V8 original, transmisión manual. Un ícono americano.",
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
      marca: "Chevrolet",
      modelo: "Impala",
      anio: "1964",
      dueno: "Jorge Ramírez",
      descripcion: "Impala lowrider con sistema hidráulico. Pintura metálica personalizada y interiores de cuero. Cultura chicana.",
    },
    {
      id: 4,
      imagen: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      marca: "Porsche",
      modelo: "911",
      anio: "1973",
      dueno: "Alejandro Ruiz",
      descripcion: "911 clásico en color naranja original. Restauración completa respetando especificaciones de fábrica.",
    },
    {
      id: 5,
      imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      marca: "Dodge",
      modelo: "Charger",
      anio: "1970",
      dueno: "Fernando López",
      descripcion: "Charger muscle car con motor Hemi. Coleccionable en estado impecable. Potencia pura.",
    },
    {
      id: 6,
      imagen: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
      marca: "Mini",
      modelo: "Cooper",
      anio: "1965",
      dueno: "Ana Patricia Silva",
      descripcion: "Mini Cooper británico restaurado. Pintura racing green con techo blanco. Pequeño pero legendario.",
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
