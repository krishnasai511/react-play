const { render, waitFor, fireEvent } = require("@testing-library/react");

import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import RestroMenu from "../RestroMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("checking cart count by adding item from menu", async () => {
  const restroMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestroMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(restroMenu.getByTestId("menu-list")));

  const btnList = restroMenu.getAllByTestId("btn-add");

  fireEvent.click(btnList[0]);
  fireEvent.click(btnList[0]);
  //toBeInTheDocument --> also can be used
  //   expect(btnList).toBe(8);
  const cart = restroMenu.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 5 items");
});
