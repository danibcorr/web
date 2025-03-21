import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Translate from "@docusaurus/Translate";

// Categorías de proyectos
const projectCategories = [
  {
    title: (
      <Translate id="bloque.proyectos.ia">
        Datos e Inteligencia Artificial
      </Translate>
    ),
    description: (
      <Translate id="bloque.proyectos.ia.descripcion">
        Descubre mis trabajos relacionados con datos e inteligencia artificial.
      </Translate>
    ),
    anchorId: "data-ai",
  },
  {
    title: (
      <Translate id="bloque.proyectos.electronica">
        Electrónica y Robótica
      </Translate>
    ),
    description: (
      <Translate id="bloque.proyectos.electronica.descripcion">
        Explora mis proyectos en el campo de la electrónica y robótica.
      </Translate>
    ),
    anchorId: "electronics",
  },
];

// Proyectos de datos e IA
const dataAiProjects = [
  {
    title: (
      <Translate id="proyectos.ia.wiki">🏫 Wiki de Aprendizaje Automático</Translate>
    ),
    description: (
      <Translate id="proyectos.ia.wiki.descripcion">
        Una wiki en español para almacenar y compartir aprendizajes, notas y código en un
        solo lugar, con un enfoque en el aprendizaje automático.
      </Translate>
    ),
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr/machine-learning-wiki" },
      {
        label: <TbWorld />,
        url: "https://danibcorr.github.io/web/docs/machine-learning-wiki/intro",
      },
    ],
  },
  {
    title: (
      <Translate id="proyectos.ia.musica">
        🎵 Clasificador de Géneros Musicales
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.musica.descripcion">
        Clasificador de géneros musicales para parámetros de ecualización automática de
        JamesDSP, utilizando Redes Neuronales Convolucionales con Transformers.
      </Translate>
    ),
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr/MusicGenreClassifier" },
    ],
  },
  {
    title: <Translate id="proyectos.ia.ventas">💸 Suite de Ventas Streamlit</Translate>,
    description: (
      <Translate id="proyectos.ia.ventas.descripcion">
        Plataforma web integral para análisis y visualización de datos, impulsada con
        Streamlit, complementada con un clasificador automatizado de ítems.
      </Translate>
    ),
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr/streamlit-sales-suite" },
    ],
  },
  {
    title: <Translate id="proyectos.ia.papers">📄 Papers con Código</Translate>,
    description: (
      <Translate id="proyectos.ia.papers.descripcion">
        Implementaciones de artículos de aprendizaje automático y profundo en código.
      </Translate>
    ),
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr/papers-with-code" },
    ],
  },
  {
    title: <Translate id="proyectos.ia.universidad">🎓 MorphX</Translate>,
    description: (
      <Translate id="proyectos.ia.universidad.descripcion">
        MorphX es una herramienta basada en Streamlit que permite modificar metadatos,
        convertir archivos a Markdown, transcribir audio y más.
      </Translate>
    ),
    links: [{ label: <FaGithub />, url: "https://github.com/danibcorr/morphx" }],
  },
  {
    title: <Translate id="proyectos.ia.wattpad">📚 Tu Compañero de Wattpad</Translate>,
    description: (
      <Translate id="proyectos.ia.wattpad.descripcion">
        Herramienta para obtener información de Wattpad y conocer usuarios con los mismos
        gustos.
      </Translate>
    ),
    links: [{ label: <FaGithub />, url: "https://github.com/danibcorr/wattpad-mate" }],
  },
];

