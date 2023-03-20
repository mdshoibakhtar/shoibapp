import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { Buy } from "./Shop";
import { store } from "./store";
import { Navigation } from "./topNav/Navigation";

function CounterApp() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Provider store={store}>
          <Routes>
            <Route path={"/"} element={<Navigate to={"/products"} />} />
            <Route path={"/products"} element={<Counter />} />
            <Route path={"/buy"} element={<Buy />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
export default CounterApp;
