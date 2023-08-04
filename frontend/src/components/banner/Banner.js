import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="bg-background">
    {/* lg:flex lg:items-center lg:h-screen */}
  {/* ALL */}
  <div className="grid gap-4 grid-cols-2 mx-auto max-w-screen-xl px-4 py-32 lg:h-5/6 border border-blue-700">
    {/* TEXT */}
    <div className="mx-auto max-w-xl text-left border border-red-600">

      {/* BIG TITLE */}
      <h1 className="text-3xl font-semibold font-oswald sm:text-6xl text-black">
        Want to climb?
        <br />
        <strong className="sm:text-6xl text-primary sm:block">
          We'll help you.
        </strong>
      </h1>

      {/* SHORT INTRO */}
      <p className="mt-4 sm:text-xl/relaxed text-black font-dmsans">
        An AI-based battle simulator for hit game, Cookie Run Kingdom, so that you can defeat all your enemies in Arena.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 font-dmsans">
        <Link to ="/battle">
          <div className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow  hover:opacity-90 focus:outline-none focus:ring active:bg-c2 sm:w-auto">
          Get Started
          </div>
        </Link>
        <Link to="/about">
          <div className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:opacity-90 focus:outline-none focus:ring active:text-red-500 sm:w-auto">
          Learn More
          </div>
        </Link>
      </div>
    </div>
    {/* IMAGE */}
    {/* <div className="border border-green-700 relative bg-[url('./images/crkbg.jpeg')] bg-cover bg-center bg-no-repeat"> 
      <div
          className="absolute inset-0  bg-gradient-to-r from-white"
      ></div>
    </div> */}
  </div>
</section>

  );
}

export default Banner;