import React from "react";
import InsureNavbar from "./FrontendMentor/InsureNavbar";
import InsureHome from "./FrontendMentor/InsureHome";
import InsureProcess from "./FrontendMentor/InsureProcess";
import Footer from "./FrontendMentor/Footer";
import UserContainer from "./Redux_comp/FetchUser/UserContainer";
import { Provider } from "react-redux";
import { store } from "./Redux_comp/Store";
// import "./App.css"

function App() {
  return (
    <div>
      {/* <InsureNavbar />
      <InsureHome />
      <InsureProcess />
      <Footer /> */}
      {/* <UserContainer /> */}
      <Provider store={store}>
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;
