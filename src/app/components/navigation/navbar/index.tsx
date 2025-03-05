
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
// import Link from 'react-scroll';
import styles from './styles.module.css';
import Link from "next/link";

interface Props {
  toggle: () => void
}

const Navbar = ({ toggle }: Props) => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onButtonClick = () => {
    const pdfUrl = "../../../../../public/HvAlejandroGuerra.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "HvAlejandroGuerra.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <nav className={styles.navbar} >
      <div
        // className={`menu ${isMenuOpen ? 'active' : ''}`}
        className={styles.menu}>

        <div className={styles.logo}>
          <p style={{ color: '#E40C38', fontFamily: 'Montserrat', margin: 0, fontSize: 'clamp(0.9rem, 2rem, 3rem)' }}>Alejandro Guerra</p>
          <p style={{ color: 'white', fontSize: 'clamp(0.4rem, 1.5rem, 2rem)', fontFamily: 'Montserrat', marginTop: 0 }}>Desarrollador móvil</p>
        </div>


        <div className={styles.containerMenu}>
          <a className={styles.butons} href="https://github.com/AlejandroGuerra1823" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            GitHub
          </a>

          <a className={styles.butons} href="#MiExperiencia" style={{ cursor: 'pointer', fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            Experiencia
          </a>



          <a className={styles.butons} onClick={onButtonClick} download='Hv Alejandro Guerra' target="_blank" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat' }}>
            Mi Hv
          </a>

          <a className={styles.butons} href="https://linkedin.com/in/alejandro-guerra-developer" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            Contactame
          </a>
          {/* 
          <Dropdown>
            <DropdownTrigger>
              <Button style={{ width: 90, height: 60, borderRadius: 10 }} variant="bordered">ES - 🇪🇸</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">EN - US</DropdownItem>
            </DropdownMenu>
          </Dropdown>  */}
        </div>
      </div>

      {/* Botón Toggle (hamburguesa) */}
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flex: '30%' }}>
          <div className={styles.logo}>
            <p style={{ color: '#E40C38', fontSize: 'clamp(0.9rem, 2rem, 3rem)', fontFamily: 'Montserrat', margin: 0 }}>Alejandro Guerra</p>
            <p style={{ color: 'white', fontSize: 'clamp(0.4rem, 1.5rem, 2rem)', fontFamily: 'Montserrat', marginTop: 0 }}>Desarrollador móvil</p>
          </div>
        </Link>

        <div className="navbar" style={{ textDecoration: 'none', display: 'flex', flex: '30%', justifyContent: 'flex-end' }}>
          {isMenuOpen &&
            <div style={{ position: 'absolute', marginTop: 20, marginRight: 30, backgroundColor: '#141313', borderRadius: 10 }}>
              <ul style={{ display: 'flex', flexDirection: 'column', marginRight: 35, gap: 9, alignItems: 'center' }}>
                <a href="https://github.com/AlejandroGuerra1823" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat' }}>GitHub</a>
                <a style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat' }}>Experiencia</a>
                <a href="../../../../archives/HvAlejandroGuerra.pdf" download='Hv Alejandro Guerra' target="_blank" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat' }}>Mi Hv</a>
                <a href="https://linkedin.com/in/alejandro-guerra-developer" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat' }}>Contactame</a>
              </ul>
            </div>}


          <div onClick={toggleMenu} style={{ marginTop: 30, marginLeft: 2, marginRight: 40 }}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Muestra el ícono según el estado */}
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;