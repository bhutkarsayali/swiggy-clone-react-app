import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe block is just a naming convention used for grouping of test cases, you can have multiple/nested describe blocks
//test and "it" both are same
describe("Contact us page test cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  afterAll(() => {
    console.log("After All");
  });
  afterEach(() => {
    console.log("After Each");
  });
  it("Should load contact Us component (to check whether the component is loaded inside the dom or not)", () => {
    // Rendering
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getAllByRole("button");
    expect(button[0]).toBeInTheDocument();
  });

  test("Should load input Your message... anywhere on screen inside contact component", () => {
    render(<Contact />);
    const placeHoloderText = screen.getByPlaceholderText("Your message...");
    expect(placeHoloderText).toBeInTheDocument();
  });

  test("Should load two input boxes inside contact component", () => {
    render(<Contact />);
    const inputBoxex = screen.getAllByRole("textbox");
    //  this returns react element/object/virtual dom object/react fibre node inputBoxex.entries. jsx over command line
    console.log(inputBoxex);
    expect(inputBoxex.length).toBe(3);
  });
});
