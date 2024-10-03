import './Portafolio.css';
import SwipeSlide from '../components/carruselGescom'
import SwipeSlide2 from '../components/carruselSica'
import Navbar from '../components/Navegacion';
import fotoAjustada from '../assets/statics/fotoajustada.jpg';
import foto2 from '../assets/statics/perfil.jpeg';

export function PortafolioPage() {
   

    return (
        <div className="wrapper"id="Inicio">

            
            <Navbar/>
            <div className="inicio" >
                <article>
                    <section>
                    <div>
                    <div className='contenedorImg'>
                    <img src={fotoAjustada} alt="perfil" /></div>
                    <a href="https://www.linkedin.com/in/claudiorodr%C3%ADguezortega/">Disponible para trabajar</a>
                    </div>
                        <h1>Hola, Me llamo Claudio</h1>
                        <p>
                            Recientemente titulado de <strong>Analista Programador Computacional</strong> en Duoc UC<br></br>
                            Disfruto crear tanto <strong>experiencias web y moviles </strong>para los usuarios<br></br>
                            Actualmente estoy buscando una empresa en la que pueda iniciar mi trayectoria profesional<br></br>
                        </p>
                    </section>
                    
                    <div className='especial'>
                        <a href="mailto:cl.rodriguezo@duocuc.cl"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 21" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>
                        Contáctame</a>
                        <a href="https://www.linkedin.com/in/claudiorodr%C3%ADguezortega/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                        LinkedIn</a>
                    </div>  
                </article>   
            </div>
            
            <div className="experiencia" id="Experiencia">
                <h2><svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>Experiencia laboral</h2>
                <ul>
                    <li>
                        <div className='contenedor'>
                            <div>
                                <p>Desarrollo Full-stack</p>
                                <p>Abetec Chile Ingieneria</p>
                                <p>Marzo 2024 - mayo 2024</p>
                            </div>

                            <section>
                                <p>
                                    Desarrollo de sistema web, API REST basada en tecnología Python, fastAPI, React-vite como
                                    Framework con PostgreSQL, este sistema apoya en la gestión de los equipos y proyectos de
                                    la empresa, el desarrollo abarco desde la toma de requerimientos hasta la etapa de
                                    desarrollo                      
                                </p>
                            </section>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='proyectos' id="Proyectos">
            
                <section>
                <h2>Proyectos</h2>
                <p>
                    En todos los proyectos he trabajado con el enfoque fullstack, teniendo en cuenta dentro de todo son proyectos "sencillos"
                </p>
                   
                    <article>
                        <SwipeSlide/>
                        <div>
                            <h2>Gescom - Aplicacion Movil para la gestion de transacciones</h2>
                            <ul>
                                <li><span>Ionic</span></li>
                                <li><span>Node.js</span></li>
                            </ul>
                            <p>Desarrolle una aplicación móvil mediante tecnología Ionic-Angular, que provee al usuario un sistema de registro y
                            gestión de transacciones comerciales</p>
                            
                            <a href="https://github.com/ClaudRO/Gescom1.2">GitHub</a>
                           
                        </div>
                    </article>
                    <article>
                        <SwipeSlide2/>
                        <div>
                            <h2>SICA - Aplicacion Movil para saber estado de los cajeros</h2>
                            <ul>
                                <li><span>Ionic/Angular</span></li>
                                <li><span>Node.js</span></li>
                                <li><span>PostgreSQL</span></li>
                            </ul>
                            <p>Desarrolle una aplicación móvil mediante tecnología Ionic-Angular, que provee al usuario un sistema de registro y
                            gestión de transacciones comerciales</p>
                            
                            <a href="https://github.com/ClaudRO/Gescom1.2">GitHub</a>
                           
                        </div>
                    </article>
                    
                </section>
            </div>
            <div className='educacion' id="Educacion">
                <section>
                    <article>
                        <h2>Educación</h2>
                        <ul>
                            <li>
                                <p><strong>Analista Programador Computacional (Titulado)</strong></p>
                                <p>Instituto Duoc Uc</p>
                                <p>Marzo 2022 - Agosto 2024</p>
                            </li>
                            <li>
                                <p><strong>Ingenieria de Ejecuccion en Informatica (sin finalizar)</strong></p>
                                <p>Pontificia Universidad Catolica de Valparaiso</p>
                                <p>Marzo 2019 - Abril 2021 (3 años)</p>
                            </li>
                            <li>
                                <p><strong>Enseñanza Media</strong></p>
                                <p>Colegio Alcantara de los altos de Peñaolen</p>
                                <p>Noviembre 2017</p>
                            </li>
                        </ul>
                    </article>
                </section>
            </div>
            <div className='sobreMi' id='Sobre-mi'>
                <h2>Sobre Mí</h2>
                <article>
                    <section>
                        <div>   
                            <p>
                                Mi nombre es Claudio, tengo 25 años y soy de Santiago, Chile. Terminé mis estudios como 
                                Analista Programador Computacional en Duoc UC. Disfruto crean tanto experiencias web y moviles
                                para los usuarios
                            </p>    
                            <p> 
                                Entre mis éxitos destaco que durante mi formacion participe en diversos proyectos, dentro de los cuales
                                ayudé a mis compañeros de grupo a aprender sobre las APIS y del funcionamiento general de aplicaciones web
                                y mobiles a nivel entry-level
                            </p>
                            <p>
                                Mi primer acercamiento con el mundo de Programación fue un par de años antes de entrar en Duoc UC.
                                Estudie 3 años Ingenieria de Ejecuccion en Informatica en la PUCV. Si bien esta formación no la pude terminar por
                                diversos motivos, la experiencia me proporcionó una sólida base en lógica de programación, facilitando significativamente
                                mi posterior educación como Analista Programador Computacional. Este conocimiento previo me permitió aprovechar al máximo
                                los contenidos del programa
                            </p>
                        </div> 
                            <img src={foto2} alt="perfil2" />
                    </section>
                    
                </article>
            </div>
            <footer>
                <article>
                    <span>
                        © 2024 <a href="">ClauRod</a>. Casi todos los derechos reservados
                    </span>
                    <div>
                        <a href="">Sobre mi</a>
                        <a href="mailto:cl.rodriguezo@duocuc.cl">Contacto</a>
                    </div>
                </article>
            </footer>
            
        </div>
    );
}
