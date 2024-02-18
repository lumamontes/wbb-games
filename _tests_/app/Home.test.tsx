// __tests__/Home.test.js
import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import { GameCardProps } from "@/app/types";
import ReactDOMServer from "react-dom/server";

// Mocking the necessary components and modules
jest.mock("@/components/header", () => () => <div>Header Mock</div>);
jest.mock("@/components/footer", () => () => <div>Footer Mock</div>);
jest.mock(
  "@/components/game-card",
  () =>
    ({ index: number, gametime }: GameCardProps) =>
      <div>Game Card Mock - {gametime}</div>
);

describe("Home component", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((url) =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            games: [
              {
                date: "2023-04-01",
                competitions: [
                  {
                    venue: {
                      fullName: "Venue Name",
                      address: { city: "City", state: "State" },
                    },
                    competitors: [],
                  },
                ],
              },
            ],
          }),
      })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly with data", async () => {
    const ui = await Home();
    render(ui);
    await waitFor(() =>
      expect(
        screen.getAllByRole("heading", { level: 3 })[0]
      ).toBeInTheDocument()
    );
    expect(screen.getByText("Game Card Mock - 2023-04-01")).toBeInTheDocument();
  });

  it('renders "No games today!" when no games are available', async () => {
    global.fetch = jest.fn().mockImplementation((url) =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ games: [] }),
      })
    );
    const ui = await Home();
    render(ui);
    await waitFor(() =>
      expect(screen.getByText("No games today!")).toBeInTheDocument()
    );
  });

  it("throws an error when fetch fails", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );
    await expect(Home()).rejects.toThrow("Failed to fetch data");
  });
});
