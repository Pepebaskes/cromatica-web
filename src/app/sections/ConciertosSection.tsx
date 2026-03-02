/**
 * ==========================================
 * SECCIÓN: CONCIERTOS
 * ==========================================
 * 
 * Muestra todas las bandas que se presentarán en el festival.
 * Usa el componente BandCard de forma modular.
 * 
 * 🔧 CÓMO AGREGAR MÁS BANDAS:
 * 1. Ve al array 'bandas' abajo
 * 2. Agrega un nuevo objeto con toda la información
 * 3. ¡Listo! Se mostrará automáticamente
 * 
 * 📸 IMÁGENES:
 * - Usa URLs de Unsplash o tus propias imágenes
 * - Tamaño recomendado: 800x800px
 * - Formato: JPG o PNG
 */

import { BandCard } from '../components/BandCard';

export function ConciertosSection() {
  // 👉 AGREGA O MODIFICA BANDAS AQUÍ
  const bandas = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
      nombre: "Los Visionarios",
      genero: "Rock Alternativo",
      horario: "18:00 - 19:00",
      descripcion: "Banda emergente de rock alternativo con influencias del rock mexicano de los 90s. Su sonido fresco y enérgico promete hacer vibrar el escenario principal.",
      redesSociales: {
        instagram: "https://instagram.com",
        spotify: "https://spotify.com",
      },
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=800&fit=crop",
      nombre: "Ritmo Urbano",
      genero: "Hip Hop / Rap",
      horario: "19:30 - 20:30",
      descripcion: "Colectivo de hip hop que fusiona beats modernos con letras que narran historias de la vida urbana. Representantes del rap consciente mexicano.",
      redesSociales: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=800&fit=crop",
      nombre: "Ecos del Sur",
      genero: "Música Folclórica Fusión",
      horario: "21:00 - 22:00",
      descripcion: "Proyecto que combina instrumentos tradicionales mexicanos con ritmos contemporáneos. Una experiencia sonora única que conecta pasado y presente.",
      redesSociales: {
        facebook: "https://facebook.com",
        spotify: "https://spotify.com",
      },
    },
    {
      id: 4,
      imagen: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=800&fit=crop",
      nombre: "Neón Eléctrico",
      genero: "Electrónica / Synthwave",
      horario: "22:30 - 23:30",
      descripcion: "DJ set electrónico que transporta al público a través de paisajes sonoros futuristas. Luces, sintetizadores y energía pura en el escenario nocturno.",
      redesSociales: {
        instagram: "https://instagram.com",
        spotify: "https://spotify.com",
        youtube: "https://youtube.com",
      },
    },
    {
      id: 5,
      imagen: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=800&fit=crop",
      nombre: "La Insurgencia",
      genero: "Punk Rock",
      horario: "20:00 - 21:00",
      descripcion: "Banda de punk rock con mensaje social. Riffs potentes, actitud rebelde y letras que cuestionan el status quo. Pura energía en vivo.",
      redesSociales: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 6,
      imagen: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop",
      nombre: "Alma Indie",
      genero: "Indie Pop",
      horario: "17:00 - 18:00",
      descripcion: "Proyecto indie pop con melodías pegajosas y letras introspectivas. Su sonido fresco y melódico es perfecto para iniciar el festival.",
      redesSociales: {
        spotify: "https://spotify.com",
        youtube: "https://youtube.com",
      },
    },
  ];

  /* 
  ==========================================
  👉 PARA AGREGAR UNA NUEVA BANDA:
  ==========================================
  
  Copia este objeto y agrégalo al array 'bandas':
  
  {
    id: 7, // Incrementa el número
    imagen: "URL_DE_LA_IMAGEN",
    nombre: "Nombre de la Banda",
    genero: "Género Musical",
    horario: "HH:MM - HH:MM",
    descripcion: "Descripción de la banda...",
    redesSociales: {
      instagram: "https://...", // Opcional
      facebook: "https://...",  // Opcional
      spotify: "https://...",   // Opcional
      youtube: "https://...",   // Opcional
    },
  },
  */

  return (
    <section
      id="conciertos"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--cromatica-accent)] rounded-full blur-[180px] opacity-10"></div>

      <div className="container-cromatica relative z-10">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <span className="badge-cromatica mb-4 inline-block">
            Line-up 2026
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Conciertos
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Disfruta de 6 bandas en vivo en nuestros 3 escenarios
          </p>
        </div>

        {/* Grid de bandas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bandas.map((banda, index) => (
            <div
              key={banda.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BandCard
                imagen={banda.imagen}
                nombre={banda.nombre}
                genero={banda.genero}
                horario={banda.horario}
                descripcion={banda.descripcion}
                redesSociales={banda.redesSociales}
              />
            </div>
          ))}

          {/* 
          ==========================================
          👉 NO NECESITAS DUPLICAR ESTE BLOQUE
          ==========================================
          
          Para agregar más bandas, solo agrega objetos
          al array 'bandas' arriba. El .map() se encarga
          de renderizar automáticamente todas las bandas.
          */}
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="inline-block card-glow p-8 max-w-2xl">
            <h3 className="text-xl font-bold mb-3 text-[var(--cromatica-primary)]">
              📢 ¿Eres músico? ¡Únete!
            </h3>
            <p className="text-[var(--cromatica-text-secondary)] mb-6">
              Estamos buscando más bandas y artistas independientes.
              La convocatoria está abierta hasta el 30 de abril.
            </p>
            <a
              href="#convocatoria"
              className="btn-cromatica"
            >
              Ver Convocatoria Musical
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ==========================================
 * GUÍA DE PERSONALIZACIÓN
 * ==========================================
 * 
 * 1. AGREGAR UNA BANDA:
 *    - Agrega un objeto al array 'bandas'
 *    - Incrementa el id
 *    - Llena todos los campos
 * 
 * 2. MODIFICAR UNA BANDA:
 *    - Busca la banda en el array
 *    - Cambia los valores que necesites
 * 
 * 3. ELIMINAR UNA BANDA:
 *    - Borra el objeto completo del array
 * 
 * 4. CAMBIAR EL ORDEN:
 *    - Reordena los objetos en el array
 * 
 * 5. CAMBIAR LA CANTIDAD DE COLUMNAS:
 *    - lg:grid-cols-3 = 3 columnas en desktop
 *    - Cambia a lg:grid-cols-2 para 2 columnas
 *    - Cambia a lg:grid-cols-4 para 4 columnas
 * 
 * 6. OBTENER IMÁGENES:
 *    - Usa Unsplash: https://unsplash.com
 *    - Formato de URL: https://images.unsplash.com/photo-ID?w=800&h=800&fit=crop
 *    - También puedes usar tus propias imágenes
 * 
 * ==========================================
 * EJEMPLO COMPLETO DE NUEVA BANDA
 * ==========================================
 * 
 * {
 *   id: 7,
 *   imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
 *   nombre: "Nueva Banda",
 *   genero: "Rock",
 *   horario: "16:00 - 17:00",
 *   descripcion: "Una banda increíble con un sonido único...",
 *   redesSociales: {
 *     instagram: "https://instagram.com/nuevabanda",
 *     spotify: "https://open.spotify.com/artist/123",
 *     youtube: "https://youtube.com/@nuevabanda",
 *   },
 * },
 */
