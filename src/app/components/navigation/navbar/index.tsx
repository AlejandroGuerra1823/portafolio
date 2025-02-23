import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.css'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";


interface Props {
  toggle: () => void
}

const Navbar = ({ toggle }: Props) => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div
        // className={`menu ${isMenuOpen ? 'active' : ''}`}
        className={styles.menu}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flex:'30%'}}>
          <div className={styles.logo}>
            <p style={{ color: '#E40C38',  fontFamily: 'Montserrat', margin: 0, fontSize: 'clamp(0.9rem, 2rem, 3rem)' }}>Alejandro Guerra</p>
            <p style={{ color: 'white', fontSize: 'clamp(0.4rem, 1.5rem, 2rem)', fontFamily: 'Montserrat', marginTop: 0}}>Desarrollador móvil</p>
          </div>
        </Link>

       <div style={{ display: 'flex', flex: '50%', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
          <Link href="https://github.com/AlejandroGuerra1823" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            <p>GitHub</p>
          </Link>
          <Link href="/proyects" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            <p>Experiencia</p>
          </Link>



        <Link href="../../../../archives/HvAlejandroGuerra.pdf" download='Hv Alejandro Guerra' target="_blank" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            <p>Mi Hv</p>
          </Link>

          <Link href="/contact" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            <p>Contactame</p>
          </Link>

          <Dropdown>
            <DropdownTrigger>
              <Button style={{ width: 90, height: 60, borderRadius: 10 }} variant="bordered">ES - 🇪🇸</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">EN - US</DropdownItem>
            </DropdownMenu>
          </Dropdown> </div> 
      </div>

        {/* Botón Toggle (hamburguesa) */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flex:'30%'}}>
          <div className={styles.logo}>
            <p style={{ color: '#E40C38', fontSize: 'clamp(0.9rem, 2rem, 3rem)', fontFamily: 'Montserrat', margin: 0 }}>Alejandro Guerra</p>
            <p style={{ color: 'white', fontSize: 'clamp(0.4rem, 1.5rem, 2rem)', fontFamily: 'Montserrat', marginTop: 0}}>Desarrollador móvil</p>
          </div>
        </Link>
        <span className="bar">assa</span>
        <span className="bar">sasa</span>
        <span className="bar">sasa</span>
      </div>
    </nav>
  );
};


export default Navbar;