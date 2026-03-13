/**
 * ==========================================
 * SECCIÓN: ARTISTAS VISUALES
 * ==========================================
 * 
 * Galería de artistas visuales participantes.
 * Formato grid modular y repetible.
 * 
 * 🔧 AGREGAR MÁS ARTISTAS:
 * Agrega objetos al array 'artistas'
 */

import { ArtistaCard } from '../components/ArtistaCard';

export function ArtistasSection() {
  // 👉 AGREGA O MODIFICA ARTISTAS AQUÍ
  const artistas = [
    {
      id: 1,
      imagen: "/images/lepeImg.jpg",
      nombre: "Lepe",
      especialidad: "Diseñadora Gráfica",
      descripcion: "Diseñadora e ilustradora Grullense, trabajó y colaboró con Alquimía Gráfica, desde Guadalajara, hasta CROMÁTICA 2.0.",
      instagram: "xlepex",
    },
    {
      id: 2,
      imagen: "/images/bugambiliaTextilLogo.jpeg",
      nombre: "Bugambilia Textil",
      especialidad: "Crochet y Bordado",
      descripcion: "Artista de crochet y bordado, creando piezas únicas que fusionan tradición y modernidad.",
      instagram: "bugambilia_textil",
    },
    {
      id: 3,
      imagen: "/images/yulsGarciaTtuaje.jpg",
      nombre: "Yulss García",
      especialidad: "Tatuaje",
      descripcion: "Tatuadora desde hace 6 años y estudiante de Artes. Explora la piel y el lienzo como espacios de expresión artística.",
      instagram: "yulsstattoo_",
    },
    {
      id: 4,
      imagen: "/images/maruvu.png",
      nombre: "Marsuvu",
      especialidad: "Dibujo e Ilustración",
      descripcion: "Ilustración de libros, cómic, fanart y objetos hechos a mano: pines, aretes, llaveros y merch ilustrada.",
      instagram: "mars.uvu",
    },
    /** 
    {
      id: 5,
      imagen: "",
      nombre: "",
      especialidad: "",
      descripcion: "",
      instagram: "",
    },
    {
      id: 6,
      imagen: "",
      nombre: "PENDIENTE",
      especialidad: "",
      descripcion: "",
      instagram: "",
    },
    */
  ];

  /* 
  👉 DUPLICAR ESTE OBJETO PARA AGREGAR MÁS ARTISTAS:
  
  {
    id: 7, // Incrementa el número
    imagen: "URL_IMAGEN",
    nombre: "Nombre del Artista",
    especialidad: "Tipo de arte",
    descripcion: "Bio del artista...",
    instagram: "username",
  },
  */

  return (
    <section
      id="artistas"
      className="py-20 md:py-32 relative overflow-hidden bg-[var(--cromatica-bg-darker)]"
    >
      <div className="container-cromatica relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="badge-cromatica mb-4 inline-block">
            Galería
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Artistas Visuales
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Conoce a los artistas que expondrán sus obras en el festival
          </p>
        </div>

        {/* Grid de artistas - Masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {artistas.map((artista, index) => (
            <div
              key={artista.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArtistaCard
                imagen={artista.imagen}
                nombre={artista.nombre}
                especialidad={artista.especialidad}
                descripcion={artista.descripcion}
                instagram={artista.instagram}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block card-glow p-8 max-w-2xl">
            <h3 className="text-xl font-bold mb-3 text-[var(--cromatica-primary)]">
              🎨 ¿Eres artista visual?
            </h3>
            <p className="text-[var(--cromatica-text-secondary)] mb-6">
              Expón tu obra en CROMÁTICA 2.0. Tenemos espacio para pintores,
              fotógrafos, escultores, ilustradores y más.
            </p>
            <a href="#convocatoria" className="btn-cromatica">
              Registrarse como Artista
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
 * - Para agregar artistas: edita el array 'artistas'
 * - El grid se adapta automáticamente: 1 col móvil, 2 tablet, 3 desktop
 * - Las animaciones se escalonan con delay
 */
