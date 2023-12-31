type Game = {
  id: string;
  uid: string;
  date: string;
  name: string;
  shortName: string;
  season: {
    year: number;
    type: number;
    slug: string;
  };
  competitions: Competition[];
  status: Status;
};

type Competition = {
  id: string;
  uid: string;
  date: string;
  attendance: number;
  type: {
    id: string;
    abbreviation: string;
  };
  timeValid: boolean;
  neutralSite: boolean;
  conferenceCompetition: boolean;
  playByPlayAvailable: boolean;
  recent: boolean;
  venue: {
    id: string;
    fullName: string;
    address: {
      city: string;
      state: string;
    };
    capacity: number;
    indoor: boolean;
  };
  competitors: Competitor[]; // Replace 'any' with the actual type of the competitors
  status: Status;
  broadcasts: {
    market: string;
    names: string[];
  }[];
  groups: {
    id: string;
    name: string;
    shortName: string;
    isConference: boolean;
  };
  format: {
    regulation: {
      periods: number;
    };
  };
  startDate: string;
  geoBroadcasts: GeoBroadcast[];
  headlines: Headline[];
};

type Status = {
  clock: number;
  displayClock: string;
  period: number;
  type: {
    id: string;
    name: string;
    state: string;
    completed: boolean;
    description: string;
    detail: string;
    shortDetail: string;
  };
};

type GeoBroadcast = {
  type: {
    id: string;
    shortName: string;
  };
  market: {
    id: string;
    type: string;
  };
  media: {
    shortName: string;
  };
  lang: string;
  region: string;
};

type Headline = {
  description: string;
  type: string;
  shortLinkText: string;
};

export type Games = {
  games: Game[];
};

export interface Competitor {
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

export type GameCardProps = {
  competitors: Competitor[];
  gametime: string;
  location: string;
  venue: string;
};