// Proyectos de electrónica y robótica
const electronicsProjects = [
  {
    title: (
      <Translate id="proyectos.ia.sistema-monitoreo">
        🏔️ Sistema de Monitoreo Ambiental
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.sistema-monitoreo.descripcion">
        Sistema de monitoreo IoT para comunicaciones inalámbricas utilizando Arduino y
        ESP32.
      </Translate>
    ),
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/monitoreo-ambiental-IoT",
      },
    ],
  },
  {
    title: (
      <Translate id="proyectos.ia.electronica-tiva">🎛️ Electrónica con Tiva C</Translate>
    ),
    description: (
      <Translate id="proyectos.ia.electronica-tiva.descripcion">
        Proyecto de sistemas embebidos con Tiva C utilizando comunicaciones UART e I2C.
      </Translate>
    ),
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/electronics-with-tivac",
      },
    ],
  },
  {
    title: (
      <Translate id="proyectos.ia.electronica-arduino">
        🎛️ Electrónica con Arduino
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.electronica-arduino.descripcion">
        Repositorio con proyectos de Arduino y Processing para el curso de Electrónica
        Creativa en la UMA.
      </Translate>
    ),
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/electronics-with-arduino-uma",
      },
      {
        label: <TbWorld />,
        url: "https://www.instructables.com/Robotic-Arm-Ft-Arduino-Mega-TheGHIZmo-Aarav-G/",
      },
      { label: <FaYoutube />, url: "https://www.youtube.com/watch?v=XPU3eNG0Fps" },
    ],
  },
  {
    title: (
      <Translate id="proyectos.ia.controlador-kinect">
        👀 Controlador Kinect para PowerPoint
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.controlador-kinect.descripcion">
        Desarrollo de un programa que permite el control natural de presentaciones de
        PowerPoint utilizando gestos y voz.
      </Translate>
    ),
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr/kinect-power-point" },
    ],
  },
  {
    title: <Translate id="proyectos.ia.microbot-sumo">🤖 Microbot Sumo</Translate>,
    description: (
      <Translate id="proyectos.ia.microbot-sumo.descripcion">
        Diseño de un microbot para lucha de sumo.
      </Translate>
    ),
    links: [
      { label: <FaGithub />, url: "https://github.com/JeyJeysp/Microbotics_UMA" },
      { label: <FaYoutube />, url: "https://www.youtube.com/watch?v=QDrDcFWdLiE" },
    ],
  },
];

// Componente principal
function HomepageFeatures() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Cambiar el texto del botón dependiendo del proyecto seleccionado
  const getButtonText = (anchorId) => {
    return selectedProject === anchorId ? (
      <Translate id="bloque.ocultar.proyectos">Ocultar proyectos</Translate>
    ) : (
      <Translate id="bloque.ver.proyectos">Ver proyectos</Translate>
    );
  };

  return (
    <section className={styles.features}>
      <div className="container">
        {/* Información de perfil */}
        <div className={styles.featureContainer}>
          {features.map(({ title, description, image, links }) => (
            <div className={clsx(styles.feature)} key={title}>
              <div className={styles.imageContainer}>
                <img src={image} className={styles.featureImage} alt={title} />
              </div>
              <div className={styles.textContainer}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={styles.socialLinks}>
                  {links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Título de sección de proyectos */}
        <h1 className={styles.projectsTitle}>
          <Translate id="bloque.proyectos">Proyectos</Translate>
        </h1>

        {/* Categorías de proyectos */}
        <div className={styles.projectsContainer}>
          {projectCategories.map(({ title, description, anchorId }) => (
            <div className={styles.project} key={anchorId}>
              <h3>{title}</h3>
              <p>{description}</p>
              <button
                onClick={() =>
                  setSelectedProject(selectedProject === anchorId ? null : anchorId)
                }
                className={styles.projectButton}
              >
                {getButtonText(anchorId)}
              </button>
            </div>
          ))}
        </div>

        {/* Proyectos de datos e IA */}
        {selectedProject === "data-ai" && (
          <div className={clsx(styles.projectsGrid, styles.visible)}>
            {dataAiProjects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <circle
                      cx="12"
                      cy="8"
                      r="2"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5,21V15C5,11.5,8,9,12,9s7,2.5,7,6v6"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className={styles.projectContent}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectFooter}>
                    <button className={styles.projectCardButton}>
                      <Translate id="bloque.ver.mas">Ver más</Translate>
                    </button>
                    <div className={styles.projectLinks}>
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Proyectos de electrónica y robótica */}
        {selectedProject === "electronics" && (
          <div className={clsx(styles.projectsGrid, styles.visible)}>
            {electronicsProjects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <circle
                      cx="12"
                      cy="8"
                      r="2"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5,21V15C5,11.5,8,9,12,9s7,2.5,7,6v6"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className={styles.projectContent}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectFooter}>
                    <button className={styles.projectCardButton}>
                      <Translate id="bloque.ver.mas">Ver más</Translate>
                    </button>
                    <div className={styles.projectLinks}>
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Variable features (no modificada respecto a tu código original)
const features = [
  {
    title: "Daniel Bazo Correa",
    description: (
      <Translate id="perfil.descripcion">
        Hola, soy Dani! 👋 Soy Ingeniero de Sistemas Electrónicos y Científico de Datos
        en el área de investigación de Ericsson. Me apasiona la inteligencia artificial,
        los datos y sus aplicaciones para potenciar las capacidades humanas.
      </Translate>
    ),
    image: "https://avatars.githubusercontent.com/u/77023868?v=4",
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr" },
      { label: <FaLinkedin />, url: "https://linkedin.com/in/danibcorr" },
    ],
  },
];

export default HomepageFeatures;
