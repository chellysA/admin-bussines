import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(
    <Button label="asdsa" className="px-8" title="asdasdsa" type="submit" />,
  );
});
