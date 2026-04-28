/**
 * ==========================================
 * SECCIÓN: EMPRENDEDORES / MERCADO CROMÁTICA
 * ==========================================
 */

import { Store, MapPin, Instagram } from 'lucide-react';
// local JPEG asset – the variable must match the one used below

// 👇 EJEMPLO DE CÓMO IMPORTAR TUS IMÁGENES LOCALES
// import imgCafe from '../assets/images/cafe-stand.jpg';
// import imgVinilos from '../assets/images/vinilos-stand.jpg';

export function EmprendedoresSection() {
  // 👉 AGREGA O MODIFICA EMPRENDEDORES AQUÍ
  const emprendedores = [
    {
      id: 1,
      nombre: "El Pase",
      categoria: "Elotes y Mixología",
      descripcion: "Las mejores botanas, elotes y bebidas para disfrutar",
      ubicacion: "Zona de Comida",
      imagen: "/images/elPaseElote.png", // Ejemplo de imagen local
      color: "var(--cromatica-primary)",
      instagram: "el_pase05"
    },
    {
      id: 2,
      nombre: "Cafetería Elefante",
      categoria: "Café & Postres",
      descripcion: "El mejor café de especialidad y postres artesanales",
      ubicacion: "Zona de Comida",
      imagen: "/images/elElefante.jpeg", // Ejemplo de imagen local
      color: "var(--cromatica-secondary)",
      instagram: "cafeteria_elefante"
    },
    
    {
      id: 3,
      nombre: "Magiaacrochet",
      categoria: "Artesanías",
      descripcion: "De tu imaginación al crochet ✨ Hacemos realidad tus ideas favoritas personalizando cada detalle. Piezas tan únicas como tú.💞",
      ubicacion: "Zona de Ventas",
      imagen: "/images/Crochet.jpeg",
      color: "var(--cromatica-tertiary)",
      instagram: "magiaacrochet_"
    },
    
    {
      id: 4,
      nombre: "Kuro Shop",
      categoria: "Tienda Alternativa",
      descripcion: "Emprendimiento con gran variedad de productos, su fuerte son accesorios alternativos y productos de anime; un lugar seguro y con productos para todas las personas con gustos mas extravagantes y fuera de la norma (al mismo tiempo generan ingreso para sus gatitos)",
      ubicacion: "Zona de Ventas",
      imagen: "/images/kuroShop.jpeg",
      color: "var(--cromatica-accent)",
      instagram: "kuroshopmx"
    },  
     {
      id: 5,
      nombre: "Bell",
      categoria: "Productos asiáticos",
      descripcion: "Sabores asiáticos auténticos: ramen, dumplings, banderillas y más.",
      ubicacion: "Zona de Comida",
      imagen: "/images/Bell.jpeg",
      color: "var(--cromatica-primary)",
      instagram: "bell._.shop09"
    },

    {
      id: 6,
      nombre: "Drinks Coquetos",
      categoria: "Mixología y Coctelería",
      descripcion: "Drinks coquetos es un comercio dedicado a la elaboración y venta de coctelería con un envase reutilizable y creativo ",
      ubicacion: "Zona de Comida",
      imagen: "/images/drinksCoquetos.png",
      color: "var(--cromatica-secondary)",
      instagram: "drinks.coquetos_"
    },

        {
      id: 7,
      nombre: "Ara Studio",
      categoria: "Taller Creativo",
      descripcion: "Crear, conectar y compartir. Mucho más que una maquiladora de bolsos. Personaliza tu tote en nuestros talleres o diviértete en casa con nuestros kits de yeso. ✨ Maquila | Talleres | Kits para niños. Lo que imaginas, lo creamos juntos. 🫶🏻",
      ubicacion: "Zona de Ventas",
      imagen: "/images/araStudio.jpeg",
      color: "var(--cromatica-tertiary)",
      instagram: "ara_stud.o"
    },
        {
      id: 8,
      nombre: "Suggar Miel",
      categoria: "Snacks Saludables",
      descripcion: "Se busca ofrecer postres o snacks salados, dulces e incluso opciones más saludables para personas que no consumen azucar o harinas. No sé tiene que sacrificar el sabor por lo saludable",
      ubicacion: "Zona de Comida",
      imagen: "/images/suggarMiel.png",
      color: "var(--cromatica-accent)",
      instagram: "suggar_miel"
    },

            {
      id: 9,
      nombre: "Mishitu",
      categoria: "Tienda de accesorios",
      descripcion: "Mishitu es una tiendita kawaii y vintage con pines metálicos, miniaturas y papelería especial. Desde 2021 creamos un espacio para expresar identidad y estilo propio bajo el lema: al Mishitu lo que le acomode.",
      ubicacion: "Zona de Ventas",
      imagen: "/images/mishitos.jpeg",
      color: "var(--cromatica-primary)",
      instagram: "mishi_tuu"
    },
           {
      id: 10,
      nombre: "Metusia",
      categoria: "Tienda de accesorios",
      descripcion: "Metusia elabora bebidas artesanales desde cero, destacando el concentrado de cold brew y chai natural. Ya sea que lleves nuestros concentrados a casa o disfrutes de las bebidas preparadas, te garantizamos calidad en cada sorbo. Además, compartimos nuestra pasión creando experiencias únicas a través de nuestros talleres, catas y degustaciones guiadas",
      ubicacion: "Zona de Comida",
      imagen: "/images/metusia.jpeg",
      color: "var(--cromatica-secondary)",
      instagram: "metusia._"
    },
          {
      id: 11,
      nombre: "Grath Shop",
      categoria: "Joyería",
      descripcion: "Grath Shop es un emprendimiento dedicado a la venta de joyería, maquillaje y productos de skincare coreano, enfocada en ofrecer artículos de tendencia y alta calidad para el cuidado personal y la belleza. Opero principalmente a través de Instagram, lo que me permite brindar una atención cercana, rápida y personalizada a mis clientes. Mi objetivo es resaltar la belleza de cada persona mediante productos accesibles, confiables y en constante innovación.",
      ubicacion: "Zona de Ventas",
      imagen: "/images/grathShop.jpeg",
      color: "var(--cromatica-tertiary)",
      instagram: "grathshopp"
    },
           {
      id: 12,
      nombre: "Dulce Esencia",
      categoria: "Postres",
      descripcion: " Endulzamos tus antojos!, Venta de postres caseros en El Grullo: carlotas de limón y oreo, flanes, chocoflanes y brownies esponjosos. Hechos con cariño, perfectos para regalar o consentirte.",
      ubicacion: "Zona de Comida",
      imagen: "/images/dulceEscencia.png",
      color: "var(--cromatica-accent)",
      instagram: "Paola_g_e_"
    },
               {
      id: 13,
      nombre: "Con Mayeya",
      categoria: "Comida",
      descripcion: " Este emprendimiento fue creado por Mariela y Gloria, dos hermanas estudiantes de administración y arquitectura que decidieron unir su creatividad para ofrecer un concepto fresco y original. Su negocio destaca por sus Tostitos con aguachile, reconocidos por su gran sabor, y sus raspados con toppings, que permiten a cada cliente personalizar su experiencia. Su propuesta ha sido muy bien recibida, reflejando su pasión por emprender.",
      imagen: "/images/conMayeya.PNG",
      color: "var(--cromatica-primary)",
      instagram: "con_mayeya"
    },
    


    /** */
  ];

  return (
    <section id="emprendedores" className="py-20 md:py-32 relative overflow-hidden bg-[var(--cromatica-bg-light)]">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--cromatica-primary)] rounded-full blur-[120px]"></div>
      </div>

      <div className="container-cromatica relative z-10">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <span className="badge-cromatica mb-4 inline-flex items-center gap-2">
            Mercado
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
            Emprendedores
          </h2>
          <p className="text-lg text-[var(--cromatica-text-secondary)] max-w-2xl mx-auto">
            Proyectos locales y marcas creativas que estarán presentes en esta edición.
          </p>
        </div>

        {/* Grid de Emprendedores - 3 columnas (Igual que Artistas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {emprendedores.map((emp, index) => (
            <div 
              key={emp.id} 
              className="card-glow group overflow-hidden flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Contenedor de Imagen Relativo */}
              {/* CAMBIO CLAVE: 
                  1. Quitamos 'h-72' (altura fija).
                  2. Usamos 'aspect-square' para que el contenedor sea un cuadrado perfecto basado en el ancho.
              */}
              <div className="relative w-full aspect-square overflow-hidden bg-white">
                <img 
                  src={emp.imagen} 
                  alt={emp.nombre}
                  /* 'object-cover' hará que la imagen cubra todo el cuadrado. 
                    Al ser cuadrada la proporción, tus logos circulares se adaptarán mucho mejor.
                  */
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-lg"
                    style={{ backgroundColor: emp.color }}
                  >
                    {emp.categoria}
                  </span>
                </div>
              </div>

              {/* Contenido de la Card */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-[var(--cromatica-text-primary)]">
                  {emp.nombre}
                </h3>
                {/* Descripción completa */}
                <p className="text-[var(--cromatica-text-secondary)] text-sm mb-6 leading-relaxed">
                  {emp.descripcion}
                </p>

                {/* Footer de la Card */}
                <div className="mt-auto flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs text-[var(--cromatica-text-muted)]">
                    <MapPin className="w-3.5 h-3.5" />
                    {emp.ubicacion}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <a 
                      href={`https://instagram.com/${emp.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--cromatica-text-secondary)] hover:text-[var(--cromatica-primary)] transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <span className="text-[10px] font-bold text-[var(--cromatica-text-muted)] uppercase tracking-tighter">
                      Cromática 2.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white/50 backdrop-blur-sm border border-white p-8 rounded-3xl shadow-xl inline-block max-w-xl">
            <h4 className="text-lg font-bold mb-2 text-[var(--cromatica-text-primary)]">¿Quieres un espacio para tu marca?</h4>
            <p className="text-sm text-[var(--cromatica-text-secondary)] mb-6">Únete a la zona de stands y muestra tus productos ante miles de asistentes.</p>
            <a href="#convocatoria" className="btn-cromatica">
              Solicitar Stand
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}