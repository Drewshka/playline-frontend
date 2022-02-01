import "./App.scss";
import React from "react";
import { Header } from "./components/Header/Header";
import MainCard from "./components/MainCard/MainCard";
import { Footer } from "./components/Footer/Footer";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainCard />
        <Footer />
      </div>
    );
  }
}

export default App;
