interface Competitor {
  id: string;
  uid: string;
  type: string;
  order: number;
  homeAway: string;
  winner: boolean;
  team: {
    id: string;
    uid: string;
    location: string;
    name: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    color: string;
    alternateColor: string;
    isActive: boolean;
    venue: {
      id: string;
    };
    links: {
      rel: string[];
      href: string;
      text: string;
      isExternal: boolean;
      isPremium: boolean;
    }[];
    logo: string;
    conferenceId: string;
  };
  score: string;
  linescores: {
    value: number;
  }[];
  statistics: {
    name: string;
    abbreviation: string;
    displayValue: string;
  }[];
  leaders: {
    name: string;
    displayName: string;
    shortDisplayName: string;
    abbreviation: string;
    leaders: {
      displayValue: string;
      value: number;
      athlete: {
        id: string;
        fullName: string;
        displayName: string;
        shortName: string;
        links: {
          rel: string[];
          href: string;
        }[];
        headshot: string;
        jersey: string;
        position: {
          abbreviation: string;
        };
        team: {
          id: string;
        };
        active: boolean;
      };
      team: {
        id: string;
      };
    }[];
  }[];
  curatedRank: {
    current: number;
  };
  records: {
    name: string;
    abbreviation?: string;
    type: string;
    summary: string;
  }[];
}

type GameCardProps = {
  competitors: Competitor[];
  gametime: string;
  location: string;
  venue: string;
};

export type Game = {
  games: GameCardProps[];
};

export default function GameCard({
  competitors,
  gametime,
  venue,
  location,
}: GameCardProps) {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      {competitors.map((competitor) => (
        <div className="flex items-center justify-between w-full py-1">
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
