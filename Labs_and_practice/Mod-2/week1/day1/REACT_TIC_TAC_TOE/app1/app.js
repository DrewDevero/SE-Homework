const GREETING = "hello tic tac toe";
const NAME = "Drew";
/* ReactDOM.render(
    <div>
    <h1>{GREETING}</h1>
    <h2>{`This is ${NAME}`}</h2>
    </div>,
    document.getElementById("container")    
) */

class Header extends React.Component {
    render() {
        return (
         <h1>React Tic Tac Toe</h1>
        )
    }
};

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        players : "X, O",
        playerX : "X",
        playerO : "O"
        }
    }   
    render() {
        return (
         <div class={this.state.players}>
            <h2>Player {this.state.playerX}</h2>
            <h3>Wins: </h3>
            <h2>player {this.state.playerO}</h2>
            <h3>Wins: </h3>
         </div>
        )
    }
}

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
        )
    }
}

class Square extends React.Component {
    render() {
        return (
            <div>
                <h4>square</h4>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Player />
                <Board />
            </div>
        )
    }
};

ReactDOM.render(
    <App />,
    document.getElementById("container")
);