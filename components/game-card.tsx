import { GameCardProps } from "@/app/types";

export default function GameCard({
  competitors,
  gametime,
  venue,
  location,
  index,
}: GameCardProps) {
  return (
    <section
      key={index}
      className="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      {competitors.map((competitor, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full py-1"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={competitor.team.logo}
                alt="avatar"
              />
              <p className="mx-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                {competitor.team.displayName}{" "}
                {competitor.curatedRank.current <= 25
                  ? `#${competitor.curatedRank.current}`
                  : ""}
              </p>
            </div>
            <p className="mx-2 text-sm text-gray-800 dark:text-gray-200">
              {parseFloat(competitor.score) > 0 ? competitor.score : "TBD"}
            </p>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between w-full py-1">
        <p className="mx-2 text-xs text-gray-800 dark:text-gray-300">
          {location} - {venue}
        </p>
        <div className="flex items-center">
          <p className="mx-2 text-xs text-gray-800 dark:text-gray-300 font-semibold">
            {new Date(gametime)
              .toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "numeric",
              })
              .split(" ")
              .join("")
              .toLowerCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
