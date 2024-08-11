import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <p>Error Status: {err.status}</p>
      <p>Error Msg: {err.data}</p>
    </div>
  );
};

export default Error;
