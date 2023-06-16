import React from "react";
import { useRouteError } from "react-router-dom";

function NotFoundPage() {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-3 text-xl">Sorry, an unexpected error has occured</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
}

export default NotFoundPage;
