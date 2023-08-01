import { Link } from "react-router-dom"
import cookie from "../svg/cookie.svg"

function Navbar() {
    return (
      <nav>
        <header className="bg-white opacity-100">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* LEFT SIDE */}
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <Link to ="/home">
                <div className="block">
                  <span className="sr-only">Home</span>

                  {/* LOGO */}
                  <img alt="cookie logo" src={cookie} style={{width: 50, height: 50, opacity: 1}}/>
                  
                </div>
                </Link>
              </div>
        
              {/* RIGHT SIDE */}
              <div className="md:flex md:items-center md:gap-12 font-dmsans text-black">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                  {/* battler */}
                    <li>
                      <Link to="/battler">
                      <div className="transition hover:text-gray-500/75">
                        Battler
                      </div>
                      </Link>
                    </li>
                  {/* about us */}
                    <li>
                      <Link to ="/about">
                      <div className="transition hover:text-gray-500/75">
                        About
                      </div>
                      </Link>
                    </li>

                    {/* test*/}
                    <li>
                      <Link to ="/test">
                      <div className="transition hover:text-gray-500/75">
                        Test
                      </div>
                      </Link>
                    </li>
        
                  </ul>
                </nav>
        
              </div>
            </div>
          </div>
        </header>
      </nav>
    );
}

export default Navbar;