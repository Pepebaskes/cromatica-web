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
      imagen: "/images/theTheeves.jpeg",
      nombre: "The theeves",
      genero: "Rock Alternativo / Dark pop",
      horario: "20:00 - 21:00",
      descripcion: "De las raíces de Traumatismo Floral surge The Theeves, una propuesta de rock alternativo y dark pop con una identidad inconfundible. Tras conquistar la escena regional, el cuarteto liderado por Marco Camacho y Roberto Jiménez se proyecta hacia la escena nacional este 2026 con un sonido maduro, tres nuevos sencillos y un EP que marca el inicio de su nueva era. Oscuridad, ritmo y evolución.",
      redesSociales: {
        instagram: "https://www.instagram.com/the_theeves?igsh=MTR5ZmgzZWZjdGdodg==",
        spotify: "https://open.spotify.com/intl-es/artist/7oCWzo0qZvvdva9tRTAxTH",
      },
    },
     
    {
      id: 2,
      imagen: "/images/Clave4.jpeg",
      nombre: "Clave 4",
      genero: "Sierreño",
      horario: "21:00-22:00",
      descripcion: "Fusionamos regional con sonidos alternativos para crear una propuesta fresca y auténtica que conecta con todo tipo de público.",
      redesSociales: {
        instagram: "https://www.instagram.com/clave_4tro?igsh=czU5dDl6bzEzOWtq"
        //youtube: "https://youtube.com",
      },
      
    },
    
    {
      id: 3,
      imagen: "/images/khembo.jpeg",
      nombre: "KHEMBÖ ",
      genero: "Rock alternativo, Pop",
      horario: "22:00 - 23:00",
      descripcion: "Khembö no pide permiso: irrumpe. Entre guitarra, teclado, bajo, batería, violín y voces crudas, crea ritmos que golpean con una vibra indie sin filtro. La banda mezcla rock alternativo, pop, entre otras variaciones. Dejando que cada integrante imprima su esencia en cada canción. No son temas de fondo: son para gritar, para sentir. Khembö no busca lo bonito en el sonido, sino la verdad en nuestra resonancia.",
      redesSociales: {
        instagram: "https://www.instagram.com/_khembo_?igsh=OXB1amR2Njk1N2Fz",
       // spotify: "https://spotify.com",
      },
    },
    
    {
      id: 4,
      imagen: "/images/ROB.jpeg",
      nombre: "ROB (Return Of The Beast)",
      genero: "Rock",
      horario: "23:00 - 00:00",
      descripcion: "ROB es una Banda Emergente de Rock/Alternativo relativamente *Nueva* pero con un bagaje importante de sus integrantes en la escena Underground del Grullo de ya varios años en las que han participado con diferentes proyectos que a su vez dieron la pauta para que se formará ROB qué es la culminación de la Necesidad de seguir creando y haciendo música para disfrutar.",
      redesSociales: {
        instagram: "https://www.instagram.com/return_ofthebeast?igsh=MXNsZHRnd2o5YXNvbA==",
        //spotify: "https://spotify.com",
        //youtube: "https://youtube.com",
      },
    },
    
    {
      id: 5,
      imagen: "/images/insurrection.jpeg",
      nombre: "INSURRECTION",
      genero: "Rock",
      horario: "00:00 - 1:00",
      descripcion: "Banda de rock originada en El Grullo en 2025, que maneja covers con un estilo propio, presencia escénica, experiencia en diferentes escenarios y pasión por el metal, nu metal, grunge, glam rock entre otros.",
      redesSociales: {
        instagram: "instagram.com/insurrectionrockband?igsh=MWJ5b29vcXVjZzJtMg==",
        //facebook: "https://facebook.com",
      },
    },
    /**
    {
      id: 6,
      imagen: "",
      nombre: "PENDIENTE",
      genero: "",
      horario: "",
      descripcion: "",
      redesSociales: {
        spotify: "https://spotify.com",
        youtube: "https://youtube.com",
      },
      
      
    },
    */
    
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
            Registra a tu banda o artista independiente para formar parte del line-up del festival. ¡Queremos escuchar tu música!
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
