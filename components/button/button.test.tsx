import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";

describe("button test", () => {
  test("should be rendered", async () => {
    render(<Button label />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should have the correct label", async () => {
    render(<Button label="labelTest" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("labelTest");
  });

  test("should be clicked", async () => {
    const mockOnClick = jest.fn();
    render(<Button label onClick={mockOnClick} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("should be disabled", async () => {
    render(<Button label disabled />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeDisabled();
  });

  test("should not be clicked when is disabled", async () => {
    const mockOnClick = jest.fn();
    render(<Button label disabled onClick={mockOnClick} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
