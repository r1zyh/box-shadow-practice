import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../pages/main/main";
import { Stopwatch } from "../../pages/stopwatch/stopwatch";
import { AppRoute } from "../../util/const";


export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Alarm} element={<App />} />
        <Route path={AppRoute.Stopwatch} element={<Stopwatch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
