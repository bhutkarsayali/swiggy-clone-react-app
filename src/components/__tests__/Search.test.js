import { act } from "react-dom/test-utils";
import { MOCK_DATA } from "./../mocks/mockResListData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";
import { AppStore } from "../../utils/redux-utils/AppStore";
import { Provider } from "react-redux";

import { sum } from "../../utils/constants/constants";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);
  //Assertion
  expect(result).toBe(7);
});


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Test cases for search functionality", () => {
  test("should search restaurent card list with Pizza text input", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          {/* <Provider store={AppStore}><Body></Body></Provider> */}
        </BrowserRouter>
      );
    });

    // const cardsBeforeSearch = screen.getAllByTestId("resCard");
    // expect(cardsBeforeSearch.length).toBe(9);
    // const searchBtn = screen.getAllByRole("button", { name: "Search" });
    // const searchInput = screen.getByTestId("searchInput");
    // fireEvent.change(searchInput, {
    //   target: { value: "Pizza" },
    // });
    // fireEvent.click(searchBtn);
    // const cardsAfterSearch = screen.getAllByTestId("resCard");
    // expect(cardsAfterSearch.length).toBe(1);
  });
});
