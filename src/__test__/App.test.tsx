import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";

test("Show App Component", () => {
  render(<App />);

  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});

test("Working Counter", async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(screen.getByText("count is 0")).toBeInTheDocument();

  const button = screen.getByText(/count is \d/);

  await user.click(button);
  expect(screen.getByText("count is 1")).toBeInTheDocument();

  await user.click(button);
  expect(screen.getByText("count is 2")).toBeInTheDocument();

  await user.click(button);
  expect(screen.getByText("count is 3")).toBeInTheDocument();
});
