import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
