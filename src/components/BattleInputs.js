import CookiesList from './CookiesList'
import { AddPicture } from './AddPicture'

export default function BattleInputs() {
    return (
        <section>
        {/*first team layout*/}
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
            >
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <AddPicture />

                <h2 className="mt-2 font-bold">Add Cookie</h2>
                </a>


                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <AddPicture />

                <h2 className="mt-2 font-bold">Add Cookie</h2>
                </a>


                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <AddPicture />

                <h2 className="mt-2 font-bold">Add Cookie</h2>
                </a>


                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <AddPicture />

                <h2 className="mt-2 font-bold">Add Cookie</h2>
                </a>


                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <AddPicture />

                <h2 className="mt-2 font-bold">Add Cookie</h2>
                </a>

            </div>

            {/* Second team layout*/}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <AddPicture />

                <h2 className="mt-2 font-bold">Add Cookie</h2>
                </a>


                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <AddPicture />

                <h2 className="mt-2 font-bold">Add Cookie</h2>
                </a>


                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <div className = "flex justify-center">
                <AddPicture />

                </div>
                <h2 className="mt-2 font-bold">Add Cookie</h2>
                </a>


                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <AddPicture />

                <h2 className="mt-2 font-bold">Add Cookie</h2>
                </a>


                <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/battler"
                >
                <AddPicture />

                <div className="mt-2 font-bold">Add Cookie</div>
                </a>


                </div>
            </div>
        </div>
        </section>
    );
}