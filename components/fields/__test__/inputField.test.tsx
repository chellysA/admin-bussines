import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputField from "../InputField";

describe("Input field test", () => {
  test("should be rendered", async () => {
    render(<InputField id="" />);
    const buttonElement = screen.getByRole("textbox");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should have the correct id", async () => {
    render(<InputField id="testId" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.id).toBe("testId");
  });

  test("should have the correct value", async () => {
    const handleChange = (e: string) => {
      e;
    };
    render(<InputField id="" value="testValue" onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("value", "testValue");
  });

  test("should have the correct label associated with the input", async () => {
    render(
      <>
        <label htmlFor="testId"></label>
        <InputField id="testId" label="testLabel" />
      </>,
    );
    const inputElement = screen.getByLabelText("testLabel");
    expect(inputElement).toBeInTheDocument();
  });

  test("should be enable to type", async () => {
    render(<InputField id="" />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "testTyping" } });
    expect(inputElement).toHaveValue("testTyping");
  });

  test("should be disabled", async () => {
    render(<InputField id="" disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  test("should appear a p element if error is valid", async () => {
    render(
      <>
        <InputField id="" error="testError" />
        <p>testError</p>
      </>,
    );
    const paragraphElement = screen.getByText("testError");
    expect(paragraphElement).toBeInTheDocument();
  });
});
