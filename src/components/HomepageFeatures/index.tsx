import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Translate from "@docusaurus/Translate";

const features = [
  {
    title: "Daniel Bazo Correa",
    description: (
      <Translate id="perfil.descripcion">
        Hola, soy Dani! 👋 Soy Ingeniero de Sistemas Electrónicos y Científico
        de Datos en el área de investigación de Ericsson. Me apasiona la
        inteligencia artificial, los datos y sus aplicaciones para potenciar las
        capacidades humanas.
      </Translate>
    ),
    image: "https://avatars.githubusercontent.com/u/77023868?v=4",
    links: [
      { label: <FaGithub />, url: "https://github.com/danibcorr" },
      { label: <FaLinkedin />, url: "https://linkedin.com/in/danibcorr" },
    ],
  },
];

const projects = [
  {
    title: (
      <Translate id="bloque.proyectos.ia">
        Proyectos de Datos e Inteligencia Artificial
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
        Proyectos de Electrónica y Robótica
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
        <div className={styles.featureContainer}>
          {features.map(({ title, description, image, links }) => (
            <div className={clsx(styles.feature)} key={title}>
              <div className={styles.imageContainer}>
                <img src={image} className={styles.featureImage} alt={title} />
              </div>
              <div className={styles.textContainer}>
                <h2>{title}</h2>
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

        <h1 className={styles.projectsTitle}>
          <Translate id="bloque.proyectos">Proyectos</Translate>
        </h1>
        <div className={styles.projectsContainer}>
          {projects.map(({ title, description, anchorId }) => (
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

        <div className={styles.projectsDetailSection}>
          {selectedProject === "data-ai" && (
            <div
              id="data-ai"
              className={clsx(
                styles.projectDetail,
                selectedProject === "data-ai" && styles.visible,
              )}
            >
              <h3>Proyectos de Datos e Inteligencia Artificial</h3>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.wiki">
                    🏫 Wiki de Aprendizaje Automático
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.wiki.descripcion">
                    Una wiki en español para almacenar y compartir aprendizajes,
                    notas y código en un solo lugar, con un enfoque en el
                    aprendizaje automático.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/machine-learning-wiki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://danibcorr.github.io/web/docs/machine-learning-wiki/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbWorld />
                  </a>
                </div>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.musica">
                    🎵 Clasificador de Géneros Musicales
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.musica.descripcion">
                    Clasificador de géneros musicales para parámetros de
                    ecualización automática de JamesDSP, utilizando Redes
                    Neuronales Convolucionales con Transformers.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/MusicGenreClassifier"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.ventas">
                    💸 Suite de Ventas Streamlit
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.ventas.descripcion">
                    Plataforma web integral para análisis y visualización de
                    datos, impulsada con Streamlit, complementada con un
                    clasificador automatizado de ítems que optimiza la
                    asignación de etiquetas.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/streamlit-sales-suite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.papers">
                    📄 Papers con Código
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.papers.descripcion">
                    Implementaciones de artículos de aprendizaje automático y
                    profundo en código.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/papers-with-code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.universidad">
                    🎓 Asistente Universitario
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.universidad.descripcion">
                    Herramienta que simplifica tareas académicas y
                    administrativas para estudiantes, educadores e
                    investigadores, proporcionando utilidades para gestionar
                    metadatos de documentos, convertir PDFs a Markdown,
                    transcribir audio, analizar estadísticas de calificaciones y
                    más.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/university-helper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.wattpad">
                    📚 Tu Compañero de Wattpad
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.wattpad.descripcion">
                    Herramienta para obtener información de Wattpad y conocer
                    usuarios con los mismos gustos y accesibles para interactuar
                    con ellos.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/wattpad-mate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          )}

          {selectedProject === "electronics" && (
            <div
              id="electronics"
              className={clsx(
                styles.projectDetail,
                selectedProject === "electronics" && styles.visible,
              )}
            >
              <h3>
                <Translate id="proyectos.electronica.robótica">
                  Proyectos de Electrónica y Robótica
                </Translate>
              </h3>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.sistema-monitoreo">
                    🏔️ Sistema de Monitoreo Ambiental
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.sistema-monitoreo.descripcion">
                    Sistema de monitoreo IoT para comunicaciones inalámbricas
                    utilizando Arduino y ESP32. Propuesta realizada para el
                    proyecto final del Máster en Telemática y Redes de
                    Telecomunicación de la UMA, en la asignatura de Ingeniería
                    de Software para el Internet de las Cosas.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/monitoreo-ambiental-IoT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.electronica-tiva">
                    🎛️ Electrónica con Tiva C
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.electronica-tiva.descripcion">
                    Proyecto de sistemas embebidos con Tiva C utilizando
                    comunicaciones UART e I2C.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/electronics-with-tivac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.electronica-arduino">
                    🎛️ Electrónica con Arduino
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.electronica-arduino.descripcion">
                    Repositorio que contiene una colección de proyectos de
                    Arduino y Processing desarrollados para el curso de
                    Electrónica Creativa en la Universidad de Málaga (UMA).
                    Enfoque principal en un proyecto de brazo robótico, con
                    trabajos adicionales en sensores piezoeléctricos y lámparas
                    LED.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/electronics-with-arduino-uma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.instructables.com/Robotic-Arm-Ft-Arduino-Mega-TheGHIZmo-Aarav-G/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbWorld />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=XPU3eNG0Fps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.controlador-kinect">
                    👀 Controlador Kinect para PowerPoint
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.controlador-kinect.descripcion">
                    Desarrollo de un programa que permite el control natural de
                    presentaciones de PowerPoint utilizando gestos y voz.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/danibcorr/kinect-power-point"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectTitle}>
                  <Translate id="proyectos.ia.microbot-sumo">
                    🤖 Microbot Sumo
                  </Translate>
                </h4>
                <p className={styles.projectDescription}>
                  <Translate id="proyectos.ia.microbot-sumo.descripcion">
                    Diseño de un microbot para lucha de sumo.
                  </Translate>
                </p>
                <div className={styles.projectLinks}>
                  <a
                    href="https://github.com/JeyJeysp/Microbotics_UMA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=QDrDcFWdLiE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
