import { useRoutes } from "react-router-dom";
import routes from './config/routes';

export default function App () {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <div className="text-3xl font-bold underline">ddddddddd</div>
      {element}
    </div>
  );
}
