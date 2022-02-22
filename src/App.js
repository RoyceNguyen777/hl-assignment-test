import { Route, Routes } from "react-router";
import "./App.css";
import routes from "./views/containers/_routes";

function App() {
  const routeComponents = routes.map(({ path, element, exact }) => (
    <Route path={path} element={element} exact={exact} />
  ));

  return (
    <div className="App">
      <Routes>{routeComponents}</Routes>
    </div>
  );
}

export default App;
