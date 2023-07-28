export default function BannerImage() {

    return (
        <>
            <section
            className="relative bg-[url('./images/crkbg.jpeg')] bg-cover bg-center bg-no-repeat"
            >
                {/* BACKGROUND */}
                <div
                    className="absolute inset-0  bg-gradient-to-r from-white"
                ></div>

                {/* ALL TEXT + STYLING */}
                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                        {/* ALL TEXT */}
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">

                        {/* BIG TITLE */}
                        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl text-left font-oswald">
                            Want to climb?

                            <strong className="block font-extrabold text-primary">
                            We'll help you.
                            </strong>
                        </h1>

                        {/* SHORT INTRO */}
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left font-dmsans">
                        An AI-based battle simulator for hit game, Cookie Run Kingdom, so that you can defeat all your enemies in Arena.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                            href="#"
                            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-c2 hover:opacity-90 focus:outline-none focus:ring active:bg-c2 sm:w-auto"
                            >
                            Get Started
                            </a>

                            <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-jet focus:outline-none focus:ring active:text-c2 sm:w-auto"
                            >
                            Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );


}