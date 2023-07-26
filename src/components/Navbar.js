import { Link } from "react-router-dom"
import cookie from "../svg/cookie.svg"

function Navbar() {
    return (
        <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link to ="/home">
              <div className="block">
                <span className="sr-only">Home</span>
                <img alt="cookie logo" src={cookie} style={{width: 50, height: 50}}/>
                
              </div>
              </Link>
            </div>
      
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                {/* battler */}
                  <li>
                    <Link to="/battler">
                    <div className="text-secondary transition hover:text-gray-500/75">
                      Battler
                    </div>
                    </Link>
                  </li>
                {/* about us */}
                  <li>
                    <Link to ="/about">
                    <div className="text-secondary transition hover:text-gray-500/75">
                      About
                    </div>
                    </Link>
                  </li>
      
                </ul>
              </nav>
      
            </div>
          </div>
        </div>
      </header>
    );
}

export default Navbar;