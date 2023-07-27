import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="bg-c4">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-semibold font-marcellus sm:text-6xl text-black">
        Want to climb?
        <br />
        <strong className="sm:text-6xl font-marcellus text-primary sm:block">
          We'll help you.
        </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-black font-dmsans">
        An AI-based battle simulator for hit game, Cookie Run Kingdom, so that you can defeat all your enemies in Arena.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4 font-dmsans">
        <Link to ="/battler">
          <div className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-c2 hover:opacity-90 focus:outline-none focus:ring active:bg-c2 sm:w-auto">
          Get Started
          </div>
        </Link>
        <Link to="/about">
          <div className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-jet hover:opacity-90 focus:outline-none focus:ring active:text-red-500 sm:w-auto">
          Learn More
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>

  );
}

export default Banner;