import React from "react";
import Headerbar from "./components/headerbar/Headerbar";
import Ordersbar from "./components/ordersBar/OrdersBar";
import "./app.css"
import './model/dataExtract.js'

function App() {
  return (
    <div className="conteiner">
      <Headerbar/>
      <Ordersbar/>
      {/* <InfoContent/>
      <Footer/> */}
    </div>
  );
}

export default App;
