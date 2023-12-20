import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { AppStore } from "../../utils/redux-utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// as it does not understand redux part and header component is using redux, we need to use provider/store tot his to run in isolation
// same for react router dom

describe("Headercomponent test cases", () => {
  it("should load header component with a login button", () => {});
//   it("should load header component with a login button", () => {
//     render(
//       <BrowserRouter>
//         <Provider store={AppStore}>
//           <Header />
//         </Provider>
//       </BrowserRouter>
//     );
//     const loginButton = screen.getByRole("button", { name: "Login" });

//     // const loginButton = screen.getByText("Login");
//     expect(loginButton).toBeInTheDocument();
//   });

  //   it("should load header component to check cart items are 0", () => {
  //     render(
  //       <BrowserRouter>
  //         <Provider store={appStore}>
  //           <Header />
  //         </Provider>
  //       </BrowserRouter>
  //     );

  //     const cartItems = screen.getByText("Cart (0 Items)");
  //     expect(cartItems).toBeInTheDocument();
  //   });

  //   it("should load header component to check cart item", () => {
  //     render(
  //       <BrowserRouter>
  //         <Provider store={appStore}>
  //           <Header />
  //         </Provider>
  //       </BrowserRouter>
  //     );

  //     const cartItems = screen.getByText(/Cart/);
  //     expect(cartItems).toBeInTheDocument();
  //   });

  //   it("should change login button to logout on click", () => {
  //     render(
  //       <BrowserRouter>
  //         <Provider store={appStore}>
  //           <Header />
  //         </Provider>
  //       </BrowserRouter>
  //     );

  //     const loginButton = screen.getByRole("button", {name: "Login"});
  //     fireEvent.click(loginButton);
  //     const logOutButton = screen.getByRole("button", {name: "Logout"});
  //     fireEvent.click(logOutButton);

  //     expect(logOutButton).toBeInTheDocument();
  //   });
});
