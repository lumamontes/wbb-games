import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/footer";

test("renders Footer component", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/lumagoesmontes@gmail.com/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Footer component with correct links", () => {
  render(<Footer />);
  const githubLink = screen.getByRole("link", { name: /GitHub/i });
  const twitterLink = screen.getByRole("link", { name: /Twitter/i });

  expect(githubLink).toHaveAttribute(
    "href",
    "https://github.com/lumamontes/wbb-games"
  );
  expect(twitterLink).toHaveAttribute("href", "https://twitter.com/monnlu1");
});
