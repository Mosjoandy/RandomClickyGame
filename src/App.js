import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gamearea from "./components/Gamearea";
import Footer from "./components/Footer";
import Card from "./components/Card";
import friends from "./friends.json";

class App extends Component {

state = {
    friends: friends
    
}

    render() {
        return(
            <div>
            <Navbar />
            <Header />
         
            <Gamearea>
                {this.state.friends.map ( friend => (
                
                    <Card 
                    id={friend.id} 
                    key={friend.id}
                    img={friend.image}/>
                
                ))};
            </Gamearea>
            <Footer />
            </div>
        )
    }
}

export default App;