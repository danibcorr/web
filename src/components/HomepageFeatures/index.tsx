import { useState } from "react";
import clsx from "clsx";
import styles from "@site/src/components/HomepageFeatures/styles.module.css";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Translate from "@docusaurus/Translate";

import ML_WIKI_IMG from "@site/static/img/projects/ml_wiki.jpg";
import MUSIC_GENRE_IMG from "@site/static/img/projects/music_genre_classifier.jpg";
import PAPERS_CODE_IMG from "@site/static/img/projects/papers_with_code.jpg";
import SALES_SUITE_IMG from "@site/static/img/projects/streamline_sales_suite.jpg";
import MORPHX_IMG from "@site/static/img/projects/morphx.jpg";
import WATTPAD_IMG from "@site/static/img/projects/wattpad.jpg";

import IOT_IMG from "@site/static/img/projects/arduino_iot.jpg";
import TIVA_IMG from "@site/static/img/projects/tivac_projects.jpg";
import ARDUINO_IMG from "@site/static/img/projects/creativa.jpg";
import KINECT_IMG from "@site/static/img/projects/kinect.jpg";
import SUMO_IMG from "@site/static/img/projects/tivac_sumo.jpg";

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

const dataAiProjects = [
  {
    title: (
      <Translate id="proyectos.ia.wiki">
        Wiki de Aprendizaje Automático
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.wiki.descripcion">
        Una wiki en español para almacenar y compartir aprendizajes, notas y
        código en un solo lugar, con un enfoque en el aprendizaje automático.
      </Translate>
    ),
    image: ML_WIKI_IMG,
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/ml-wiki",
      },
      {
        label: <TbWorld />,
        url: "https://danibcorr.github.io/ml-wiki/",
      },
    ],
  },
  {
    title: (
      <Translate id="proyectos.ia.musica">
        Clasificador de Géneros Musicales
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.musica.descripcion">
        Clasificador de géneros musicales para parámetros de ecualización
        automática de JamesDSP, utilizando Redes Neuronales Convolucionales con
        Transformers.
      </Translate>
    ),
    image: MUSIC_GENRE_IMG,
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/MusicGenreClassifier",
      },
    ],
  },
  {
    title: (
      <Translate id="proyectos.ia.ventas">Suite de Ventas Streamlit</Translate>
    ),
    description: (
      <Translate id="proyectos.ia.ventas.descripcion">
        Plataforma web integral para análisis y visualización de datos,
        impulsada con Streamlit, complementada con un clasificador automatizado
        de ítems.
      </Translate>
    ),
    image: SALES_SUITE_IMG,
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/streamlit-sales-suite",
      },
      {
        label: <TbWorld />,
        url: "https://sales-suite.streamlit.app/",
      },
    ],
  },
  {
    title: <Translate id="proyectos.ia.papers">Papers con Código</Translate>,
    description: (
      <Translate id="proyectos.ia.papers.descripcion">
        Implementaciones de artículos de aprendizaje automático y profundo en
        código.
      </Translate>
    ),
    image: PAPERS_CODE_IMG,
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/papers-with-code",
      },
      {
        label: <TbWorld />,
        url: "https://danibcorr.github.io/papers-with-code/",
      },
    ],
  },
  {
    title: <Translate id="proyectos.ia.universidad">MorphX</Translate>,
    description: (
      <Translate id="proyectos.ia.universidad.descripcion">
        MorphX es una herramienta basada en Streamlit que permite modificar
        metadatos, convertir archivos a Markdown, transcribir audio y más.
      </Translate>
    ),
    image: MORPHX_IMG,
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr/morphx" },
    ],
  },
  {
    title: (
      <Translate id="proyectos.ia.wattpad">Tu Compañero de Wattpad</Translate>
    ),
    description: (
      <Translate id="proyectos.ia.wattpad.descripcion">
        Herramienta para obtener información de Wattpad y conocer usuarios con
        los mismos gustos.
      </Translate>
    ),
    image: WATTPAD_IMG,
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr/wattpad-mate" },
      {
        label: <TbWorld />,
        url: "https://wattpad-mate.streamlit.app/",
      },
    ],
  },
];

const electronicsProjects = [
  {
    title: (
      <Translate id="proyectos.ia.sistema-monitoreo">
        Sistema de Monitoreo Ambiental
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.sistema-monitoreo.descripcion">
        Sistema de monitoreo IoT para comunicaciones inalámbricas utilizando
        Arduino y ESP32.
      </Translate>
    ),
    image: IOT_IMG,
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/monitoreo-ambiental-IoT",
      },
    ],
  },
  {
    title: (
      <Translate id="proyectos.ia.electronica-tiva">
        Electrónica con Tiva C
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.electronica-tiva.descripcion">
        Proyecto de sistemas embebidos con Tiva C utilizando comunicaciones UART
        e I2C.
      </Translate>
    ),
    image: TIVA_IMG,
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
        Electrónica con Arduino
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.electronica-arduino.descripcion">
        Repositorio con proyectos de Arduino y Processing para el curso de
        Electrónica Creativa en la UMA.
      </Translate>
    ),
    image: ARDUINO_IMG,
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/electronics-with-arduino-uma",
      },
      {
        label: <TbWorld />,
        url: "https://www.instructables.com/Robotic-Arm-Ft-Arduino-Mega-TheGHIZmo-Aarav-G/",
      },
      {
        label: <FaYoutube />,
        url: "https://www.youtube.com/watch?v=XPU3eNG0Fps",
      },
    ],
  },
  {
    title: (
      <Translate id="proyectos.ia.controlador-kinect">
        Controlador Kinect para PowerPoint
      </Translate>
    ),
    description: (
      <Translate id="proyectos.ia.controlador-kinect.descripcion">
        Desarrollo de un programa que permite el control natural de
        presentaciones de PowerPoint utilizando gestos y voz.
      </Translate>
    ),
    image: KINECT_IMG,
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/danibcorr/kinect-power-point",
      },
    ],
  },
  {
    title: <Translate id="proyectos.ia.microbot-sumo">Microbot Sumo</Translate>,
    description: (
      <Translate id="proyectos.ia.microbot-sumo.descripcion">
        Diseño de un microbot para lucha de sumo.
      </Translate>
    ),
    image: SUMO_IMG,
    links: [
      {
        label: <FaGithub />,
        url: "https://github.com/JeyJeysp/Microbotics_UMA",
      },
      {
        label: <FaYoutube />,
        url: "https://www.youtube.com/watch?v=QDrDcFWdLiE",
      },
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
                  setSelectedProject(
                    selectedProject === anchorId ? null : anchorId,
                  )
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
                  <img src={project.image} className={styles.projectIcon} />
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectTitle}>{project.title}</div>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.projectFooter}>
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
                  <img src={project.image} className={styles.projectIcon} />
                </div>
                <div className={styles.projectContent}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.projectFooter}>
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
    title: (
      <>
        <Translate id="perfil.title">Hola, soy Dani! </Translate>
        <img
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          width={35}
        />
      </>
    ),
    description: (
      <Translate id="perfil.descripcion">
        Soy Ingeniero de Sistemas Electrónicos y Científico de Datos en el área
        de investigación de Ericsson. Me apasiona la inteligencia artificial,
        los datos y sus aplicaciones para potenciar las capacidades humanas.
      </Translate>
    ),
    image: "https://avatars.githubusercontent.com/u/77023868?v=4",
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr" },
      { label: <FaLinkedin />, url: "https://es.linkedin.com/in/danibcorr" },
    ],
  },
];

export default HomepageFeatures;
