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
    { id: 1, 
      imagen: "/images/yulsGarcia.jpeg", 
      nombre: "Yulss", 
      especialidad: "Tattoo",
      descripcion: "Soy tatuadora con 8 años de trayectoria , especializada en los estilos de anime y blackwork. Actualmente cursó la carrera de Artes, donde continuó aprendiendo y desarrollando mi estilo, explorando nuevas formas de expresión a través del tatuaje y las artes visuales.",
      instagram: "yulsstattoo_" },

    { id: 2, 
      imagen: "/images/dulceP.png", 
      nombre: "Dulce Pérez", 
      especialidad: "Pintura y dibujo", 
      descripcion: "Artista visual con enfoque en  la pintura, mi obra explora la narrativa de la naturaleza y de personajes mediante el uso de técnicas tradicionales como el gouache, la acuarela y el óleo pastel ", 
      instagram: "_whois.du" },

    { id: 3, 
      imagen: "/images/glittereyes.jpeg", 
      nombre: "Glitter Eyes", 
      especialidad: "Baile", 
      descripcion: "Somos un grupo de dance cover K-pop de El Limón, Jalisco. Nuestro trabajo es montar coreografías desde cero, cuidar cada paso, formación y outfit nosotrxs mismxs. Nos encanta bailar y lo que más disfrutamos es traer todo el estilo del K-pop al escenario.", 
      instagram: "gliter_eyes_dc" },

          { id: 4, 
      imagen: "/images/allStar.jpg", 
      nombre: "All Star", 
      especialidad: "Baile", 
      descripcion: "All Star es un grupo de dance cover enfocado en el K-pop, formado por personas que comparten el gusto por la música y el baile de este género. A través de sus presentaciones, buscan recrear las coreografías de sus artistas favoritos, poniendo en cada una esfuerzo, dedicación y mucho entusiasmo.", 
      instagram: "allstar.grouppage" },
  ];

  // Los espacios en blanco se conservan para que puedas llenarlos despues.
  // Solo se muestra una tarjeta cuando el artista ya tiene nombre o imagen.
  const artistasVisibles = artistas.filter(
    (artista) => artista.nombre.trim() || artista.imagen.trim()
  );

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
          {artistasVisibles.map((artista, index) => (
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
              Expón tu obra en CROMÁTICA 3.0. Tenemos espacio para pintores,
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
