import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet Admin", () => {
  render(<Greet />);
  const textelement = screen.getByText(/hello/i);
  expect(textelement).toBeInTheDocument();
});
test("Great with name", () => {
  render(<Greet name="Gagan" />);
  const textelement = screen.getByText(/hello gagan/i);
  expect(textelement).toBeInTheDocument();
});
