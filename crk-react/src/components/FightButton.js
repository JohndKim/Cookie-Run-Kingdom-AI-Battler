export default function FightButton(){
    return(
    <div>
        <div className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
          <span
            className="absolute inset-0 border border-red-500 group-active:border-red-500"
          ></span>
          <span
            className="block border border-red-500 bg-red-500 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            Battle
          </span>
        </div>
    </div>
    );
}