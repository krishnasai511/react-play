const { render } = require("@testing-library/react");

import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //   console.log("header--->", header);
  const logo = header.getByTestId("logo");
  console.log(logo.src);
  expect(logo.src).toBe(
    "https://yt3.googleusercontent.com/ytc/AIdro_khDPXdl1ezbGnSrhNWw09nCQDdpcWXF8QnV-1xCcbYng=s900-c-k-c0x00ffffff-no-rj"
  );
});
