import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import "animate.css"
import Header from "./CarRental/Header";
import Footer from "./CarRental/Footer";
import Routing from "./CarRental/Routing";
import { createContext, useState } from "react";
// import MobileContainer from "./Redux/Store/MobileContainer";
// import { Provider } from "react-redux";
// import { store } from "./Redux/Store/Store";
export const loginStatus = createContext()


function App() {

  const [login , setLogin] =useState(false)
  return (
    <div className="App container-fluid p-0">
        <loginStatus.Provider value={[login,setLogin]}>
        <Header/>
        <Routing/>
        <Footer/>
       </loginStatus.Provider> 
       {/* <Provider store={store}>
       <MobileContainer/>
       </Provider> */}
    </div>
  );
}

export default App;
