import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GameCard from "@/components/game-card";

describe("GameCard Component", () => {
  const gameCardProps = {
    competitors: [
      {
        id: "some-id",
        uid: "some-uid",
        type: "some-type",
        order: 0,
        homeAway: "home",
        winner: false,
        team: {
          id: "team-id",
          uid: "team-uid",
          location: "team-location",
          name: "team-name",
          abbreviation: "team-abbreviation",
          displayName: "Team Name",
          shortDisplayName: "TName",
          color: "team-color",
          alternateColor: "team-alternateColor",
          isActive: true,
          venue: {
            id: "venue-id",
          },
          links: [
            {
              rel: ["self"],
              href: "http://example.com",
              text: "example",
              isExternal: false,
              isPremium: false,
            },
          ],
          logo: "logo-url",
          conferenceId: "conference-id",
        },
        score: "1",
        linescores: [
          {
            value: 1,
          },
        ],
        statistics: [],
        leaders: [],
        curatedRank: {
          current: 10,
        },
        records: [],
      },
    ],
    gametime: new Date().toISOString(),
    venue: "Venue Name",
    location: "Location Name",
    index: 0,
    locale: "en-US",
  };
  beforeEach(() => {
    render(<GameCard {...gameCardProps} />);
  });

  test("renders team logos", () => {
    gameCardProps.competitors.forEach((competitor, index) => {
      const logo = screen.getByAltText("avatar");
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute("src", competitor.team.logo);
    });
  });

  test("renders team names and ranks", () => {
    gameCardProps.competitors.forEach((competitor, index) => {
      const teamNameAndRank = screen.getByText(
        new RegExp(
          `${competitor.team.displayName} #${competitor.curatedRank.current}`,
          "i"
        )
      );
      expect(teamNameAndRank).toBeInTheDocument();
    });
  });

  test("renders scores", () => {
    gameCardProps.competitors.forEach((competitor, index) => {
      const score = screen.getByText(competitor.score);
      expect(score).toBeInTheDocument();
    });
  });

  test("renders location and venue", () => {
    const locationAndVenue = screen.getByText(
      `${gameCardProps.location} - ${gameCardProps.venue}`
    );
    expect(locationAndVenue).toBeInTheDocument();
  });

  test("renders TimeDisplay components", () => {
    const timeDisplays = screen.getAllByTestId("time-display");
    expect(timeDisplays.length).toBe(2);
  });

  test("renders rank when rank is less than or equal to 25", () => {
    gameCardProps.competitors[0].curatedRank.current = 25;

    render(<GameCard {...gameCardProps} />);

    const rank = screen.getByText(/#25/i);
    expect(rank).toBeInTheDocument();
  });

  test("does not render rank when rank is greater than 25", () => {
    gameCardProps.competitors[0].curatedRank.current = 26;

    render(<GameCard {...gameCardProps} />);

    const rank = screen.queryByText(/#26/i);
    expect(rank).not.toBeInTheDocument();
  });

  test('renders "TBD" when score is not greater than 0', () => {
    gameCardProps.competitors[0].score = "0";

    render(<GameCard {...gameCardProps} />);

    const scores = screen.getAllByTestId("score");
    expect(scores.some((score) => score.textContent === "TBD")).toBeTruthy();
  });
  test("renders score when score is greater than 0", () => {
    gameCardProps.competitors[0].score = "1";

    render(<GameCard {...gameCardProps} />);

    const scores = screen.getAllByTestId("score");
    expect(scores.some((score) => score.textContent === "1")).toBeTruthy();
  });
});
