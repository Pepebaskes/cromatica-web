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
    
    {
      id: 5,
      imagen: "/images/lizQuinteroBA.jpeg",
      nombre: "Liz Quintero",
      especialidad: "Body Art y Perforación",
      descripcion: "Perforadora desde 2021 en BlackStone con ambicion de convertirse en modificadora corporal. ",
      instagram: "lizquintero_bodyart",
    },
     
    {
      id: 6,
      imagen: "/images/juliaEster.jpeg",
      nombre: "Julia Esther Hernandez Contreras ",
      especialidad: "Artista visual",
      descripcion: "Estudiante de artes con aspiraciones en animación, disfruto de usar varios medios en el arte con una afinidad a la tinta y pluma de inmersión.",
      instagram: "tey04040404",
    },

      {
    id: 7, 
    imagen: "/images/nueve.jpeg",
    nombre: "nueve",
    especialidad: "Tatuador",
    descripcion: "Tatuador con 7 años de experiencia en el desarrollo de piezas personalizadas, enfocado en la creación de diseños únicos dentro del estilo blackwork.",
    instagram: "9uno",
  },
    {
    id: 8, 
    imagen: "/images/alexisLandin.jpeg",
    nombre: "Alexis Landin",
    especialidad: "Dibujo",
    descripcion: "Elaboro ilustraciones sobre personajes de películas o series, sobre mitologías, artistas, entre otros temas. Vendo mercancía de los trabajos que hago. Hice un libro de cuentos escritos e ilustrados por mí y un cómic breve.",
    instagram: "alex.artes33",
  },
   {
    id: 9, // Incrementa el número
    imagen: "/images/ChrisSanchez.jpeg",
    nombre: "Christian Sánchez",
    especialidad: "Pintura",
    descripcion: "Aartista visual enfocado en la pintura y el dibujo, mi trabajo se desarrolla mediante la emocionalidad del color y el claroscuro.",
    instagram: "cs_artemania",
  },
   {
    id: 10, // Incrementa el número
    imagen: "/images/DMAcademy.jpeg",
    nombre: "DM COMPANY ",
    especialidad: "Fusión jazz urbana",
    descripcion: "Estudio de danza y modelaje que se dedica a la formación de bailarines y modelos ademas de la creación coreográfica y de shows  personalizados ",
    instagram: "dmcompany__",
  },

    {
    id: 11, // Incrementa el número
    imagen: "/images/ariadnaBarreto.jpeg",
    nombre: "Ariadna Barreto",
    especialidad: "Dibujo",
    descripcion: "Arte alternativo en forma de stickers y separadores, inspirado en subculturas como el gótico, punk y dark. Su estilo combina lo oscuro con lo simbólico, creando piezas con las que las personas alternativas pueden identificarse.",
    instagram: "dark._.M0th",
  },

    {
    id: 12, // Incrementa el número
    imagen: "/images/Christian.jpeg",
    nombre: "Christian",
    especialidad: "Diseño gráfico",
    descripcion: "Diseñador gráfico que presenta ilustraciones y obra gráfica experimentando con estilos variados y técnicas de impresión como la serigrafía.",
    instagram: "jonathan.indd",
  },
   {
    id: 13, // Incrementa el número
    imagen: "/images/mordret.jpeg",
    nombre: "Mordred",
    especialidad: "ILustradora",
    descripcion: "Es una tatuadora e ilustradora de GDL, enfocada en ilustrar pequeñas cosas de la vida que se vuelven extraordinarias, convirtiéndolas en algo mágico",
    instagram: "mordred.art",
  },
   {
    id: 14, // Incrementa el número
    imagen: "/images/kdPaws.jpeg",
    nombre: "KDPaws",
    especialidad: "Baile",
    descripcion: "Desde nuestra fundación en 2023, KD Paws se ha consolidado como un grupo de baile con una profunda pasión por el K-pop que, aunque es el corazón de nuestra identidad, nos mantenemos abiertos a explorar nuevos géneros, lo que nos permite adaptarnos y destacar en cualquier escenario.",
    instagram: "kd.paws",
  },
    {
    id: 15, // Incrementa el número
    imagen: "/images/allStarBaile.jpeg",
    nombre: "All Star",
    especialidad: "Baile",
    descripcion: "All Star es un grupo de dance cover enfocado en el K-pop, dedicado a la recreación de coreografías de distintos artistas del género. Su trabajo se centra en la precisión, la sincronización y la expresión escénica, buscando representar de manera fiel la esencia de cada performance.A través de la práctica constante, el grupo ha desarrollado disciplina, coordinación y presencia en el escenario, cuidando cada detalle para lograr presentaciones dinámicas y de calidad. Su propuesta combina energía, estilo y conexión con el público, adaptándose a distintos escenarios y manteniendo una evolución continua en cada presentación.",
    instagram: "allstar.grouppage",
  },
   {
    id: 16, // Incrementa el número
    imagen: "/images/arzola.jpeg",
    nombre: "Patricio Arzola Huerta",
    especialidad: "Fotografía",
    descripcion: "Soy un fotógrafo versátil que empezó en Julio del 2025, con un estilo oscuro pero me adapto a todo, y soy mas de retrato.",
    instagram: "arzola_fotos",
  },

  /**

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
