import { useRoutes } from "react-router-dom";
import routes from './config/routes';
import "./styles.css";

export default function App () {
  const element = useRoutes(routes);
  return (
    <div className="App">
      {element}
    </div>
  );
}
