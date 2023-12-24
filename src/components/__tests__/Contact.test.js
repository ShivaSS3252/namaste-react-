import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load  button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });
  test("should load  input name inside contact us component", () => {
    render(<Contact />);
    const inputname = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputname).toBeInTheDocument();
  });
  test("should load 2  input boxes on the contact us component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
