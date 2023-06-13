import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-gray-500 px-5 text-white">
      <div className="flex justify-between md:py-5 md:justify-around md:align-middle">
        {/* LOGOTYPE */}
        <div className="flex items-center justify-center">
          <Link href="/">
            <h2 className="text-2xl font-bold md:pl-5">Sample Navbar</h2>
          </Link>
        </div>

        {/* MOBILE */}
        <div className="md:hidden py-8">
          <button 
            className="py-3 rounded-md" 
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <CloseTwoToneIcon sx={{fontSize: 40}}/>
            ) : (
              <MenuTwoToneIcon sx={{fontSize: 40}}/>
            )}
          </button>
        </div>
      </div>
      {/* NAVLINKS */}
      <div className={`md:block ${ navbar ? 'block' : 'hidden' }`}>
        <ul className="md:h-auto md:flex cursor-pointer mt-8 h-screen">
          <Link href="/page-1" onClick={() => setNavbar(!navbar)}>
            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
              Page One
            </li>
          </Link>
          <Link href="/page-2" onClick={() => setNavbar(!navbar)}>
          <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
              Page Two
            </li>
          </Link>
          <Link href="/page-3" onClick={() => setNavbar(!navbar)}>
          <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
              Page Three
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;