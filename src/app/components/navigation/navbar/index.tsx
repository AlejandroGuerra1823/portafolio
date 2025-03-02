import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as Link2 } from 'react-scroll';
import styles from './styles.module.css';


interface Props {
  toggle: () => void
}

const Navbar = ({ toggle }: Props) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div
        // className={`menu ${isMenuOpen ? 'active' : ''}`}
        className={styles.menu}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flex: '30%' }}>
          <div className={styles.logo}>
            <p style={{ color: '#E40C38', fontFamily: 'Montserrat', margin: 0, fontSize: 'clamp(0.9rem, 2rem, 3rem)' }}>Alejandro Guerra</p>
            <p style={{ color: 'white', fontSize: 'clamp(0.4rem, 1.5rem, 2rem)', fontFamily: 'Montserrat', marginTop: 0 }}>Desarrollador móvil</p>
          </div>
        </Link>

        <div style={{ display: 'flex', flex: '50%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <a className={styles.butons} href="https://github.com/AlejandroGuerra1823" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            <p style={{ textAlign: 'center' }}>GitHub</p>
          </a>

          <Link2 className={styles.butons} to="MiExperiencia" smooth={true} duration={500} style={{ cursor: 'pointer', fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            <p>Experiencia</p>
          </Link2>



          <Link className={styles.butons} href="../../../../archives/HvAlejandroGuerra.pdf" download='Hv Alejandro Guerra' target="_blank" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            <p>Mi Hv</p>
          </Link>

          <Link className={styles.butons} href="https://linkedin.com/in/alejandro-guerra-developer" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat', }}>
            <p>Contactame</p>
          </Link>
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
            <div style={{position:'absolute', marginTop:20, marginRight: 30, backgroundColor: '#141313', borderRadius: 10 }}>
              <ul style={{display: 'flex',flexDirection:'column',marginRight: 35,gap: 5, alignItems: 'center'}}>
                <a  href="https://github.com/AlejandroGuerra1823" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat' }}>GitHub</a>
                <Link2 to="MiExperiencia" smooth={true} duration={500} style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat' }}>Experiencia</Link2>
                <a href="../../../../archives/HvAlejandroGuerra.pdf" download='Hv Alejandro Guerra' target="_blank" style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat' }}>Mi Hv</a>
                <a href="https://linkedin.com/in/alejandro-guerra-developer" target="_blank" rel="noopener noreferrer"  style={{ fontSize: 20, textDecoration: 'none', color: '#E40C38', fontFamily: 'Montserrat' }}>Contactame</a>
              </ul>
            </div>}


          <div className="menu-icon" onClick={toggleMenu} style={{marginTop:30, marginLeft: 2}}>
            {isMenuOpen ? <FaTimes style={{}} /> : <FaBars />} {/* Muestra el ícono según el estado */}
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;