import { useEffect, useState } from 'react';
import Image from 'next/image'
import AnimarFondo from '../components/animacionPlanetas';
import Switch from '@mui/material/Switch';
import { useInView } from 'react-intersection-observer';
import Tarjetas from '../components/carrousel';


const TextosEspaniol = [
  "Desarrollador Back-end",
  "Construyendo y aprendiendo cada día.",
  "Acerca de mí:",
  "¡Hola! Soy Uriel Marles, un desarrollador de software con grandes ambiciones. Cuanto mayor sea el desafío, más emocionado estoy por superarlo. Valoro un código organizado, comprensible, pensado para trabajar en equipo, asegurándome de que cada pieza de codigo pueda servir como base para proyectos aún más grandes.",
  "Tengo un amplio interés en diversas herramientas de programación y una sólida comprensión de los principios y reglas necesarias. Cuando me enfrento a un nuevo entorno de trabajo, me esfuerzo por aprender tanto como sea posible antes de dar el primer paso. Mis soluciones buscan ser lo más óptimas posible.",
  "En la actualidad, tengo un conocimiento profundo en tecnologías como PYTHON y SQL con frameworks como FLASK. Pero también me interesa .NET, C#, REACT y NEXT.",
  "Estaría encantado de participar en nuevos proyectos. ¡No dudes en contactarme!",
  "Experiencia de trabajo:",
  "Desarrollador de Software Junior - Municipalidad de Avellaneda - Medio tiempo",
  "Trabajé en el desarrollo y mantenimiento de APIs para paginas web, asi como tambien en la implementacion de un framework de trabajo con todas las herramientas comunes de los proyectos.",
  "Enero 2023 - Presente",
  "Tecnico - B&L soluciones Informáticas - Tiempo Completo ",
  "Trabaje en el desarrollo de una aplicacion de escritorio .NET, utilizada internamente para el manejo de las ventas y el inventario. Tambien ayude con el arreglo de sistemas operativos y software en computadoras de clientes",
  "Febrero 2021 - Agosto 2022",
  "Estudios:",
  "UTN FRA - Tecnicatura universtaria en sistemas informaticos",
  "El objetivo de la carrera es brindar las habilidades y herramientas para lucirse en el mundo de la informatica, enseñando la metodología para analizar y resolver cualquier problema que se presente.",
  "Enero 2023 - Diciembre 2025",
  "KAPLAN - Escuela de intercambio de ingles",
  "Durante mi estadía en la escuela de Kaplan en Cambridge, pude poner a prueba mis capacidades para una comunicación correcta y fluída. Actualmente estoy capacitado para mantener conversaciones formales y con vocabulario técnico en ambos idiomas, a un nivel nativo.",
  "February 2022 - March 2022",
  "ILSE - BACHILLER",
  "Una escuela secundaria con un enfoque en los aspectos artisticos y creativos de la educacion. Una inmersion cultural, historica y literaria de primer nivel.",
  "Enero 2017 - Diciembre 2021",
  "Proyectos destacados:",
  "Project Keystone sirve como la base (¡piedra fundamental!) para comenzar el armado de una página usando FLASK y NEXT, dando explicaciones paso a paso de como iniciar, y como utilizar cada herramienta. Cada parte del entorno viene con una serie de ventajas para resolver problemas y situaciones comunes en un proyecto, ventajas como: creado automático de rutas para interactuar con cada entidad, un sistema de permisos, usuarios y roles, cargado de información a través de hojas de cálculo y una serie de componentes para la creación de formularios, con ejemplos de estilo y uso.",
  "VISIBLENT es un juego de plataformas 2D creado con PYTHON, el movimiento tiene una fluidez satisfactoria y el diseño es simple y divertido. Lo que lo vuelve único es la forma de pasar cada nivel, la primera parece normal, pero en la segunda todos los obstáculos se vuelven invisibles y es necesario memorizar el mapa o guiarse por los sonidos de los enemigos. Cada animación, bloque, sprite y sonido fue hecho por mí y estaría muy feliz de que lo probasen. El juego esta disponible tanto para WINDOWS como Linux.",
  "RENT-A-TRONIC es una versión divertida de una aplicación empresarial promedio programada en C# con WINFORMS. Su propósito es manejar las ventas y el inventario para un servicio de alquiler de animatrónicos con un tema único de FNAF. La aplicación, utilizando una base de datos externa, sigue los calendarios individuales para cada animatrónico. Ofrece funciones completas de gestión para animatrónicos, fiestas y usuarios, con acceso adaptado a diferentes tipos de usuarios. La aplicación permite copias de seguridad físicas y puede recibir información a través de hojas de cálculo o desde de la aplicación (cada tabla tiene su propia interfaz para interactuar y un CRUD personalizado).",
  "La página que estás viendo!! Esta página fue construida usando REACT y THREE.JS, este último es el encargado de la renderizacion de objetos 3D dinámicamente. Inclusive las estrellas son objetos con profundidad! Al mover la cámara, se puede notar como las estrellas mas cercanas a la pantalla se mueven mas rápido que las lejanas. Esta pagina también utiliza otras librerías como brainhub-carousel, material-ui y bootstrap.",
  "Hace click en el banner para ver el proyecto en GIT!",
  "Contactame!",
  "Email copiado al portapaeles!",
  "Descarga mi curriculum en español"

];

