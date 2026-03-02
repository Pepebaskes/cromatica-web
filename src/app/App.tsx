/**
 * ==========================================
 * CROMÁTICA 2.0 - APLICACIÓN PRINCIPAL
 * ==========================================
 * 
 * Este es el archivo principal que ensambla toda la página web.
 * 
 * 📂 ESTRUCTURA:
 * - Navigation: Menú de navegación fijo
 * - HeroSection: Portada principal
 * - SobreEventoSection: Información del festival
 * - ConvocatoriaSection: Convocatorias abiertas
 * - ConciertosSection: Bandas participantes
 * - ArtistasSection: Artistas visuales
 * - DisenadoresSection: Diseñadores de moda
 * - AutosClasicosSection: Show de autos
 * - InvitadosSection: Speakers especiales
 * - PatrocinadoresSection: Patrocinadores
 * - UbicacionSection: Ubicación y mapa
 * - RegistroSection: Formularios de registro
 * - Footer: Pie de página
 * 
 * 🔧 CÓMO AGREGAR UNA NUEVA SECCIÓN:
 * 
 * 1. Crea el archivo de la sección en /src/app/sections/
 * 2. Importa la sección aquí
 * 3. Agrégala en el return, dentro del <main>
 * 4. Agrega el link en Navigation.tsx
 * 
 * Ejemplo:
 * import { MiNuevaSeccion } from './sections/MiNuevaSeccion';
 * 
 * En el return:
 * <MiNuevaSeccion />
 * 
 * 🎨 PERSONALIZACIÓN:
 * - Cambia el orden de las secciones según prefieras
 * - Comenta/descomenta secciones para mostrar/ocultar
 * - Cada sección es independiente y modular
 * 
 * 📱 RESPONSIVE:
 * Todas las secciones son completamente responsive.
 * El diseño se adapta automáticamente a:
 * - Mobile (< 768px)
 * - Tablet (768px - 1024px)
 * - Desktop (> 1024px)
 */

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Importar todas las secciones
import { HeroSection } from './sections/HeroSection';
import { SobreEventoSection } from './sections/SobreEventoSection';
import { ConvocatoriaSection } from './sections/ConvocatoriaSection';
import { ConciertosSection } from './sections/ConciertosSection';
import { ArtistasSection } from './sections/ArtistasSection';
import { DisenadoresSection } from './sections/DisenadoresSection';
import { AutosClasicosSection } from './sections/AutosClasicosSection';
import { InvitadosSection } from './sections/InvitadosSection';
import { PatrocinadoresSection } from './sections/PatrocinadoresSection';
import { UbicacionSection } from './sections/UbicacionSection';
import { RegistroSection } from './sections/RegistroSection';
import { EmprendedoresSection } from './sections/EmprendedoresSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* ==========================================
          NAVEGACIÓN FIJA
          ========================================== 
          
          El componente Navigation está fijo en la parte superior.
          Se mantiene visible mientras el usuario hace scroll.
      */}
      <Navigation />

      {/* ==========================================
          CONTENIDO PRINCIPAL
          ========================================== 
          
          Todas las secciones del sitio van aquí.
          Cada sección tiene su propio id para la navegación.
      */}
      <main>
        {/* Sección 1: Hero/Portada */}
        <HeroSection />

        {/* Sección 2: Sobre el Evento */}
        <SobreEventoSection />

        {/* Sección 3: Convocatorias */}
        <ConvocatoriaSection />

        {/* Sección 4: Conciertos */}
        <ConciertosSection />

        {/* Sección 5: Artistas Visuales */}
        <ArtistasSection />

        {/* Sección 6: Diseñadores de Moda */}
        <DisenadoresSection />

        {/* Sección 6.5: Emprendedores */}
        <EmprendedoresSection />

        {/* Sección 7: Show de Autos Clásicos */}
        <AutosClasicosSection />

        {/* Sección 8: Invitados Especiales */}
        <InvitadosSection />

        {/* Sección 9: Patrocinadores */}
        <PatrocinadoresSection />

        {/* Sección 10: Ubicación */}
        <UbicacionSection />

        {/* Sección 11: Registro */}
        <RegistroSection />

        {/* 
        ==========================================
        👉 AGREGAR NUEVAS SECCIONES AQUÍ
        ==========================================
        
        Para agregar una nueva sección:
        
        1. Importa el componente al inicio:
           import { MiSeccion } from './sections/MiSeccion';
        
        2. Agrégala aquí:
           <MiSeccion />
        
        3. Asegúrate de que tenga un id único:
           <section id="mi-seccion">
        
        4. Agrega el link en Navigation.tsx
        */}
      </main>

      {/* ==========================================
          FOOTER
          ========================================== 
          
          Pie de página con links, contacto y redes sociales.
      */}
      <Footer />
    </div>
  );
}

/**
 * ==========================================
 * NOTAS IMPORTANTES PARA DESARROLLADORES
 * ==========================================
 * 
 * 1. ESTRUCTURA MODULAR:
 *    - Cada sección es un componente independiente
 *    - Puedes editarlas sin afectar otras partes
 *    - Fácil de mantener y escalar
 * 
 * 2. NAVEGACIÓN:
 *    - Los links en Navigation.tsx usan #id
 *    - Cada sección tiene un id único
 *    - El scroll es suave (configurado en cromatica.css)
 * 
 * 3. ORDEN DE SECCIONES:
 *    - El orden aquí es el orden en la página
 *    - Puedes reorganizarlas según prefieras
 *    - No olvides actualizar Navigation.tsx
 * 
 * 4. OCULTAR SECCIONES:
 *    - Para ocultar una sección temporalmente, coméntala:
 *      {/* <ConciertosSection /> *\/}
 *    - Esto no la elimina, solo la oculta
 * 
 * 5. PERFORMANCE:
 *    - Las imágenes usan lazy loading
 *    - Las animaciones son CSS puro (no JavaScript)
 *    - El código está optimizado para producción
 * 
 * 6. ESTILOS:
 *    - Todos los colores usan variables CSS (cromatica.css)
 *    - Fácil de cambiar la paleta completa
 *    - Sistema de diseño consistente
 * 
 * 7. RESPONSIVE:
 *    - Mobile first approach
 *    - Breakpoints: sm(640), md(768), lg(1024), xl(1280)
 *    - Todas las secciones son responsive
 * 
 * ==========================================
 * PRÓXIMOS PASOS
 * ==========================================
 * 
 * 1. CONTENIDO:
 *    - Reemplaza las imágenes placeholder con imágenes reales
 *    - Actualiza los textos con información real
 *    - Agrega más bandas, artistas, etc.
 * 
 * 2. BACKEND:
 *    - Integra Supabase para los formularios
 *    - Conecta Google Maps API
 *    - Implementa newsletter
 * 
 * 3. SEO:
 *    - Agrega meta tags en index.html
 *    - Implementa Open Graph tags
 *    - Agrega schema.org markup
 * 
 * 4. ANALYTICS:
 *    - Integra Google Analytics
 *    - Configura Facebook Pixel
 *    - Implementa event tracking
 * 
 * 5. OPTIMIZACIÓN:
 *    - Comprime imágenes
 *    - Implementa lazy loading avanzado
 *    - Optimiza para Lighthouse
 * 
 * 6. DEPLOYMENT:
 *    - Configura CI/CD
 *    - Deploy en Vercel/Netlify
 *    - Configura dominio personalizado
 */