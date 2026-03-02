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
      imagen: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=800&fit=crop",
      nombre: "Ana Martínez",
      especialidad: "Pintura Abstracta",
      descripcion: "Artista visual especializada en arte abstracto contemporáneo. Sus obras exploran la relación entre el color y la emoción.",
      instagram: "anamartinez.art",
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=800&fit=crop",
      nombre: "Carlos Ruiz",
      especialidad: "Fotografía Urbana",
      descripcion: "Fotógrafo documental que captura la esencia de la vida urbana mexicana. Premio Nacional de Fotografía 2024.",
      instagram: "carlosruiz.photo",
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=800&fit=crop",
      nombre: "María López",
      especialidad: "Ilustración Digital",
      descripcion: "Ilustradora independiente con estilo colorido y surrealista. Su trabajo ha sido publicado en revistas internacionales.",
      instagram: "maria.illustrates",
    },
    {
      id: 4,
      imagen: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop",
      nombre: "David Hernández",
      especialidad: "Escultura",
      descripcion: "Escultor que trabaja con materiales reciclados. Sus obras cuestionan el consumismo y la cultura del desperdicio.",
      instagram: "david.escultor",
    },
    {
      id: 5,
      imagen: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=800&fit=crop",
      nombre: "Laura Sánchez",
      especialidad: "Acuarela",
      descripcion: "Pintora de acuarelas que retrata paisajes y naturaleza mexicana. Su técnica delicada captura la luz y el movimiento.",
      instagram: "laura.watercolors",
    },
    {
      id: 6,
      imagen: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=800&fit=crop",
      nombre: "Roberto García",
      especialidad: "Arte Callejero",
      descripcion: "Muralista y artista urbano reconocido por sus intervenciones en espacios públicos de la Ciudad de México.",
      instagram: "roberto.street",
    },
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
