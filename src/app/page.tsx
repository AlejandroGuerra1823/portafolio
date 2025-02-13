"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import styles from './styles.module.css'

export default function Home() {
  return (

    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginInline: 30, marginBottom: 45 }}>
        <div style={{ flex: '1 1 50%', minWidth: 280, paddingRight: 50 }}>
          <p style={{ fontFamily: 'Montserrat', fontSize: 'clamp(1.2rem, 5vw, 1.6rem)' }}>
            Bienvenido a mi portafolio! <br />
            <span style={{ color: '#E40C38' }}>Alejandro Guerra </span>
            es un experimentado Desarrollador mobile
            y apasionado por las nuevas tecnologías, con la pasión por crear aplicaciones móviles hermosas e intuitivas en React Native.
          </p>
        </div>
        <div style={{ flex: '1 1 40%', minWidth: 0 }}>
          <img src="/images/reatcdad.webp" alt="Descripción de la imagen"
            style={{ borderRadius: 8, marginInline: 0, width: '20%' }} />
          <img src="/images/reduz.png" alt="Descripción de la imagen"
            style={{ borderRadius: 8, marginInline: '2%', width: '20%' }} />
          <img src="/images/tipoescrp.png" alt="Descripción de la imagen"
            style={{ borderRadius: 8, marginInline: '2%', width: '20%' }} />
          <img src="/images/javaescri.png" alt="Descripción de la imagen"
            style={{ borderRadius: 8, marginInline: '2%', width: '20%' }} />
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
        <div className={styles.sobreMiContent}>
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
              Desarrollador especializado en el desarrollo móvil, apasionado y con mucho entusiasmo para seguir aprendiendo. Con más de 3 años de experiencia.
            </p>
          </div>
        </div>

        <div className={styles.sobreMiContent}>
          <div className={styles.sobreMiTextContainer}>
            <h2 className={styles.sobreMiTitle}>Mis inicios</h2>
            <p className={styles.sobreMiDescription}>
              Desarrollador especializado en el desarrollo móvil, apasionado y con mucho entusiasmo para seguir aprendiendo. Con más de 3 años de experiencia.
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
