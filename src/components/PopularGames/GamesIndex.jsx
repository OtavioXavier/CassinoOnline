import GamesIcon from "./GamesIcons";
import Games from "./Games";

export default function GamesIndex() {
  return (
    <div>
      <fieldset className="border-4 rounded-xl border-orange-300 mt-8 mb-40 flex flex-col gap-x-3 gap-y-7 items-center">
        <legend className="mx-auto md:px-4 text-orange-300 text-base mb-8">
          <GamesIcon />
        </legend>
        <Games />
        <div>
         <span className=""/>
         <span className=""/>
        </div>
      </fieldset>
    </div>
  );
}
