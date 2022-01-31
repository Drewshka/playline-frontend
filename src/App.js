import "./App.scss";
import React from "react";
import { Header } from "./components/Header/Header";
import MainCard from "./components/MainCard/MainCard";
import { Footer } from "./components/Footer/Footer";
// import data from "./data/players.json";
// import { PlayerCard } from "./components/PlayerCard/PlayerCard";
// import { Progress } from "./components/Progress/Progress";
// import { CardHeader } from "./components/CardHeader/CardHeader";
// import { Buttons } from "./components/Buttons/Buttons";
// import { Downloads } from "./components/Downloads/Downloads";

// import PlayerCard from "./components/PlayerCard";
// import axios from "axios";
// import Main from "./components/Main";

// import Spinner from "./components/Spinner/Spinner";

// const API =
//   "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json";

class App extends React.Component {
  // state = {
  //   players: data,
  // };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     data: [],
  //     players: [],
  //   };
  // }

  // state = {
  //   loading: true,
  //   people: [],
  // };

  // async componentDidMount() {
  //   //CORS issue
  //   //used proxyurl to solve it
  //   // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   // site that doesn’t send Access-Control-*
  //   // const url =
  //   //   "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json";

  //   // to use it locally
  //   const url = "./data/playline-test.json";
  //   const response = await fetch(url);

  //   // const response = await fetch(proxyurl + url);
  //   const data = await response.json();
  //   console.log(data);
  //   this.setState({ people: data.players, loading: false });
  // }

  // componentDidMount() {
  //   axios
  //     .get({
  //       method: "get",
  //       url: "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json",
  //       withCredentials: false,
  //       responseType: "json",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     })
  //     .then(({ response }) => {
  //       console.log("Data: ", response.data);
  //       this.setState({
  //         data: JSON.parse(response.data.players),
  //         loading: false,
  //       });
  //     });
  // }

  // componentDidMount() {
  //   axios.get(`${API}`).then((response) => {
  //     console.log("Data: ", response);
  //     this.setState({
  //       data: JSON.parse(response.data),
  //       loading: false,
  //     });
  //   });
  // }

  render() {
    // console.log(this.state.players.players);
    // console.log(this.state.data);
    // console.log(this.state.people);

    // if (this.state.loading) return <Spinner />;

    // const players = this.state.players.players;
    return (
      <div className="App">
        <Header />
        <MainCard />
        <Footer />
        {/* <Progress />
        <CardHeader />
        <section className="playerCards">
          {players &&
            players.map((player, i) => {
              return (
                <PlayerCard
                  key={i}
                  name={player.last_name}
                  points={player.points}
                />
              );
            })}
        </section>
        <Buttons />
        <Downloads /> */}
      </div>
    );
  }
}

export default App;
