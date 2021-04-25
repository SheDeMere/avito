import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {loadPhotos} from "../redux/action";



function App() {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(loadPhotos())
    }, [dispatch])
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
