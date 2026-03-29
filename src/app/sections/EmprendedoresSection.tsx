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
      color: "var(--cromatica-accent)",
      instagram: "bell._.shop09"
    },

    {
      id: 6,
      nombre: "Drinks Coquetos",
      categoria: "Mixología y Coctelería",
      descripcion: "Drinks coquetos es un comercio dedicado a la elaboración y venta de coctelería con un envase reutilizable y creativo ",
      ubicacion: "Zona de Comida",
      imagen: "/images/drinksCoquetos.png",
      color: "var(--cromatica-accent)",
      instagram: "drinks.coquetos_"
    }

    /** 
      */
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

        {/* Grid de Emprendedores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {emprendedores.map((emp, index) => (
            <div 
              key={emp.id} 
              className="card-glow group overflow-hidden flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={emp.imagen} 
                  alt={emp.nombre}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
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
                <p className="text-[var(--cromatica-text-secondary)] text-sm mb-6 line-clamp-2">
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

        {/* CTA para nuevos emprendedores */}
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