import Link from "next/link";

interface Props {
  isOpen: boolean
  toggle: () => void
}

const Sidebar = ({ isOpen, toggle }: Props) => {

  return (

    <div
      className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "-100%"}`,
      }}
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>
      <div>

        <div>

          <Link href="/about" onClick={toggle}><p>About Me</p></Link>
        </div>
        <div>

          <Link href="/services" onClick={toggle}><p>Alejo</p></Link>
        </div>
        <div>

        </div>
        <Link href="/contacts" onClick={toggle}><p>Contatame</p></Link>

      </div>
    </div>

  );
};

export default Sidebar;