const TextosIngles = [
  "Back-end Developer",
  "Building and learning every day.",
  "About Me:",
  "Hello! I'm Uriel Marles, a hard-working Software Developer. The greater the challenge, the more excited I am to overcome it. I value organized, team-friendly, and understandable code, ensuring each piece can serve as a foundation for even larger projects.",
  "I have a broad interest in various programming tools and a strong understanding of the principles and rules involved. When introduced to a new work environment, I strive to learn as much as possible before taking the first step. My solutions aim to be as optimal as they can be.",
  "Currently i have the deepest knowledge in technologies such as PYTHON and SQL with frameworks like FLASK. But i am also interested in .NET, C#, REACT, and NEXT",
  "I would be thrilled to participate in new projects. Don't hesitate to contact me!",
  "Work experience:",
  "Junior Software Developer - Municipalidad de Avellaneda - Part-time",
  "Worked in the development and maintenance of APIs for web apps, as well as the implementation of a common framework for all future projects.",
  "January 2023 - Present",
  "Technician - B&L soluciones Informáticas- Full-time",
  "Workend on a .NET WinForms app to keep track of sales and inventory. Fixed hardware and software issues in our client's computers.",
  "February 2021 - August 2022",
  "Studies:",
  "UTN FRA - University - Systems Technician",
  "The goal of the career is to grant the abilities and tools required to thrive in the programming world, enabling you to analize and find solutions to the problems presented.",
  "January 2023 - December 2025",
  "KAPLAN INTERNATIONAL - English / English Literature",
  "I spent my time at Kaplan's Cambridge school testing and perfecting my communication skills. Obtaining the fluidity of every-day chatting, i am now perfectly qualified in maintaining conversations with or without technical terms.",
  "February 2022 - March 2022",
  "ILSE - High school - Bachelor's degree",
  "A high school with a focus on the creative and artistic sides of education, as well as personal growth and literature.",
  "January 2017 - December 2021",
  "Proyectos destacados:",
  "Project Keystone serves as a foundational guide for building a web app using FLASK and NEXT. It provides detailed explanations for each step and tool involved. There are three separate images, the database, the API and the FRONT and each one comes with it's quirks. The API automatically creates tables and default query routes, it's as simple as creating the entity and you'll be all set to go, with fetching routes and token-handling ready. The database comes with protocols to adapt CSV sheets and loading the starting data automatically. The front pages come with a guide as well and easy to use form components.",
  "VISIBLENT is a 2D platformer game crafted with PYTHON and It has an extremely satisfactory movement gampley and a funny charm.The unique twist lies in having to conquer each level twice, but there’s a catch… the second time around, all obstacles turn invisible, requiring players to memorize  the entire map for success, as well as hearing enemies. Every single animation, object, sprite, sound and music was made by myself. The game encourages replayability saving a local leaderboard of scores. It's available for WINDOWS and LINUX",
  "RENT-A-TRONIC is an engaging take on a traditional desktop business application, developed in C# using WINFORMS. Its purpose is to manage sales and inventory for an animatronic rental service with a unique FNAF theme. The application, utilizing an external database, tracks individual calendars for each animatronic. It offers comprehensive management features for animatronics, parties, and users, with access tailored to different user types. The app allows for physical backups and can receive info through sheets or app input (each table has it's own interface for interaction and a personalized CRUD). Check out it's awesome design!",
  "The page you are currently viewing was built using REACT and THREE.JS, the latter being the library enabling 3D renderization of background objects. Notably, the stars aren't static images! Pay attention; as you move the mouse, the stars react dynamically, adjusting their speeds based on the distance from the camera. The page also integrates various libraries, including brainhub-carousel, material-ui, and bootstrap.",
  "Click on the project’s banner and learn more on it's GIT page!	",
  "Contact me!",
  "Email copied to clipboard!",
  "Download my curriculum in english"

];




