"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import styles from './styles.module.css'

export default function Home() {
  return (

    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap',  alignItems: 'center', marginBottom: 45}}>
        <div style={{ display: 'flex',flex: '1 1 50%', minWidth: 280, paddingRight: 20  }}>
          <p style={{ fontFamily: 'Montserrat', fontSize: 'clamp(1.2rem, 5vw, 1.6rem)' }}>
            Bienvenido a mi portafolio! <br />
            <span style={{ color: '#E40C38' }}>Alejandro Guerra </span>
            es un experimentado Desarrollador mobile
            y apasionado por las nuevas tecnologías, con la pasión por crear aplicaciones móviles hermosas e intuitivas en React Native.
          </p>
        </div>
      
        <div style={{display: 'flex', flex: '1 1 45%',gap: 20, justifyContent: 'flex-end'}}>
          <img src="/images/reatcdad.webp" alt="Descripción de la imagen"
            style={{ borderRadius: 8,  width: '20%' }} />
          <img src="/images/reduz.png" alt="Descripción de la imagen"
            style={{ borderRadius: 8,  width: '20%' }} />
          <img src="/images/plisFire.webp" alt="Descripción de la imagen"
            style={{ borderRadius: 8,width: '20%'}} />
          <img src="/images/tipoescrp.png" alt="Descripción de la imagen"
            style={{ borderRadius: 8,  width: '20%' }} />
          
        </div>
      </div>




      <div style={{ display: 'flex', flexWrap: 'wrap', marginInline: 0, alignItems: 'center', justifyContent: 'space-between', marginBottom: 80 }}>

        {/* <div className={styles.imageContainer} style={{ maxHeight: 470, height: 500 }}>
          <img src="/images/yoMono.jpeg" alt="Descripción de la imagen"
          />
          <div className={styles.overlay}>
            <p className={styles.overlayTextTitle}>Sobre mi</p>
            <p className={styles.overlayText}>Aqui te cuento todo mi proceso
              y mas informacion sobre mi para que conozcas mas a fondo</p>
          </div>
        </div>


        <div className={styles.imageContainer} style={{ maxHeight: 470 }}>
          <img src="/images/pcfotico.jpeg" alt="Foticops"
          />
          <div className={styles.overlay}>
            <p className={styles.overlayTextTitle}>Mi experiencia</p>
            <p className={styles.overlayText}>Aqui te cuento todo mi proceso
              y mas informacion sobre mi para que conozcas mas a fondo</p>
          </div>
        </div> */}


        {/* <div className={styles.imageContainer} style={{ maxHeight: 470, height: 500 }}>
          <img src="/images/lastone.png" alt="Foticops"
          />
          <div className={styles.overlay}>
            <p className={styles.overlayTextTitle}>Proyectos</p>
            <p className={styles.overlayText}>Aqui te cuento todo mi proceso
              y mas informacion sobre mi para que conozcas mas a fondo</p>
          </div>
        </div> */}


      </div>


      <div className={styles.sobreMiContainer}>
        <div className={styles.sobreMiContent} style={{marginTop: 0}}>
          <div className={styles.sobreMiImageContainer}>
            <img
              src="/images/yoMono.jpeg"
              alt="Descripción de la imagen"
              className={styles.sobreMiImage}
            />
          </div>
          <div className={styles.sobreMiTextContainer}>
            <h2 className={styles.sobreMiTitle}>Sobre mí</h2>
            <p className={styles.sobreMiDescription}>
              Soy  <span style={{ color: '#E40C38' }}>Manuel Alejandro Guerra Arango </span>
               tengo 21 años y vivo en Medellin, Colombia.
               Soy un apasionado desarrollador móvil, creativo y siempre curioso por las nuevas tecnologías. Desde que comencé a aprender 
               programación, me ha fascinado la idea de crear software que
              impacte y facilite la vida de las personas. La música también es una de mis pasiones, ya que me inspira y me conecta con mi creatividad.
              <br/><br/><span style={{ color: '#E40C38', fontFamily: 'monospace'}}> "El esfuerzo de hoy es el fruto del mañana"</span> <br/><br/>Creo firmemente que cada paso que damos, por pequeño que sea, nos lleva a algo más grande. 
              Mi camino está guiado por mi fé, por mi deseo de ser mejor persona y por la convicción de que siempre hay algo nuevo que aprender.
            </p>
          </div>
        </div>

        <div className={styles.sobreMiContent}>
          <div className={styles.sobreMiTextContainer}>
            <h2 className={styles.sobreMiTitle}>Mis inicios</h2>
            <p className={styles.sobreMiDescription}>
            Mi pasión por la <span style={{ color: '#E40C38',}}> Programación</span> comenzó desde el grado sexto en el colegio, cuando descubrí Scratch, una herramienta que me permitió crear mis primeros juegos 
            y familiarizarme con los conceptos básicos de la programación. Ese fue el primer paso que me llevó a descubrir lo que sería mi camino profesional.
             <br/><br/>
            Después de esa experiencia inicial, Opté por estudiar la media técnica en programación en mi colegio, donde me gradué como 
            <span style={{ color: '#E40C38',}}> Técnico Asistente de Programación.</span> Durante esa etapa, Conseguí una base sólida para seguir aprendiendo y creciendo en este campo.
            <br/><br/>
            Mi primer lenguaje de programación fue Java, y desde el momento en que empecé a aprenderlo, Aunque al principio fue desafiante, 
            poco a poco fui desarrollando mis habilidades y entendiendo la importancia de seguir practicando. Cada proyecto me enseñaba algo nuevo y me acercaba más a mi objetivo de ser un mejor programador.
            </p>
          </div>
          <div className={styles.sobreMiImageContainer}>
            <img
              src="/images/yoPelinegro.jpeg"
              alt="Descripción de la imagen"
              className={styles.sobreMiImage}
            />
          </div>
        </div>
      </div>


      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap', marginTop: 200, marginInline: 30 }}>
        <p style={{ color: '#E40C38', fontSize: 40, fontFamily: 'Montserrat', alignSelf: 'center' }}>
          Mi experiencia
        </p>
        <p>
          Desarrollador especializado en el desarrollo movil apasionado y con mucho entusiasnomo para seguir aprendiendo con mas de 3 años de experiencia.
        </p>
      </div>

      {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap', marginTop: 200, marginInline: 30}}>
        <p style={{ color: '#E40C38', fontSize: 40, fontFamily: 'Montserrat', alignSelf: 'center' }}>
          Mis Proyectos
        </p>
        <p>
          Desarrollador especializado en el desarrollo movil apasionado y con mucho entusiasnomo para seguir aprendiendo con mas de 3 años de experiencia.
        </p>
      </div> */}

    </div>
  );
}
