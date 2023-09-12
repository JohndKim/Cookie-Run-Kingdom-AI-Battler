import { Link } from "react-router-dom";
import crunchy from "../../images/crunchychipcookie.png"
import React from "react";
import Typed from 'typed.js';

function Banner() {

  const el = React.useRef(null);
  const desc = React.useRef(null);

  React.useEffect(() => {
    const typed_title = new Typed(el.current, {
      strings: ['<i>Curious about your team comp?</i>', 'We gotcha covered.'],
      typeSpeed: 50,
      startDelay: 1500,
      backSpeed: 10,
      backDelay: 3000,
      showCursor: false,

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed_title.destroy();
    };
  }, []);

  React.useEffect(() => {
    const typed_desc = new Typed(desc.current, {
      strings: ['An AI-based battle simulator for the hit game, Cookie Run Kingdom, so that you can defeat all your enemies in the Arena.'],
      typeSpeed: 70,
      startDelay: 9000,
      showCursor: false,
      autoInsertCss: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed_desc.destroy();
    };
  }, []);


  return (
    <section className="bg-background">
      {/* lg:flex lg:items-center lg:h-screen */}
      {/* ALL */}
      <div className="grid gap-4 grid-cols-2 mx-auto max-w-screen-xl px-4 py-32 lg:h-5/6">
        {/* LEFT TEXT */}
        <div className="mx-auto max-w-xl text-left">

          {/* BIG TITLE */}
          <h1 className="text-3xl font-semibold font-oswald sm:text-6xl text-black">
            Oh, you're a Cookie Run Kingdom Player.
            {/* <br /> */}
            {/* <br /> */}
            <p className="text-sm sm:text-xl lg:text-3xl ">_____________________________________________</p>
            <strong className="my-5 sm:text-6xl text-primary sm:block">
              {/* We'll help you. */}

              <span ref={el} />
            </strong>
          </h1>

          {/* SHORT INTRO */}
          <p className="mt-4 sm:text-xl/relaxed text-black font-dmsans">
            {/* An AI-based battle simulator for hit game, Cookie Run Kingdom, so that you can defeat all your enemies in Arena. */}
            <span ref={desc} />
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 font-dmsans">
            <Link to="/battle">
              <div className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow  hover:opacity-90 focus:outline-none focus:ring active:bg-c2 sm:w-auto">
                Get Started
              </div>
            </Link>
            <Link to="/about">
              <div className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:opacity-90  focus:outline-none focus:ring sm:w-auto">
                Learn More
              </div>
            </Link>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="mx-auto max-w-xl text-left">
          {/* GIF */}
          <div className="place-self-center" style={{width: 300, height: 300, opacity: 1}}>
            <img src={crunchy}/>
          </div>
        

          {/* SHORT INTRO */}
          <p className="mt-4 sm:text-xl/relaxed text-black font-dmsans">

            <span ref={desc} />
          </p>
          

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