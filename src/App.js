import {
  Routes,
  Route,

} from "react-router-dom";

import BuySection from "./page/BuySection";
import Header from "./page/Header";
import MainTech from "./page/MainTech";

function App() {
  return (
    <>
         <Routes>
          <Route path="/" element={ <Header />}></Route>
          <Route path="/Tech" element={ <MainTech />}></Route>
          <Route path="/Card" element={  <BuySection />}></Route>
        </Routes>
  


    </>
  );
}

export default App;
