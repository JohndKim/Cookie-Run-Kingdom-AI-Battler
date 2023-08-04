import CookieList from './CookieList'
// import Dropdown from './Dropdown'
// import CookiesList from './CookiesList'

export default function BattleInputs() {
    return (
        <section className="">
        {/* entire 5, 5 team layout*/}
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
            >

            {/* FIRST TEAM LAYOUT */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <CookieList/>
                    <CookieList/>
                    <CookieList/>
                    <CookieList/>
                    <CookieList/>


                </div>

            {/* SECOND TEAM LAYOUT */}

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <CookieList/>
                    <CookieList/>
                    <CookieList/>
                    <CookieList/>
                    <CookieList/>
                </div>
            </div>
        </div>
        </section>
    );
}