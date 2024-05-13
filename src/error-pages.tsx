import { useRouteError } from "react-router-dom";

type Error = {
  statusText: string;
  statusCode: number;
  message: string;
};

export function ErrorPage() {
  const error: Error = useRouteError() as unknown as Error;
  return (
    <div id="error-page">
      <h1>Page Not Found Error</h1>
    </div>
  );
}
