import { useRouteError } from "react-router-dom";
import CardLayout from "../layout/CardLayout";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <CardLayout title="Ooops...">
      <p>
        <i>{error.statusText}</i>
      </p>
    </CardLayout>
  );
}
