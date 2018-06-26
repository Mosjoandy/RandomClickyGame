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
    friends: friends,
    clickedCards: [],
    score: 0,
    highscore: 0    
}

    cardClick = id => {
    const newFriends = [];

    //Lose logic
    if (this.state.clickedCards.includes(id)) {
        this.setState({ score: 0, clickedCards: [] });
      
    //Game logic
    } else {
        this.state.clickedCards.push(id);
        this.state.score++;
        
        //High Score logic
        if (this.state.score > this.state.highscore) {
            this.setState({ 
            highscore: this.state.score,
            });
        };
    };

    //Shuffle card logic
    for (let i = 0; i < 12; i ++) {
        newFriends.push(this.state.friends.splice
            
            (Math.floor
                (Math.random()*this.state.friends.length),1
            )[0]
        );
        console.log(newFriends);
    };

    this.setState({ friends: newFriends });

    };

    render() {
        return(
            <div>
            <Navbar 
                score = {this.state.score}
                highscore = {this.state.highscore}
            />
            <Header />
         
            <Gamearea>
                {this.state.friends.map ( friend => (
                
                    <Card 
                    cardClick={this.cardClick}
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