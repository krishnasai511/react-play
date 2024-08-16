const { render, waitFor, fireEvent } = require("@testing-library/react");

import { Provider } from "react-redux";
import Body from "../Body";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTRAUNT_MOCK_DATA } from "../../mocks/data";
import RestroMenu from "../RestroMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTRAUNT_MOCK_DATA);
    },
  });
});

test("search results on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("res-list")));

  const resList = body.getByTestId("res-list");

  //toBeInTheDocument --> also can be used
  expect(resList.children.length).toBe(8);

  //   console.log("this one--->", resList.children);
  //   console.log(body);
});

test("generate search result from input box", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("res-list")));

  const input = body.getByTestId("input");

  fireEvent.change(input, {
    target: {
      value: "iyer",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  //   console.log(resList.children);
  expect(resList.children.length).toBe(1);
});
