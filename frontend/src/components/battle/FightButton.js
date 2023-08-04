export default function FightButton(){
    return(
    <div>
        <div className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
          <span
            className="absolute inset-0 border border-accent group-active:border-accent"
          ></span>
          <span
            className="block border border-accent bg-accent px-12 py-3 transition-transform active:border-accent active:bg-accent group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            Battle
          </span>
        </div>
    </div>
    );
}