export default function hola(){



  const [textos , setTextos] = useState(TextosEspaniol)
  const[idioma, setIdioma] = useState("spanish")

  const [fluido,setFluido] = useState("Desarrollador Back-end")
  const [fluido2,setFluido2] = useState("Construyendo y aprendiendo cada día.")

  const [ref, inView] = useInView({triggerOnce: true});
  const [ref2, inView2] = useInView({triggerOnce: true});
  const [ref3, inView3] = useInView({triggerOnce: true});
  const [ref4 , inView4] = useInView({triggerOnce: true});

  function transicion (palabraInicial, palabraFinal,func,delay){
    const longitud = palabraFinal.length;
    for (let i = longitud; i >= 0; i--) {
      setTimeout(() => {
        func(palabraInicial.slice(0, i));
      }, (longitud - i) * delay);
    }
    for (let i = 1; i <= longitud; i++) {
      setTimeout(() => {
        func(palabraFinal.slice(0, i));
      }, (longitud + i) * delay);
    }
  };

  function cambiarIdioma()
  {
    setIdioma(idioma === "english"? "spanish":"english");
    setTextos(idioma === "english"? TextosEspaniol:TextosIngles)
    const palabraInicial = fluido;
    const palabraFinal = idioma === 'english' ? TextosEspaniol[0] : TextosIngles[0];
    const ini2 = fluido2
    const fini2 = idioma === 'english' ? TextosEspaniol[1] : TextosIngles[1];
    transicion(palabraInicial,palabraFinal,setFluido,70)
    transicion(ini2,fini2,setFluido2,40)
  }

  function descargarCurriculum(){
    const urlDelPDF = `/documents/CV_${idioma}.pdf`;
    window.open(urlDelPDF, '_blank');
  };

  async function copiarAlPortapapeles(){
    console.log("entra")
    const email = 'https://www.ejemplo.com';

    try {
      await navigator.clipboard.writeText(email);
      alert(textos[31]);
    } catch (err) {
      console.error('Error:', err);
    }
  };



  useEffect(AnimarFondo,[]);

  useEffect(() => {
    const manejarCambioDeTamaño = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        window.location.reload();
      }, 10);
    };

    window.addEventListener('resize', manejarCambioDeTamaño);
  }, []);

