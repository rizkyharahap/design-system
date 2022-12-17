import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

test("Show Button Compoennt", () => {
  render(<Button>Button Test</Button>);

  expect(screen.getByText("Button Test")).toBeInTheDocument();
});

test("Working onClick", async () => {
  const user = userEvent.setup();
  const fn = jest.fn();

  render(
    <Button data-testid="btn-test" onClick={fn}>
      Button Test
    </Button>,
  );

  const button = screen.getByTestId("btn-test");
  await user.click(button);

  expect(fn).toBeCalled();
});
