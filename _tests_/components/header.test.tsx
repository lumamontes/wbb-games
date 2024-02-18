import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "@/components/header";

test("renders Header component", () => {
  render(<Header />);
  const h1Element = screen.getByRole("heading", { level: 1 });
  expect(h1Element).toBeInTheDocument();

  const titleElement = screen.getByText(/Today's Games 🏀⛹🏽‍♀️/i);
  expect(titleElement).toBeInTheDocument();

  const dateElement = screen.getByText(
    new RegExp(
      new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      "i"
    )
  );
  expect(dateElement).toBeInTheDocument();
});