return (<>
<canvas id="bg"></canvas>   

<main>
  <header>
    <h1>URIEL</h1>
    <h1>MARLES</h1>
    <p>🚀 {fluido} 🚀</p>
    <div className="container">
            <Image
              src="/images/componentImages/spain.png"
              alt="Imagen Izquierda"
              width={20}
              height={20}
            />
              <Switch size="large" onChange={cambiarIdioma} />
            <Image
              src="/images/componentImages/united-kingdom.png"
              alt="Imagen Derecha"
              width={20}
              height={20}
            />
          </div>
  </header>

  <tituloBlanco>
    <p>-{fluido2} </p>
  </tituloBlanco>


  <section ref={ref} className={`section ${inView ? 'visible' : ''}`}>
    <h1>{textos[2]}</h1>
    {[3, 4, 5, 6].map((index) => (
    <p key={index}>{textos[index]}</p>
  ))}
  </section>

  <section ref={ref2} className={`section left ${inView2 ? 'visible' : ''}`}>
  <h1>{textos[7]}</h1>

  <work onClick={() => {window.open('https://www.instagram.com/munideavellaneda/', '_blank');}}>
    <div className="image-container"><Image src="/images/experienceProjects/municipalidad_de_avellaneda_logo.jpeg" alt="LOGO AVE " width={125} height={125} /></div>
    <h3>{textos[8]}</h3>
    <p>{textos[9]}<br/><b>{textos[10]}</b></p>
  </work>
  <work onClick={() => {window.open('https://www.instagram.com/bylservicios/', '_blank');}}>
  <div className="image-container">
      <Image src="/images/experienceProjects/BYL_RECORTADO.png" alt="LOGO BYL" width={125} height={125} />
    </div>
    <h3>{textos[11]}</h3>
    <p>{textos[12]}<br/><b>{textos[13]}</b></p>
  </work>
</section>

<section ref={ref3} className={`section ${inView3 ? 'visible' : ''}`}>
  <h1>{textos[14]}</h1>
  <work onClick={() => {window.open('https://fra.utn.edu.ar/', '_blank');}}>
    <h3>{textos[15]}</h3>
    <p>{textos[16]}<br/><b>{textos[17]}</b></p>
    <div className="image-container"><Image src="/images/experienceProjects/UTN.jpeg" alt="LOGO AVE " width={125} height={125} /></div>
  </work>
  <work onClick={() => {window.open('https://www.kaplaninternational.com/', '_blank');}}>
    <h3>{textos[18]}</h3>
    <p>{textos[19]}<br/><b>{textos[20]}</b></p>
    <div className="image-container"><Image src="/images/experienceProjects/KAPLAN_ORIGINAL.jpeg" alt="LOGO AVE " width={125} height={125} /></div>
  </work>
  <work onClick={() => {window.open('https://ilse.esc.edu.ar/home', '_blank');}}>
    <h3>{textos[21]}</h3>
    <p>{textos[22]}<br/><b>{textos[23]}</b></p>
    <div className="image-container"><Image src="/images/experienceProjects/ILSE_RECORTADO.png" alt="LOGO AVE " width={125} height={125} /></div>
  </work>
</section>

<tituloBlanco>
    <p>{textos[24]}</p>
</tituloBlanco>

<div className='component3'>
<Tarjetas txs={textos}/>
</div>


<section ref={ref4} className={`section center ${inView4? 'visible':''}`}>
  <h1>{textos[30]}</h1>
<div className="contact">
  <div className='contactImage' onClick={descargarCurriculum}><Image src="/images/iconosMarcas/archivo.png" alt="LOGO AVE " width={75} height={75}/></div>
    <h3>{textos[32]}</h3>
  </div>
  <div className="contact">
  <div className='contactImage' onClick={copiarAlPortapapeles}><Image src="/images/iconosMarcas/email.png" alt="LOGO AVE " width={75} height={75}/></div>
    <h3> marlesurielnicolas@gmail.com</h3>
  </div>
  <div className="contact">
  <div className='contactImage' onClick={() => {window.open('https://linkedin.com/in/uriel-nicolas-marles', '_blank');}}><Image src="/images/iconosMarcas/linkedinBlack.png" alt="LOGO AVE " width={75} height={75}/></div>
    <h3>linkedin.com/in/uriel-nicolas-marles</h3>
  </div>
  <div className="contact">
  <div className='contactImage' onClick={() => {window.open('https://github.com/UrielMarles', '_blank');}}><Image src="/images/iconosMarcas/github.png" alt="LOGO AVE " width={75} height={75}/></div>
    <h3>github.com/UrielMarles</h3>
  </div>
  <div className="contact">
  <div className='contactImage' onClick={() => {window.open('https://gitlab.com/UrielMarles', '_blank');}}><Image src="/images/iconosMarcas/gitlab.png" alt="LOGO AVE " width={75} height={75}/></div>
    <h3>gitlab.com/UrielMarles</h3>
  </div>
</section>
</main>
</>)
}