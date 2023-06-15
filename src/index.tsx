import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";

class Square extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render(): ReactNode {
    return (
        <button type="button" className="square" onClick={() => this.setState({value: 'X'})}>
            {this.state.value}
        </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i: number): ReactNode {
    return (
      <Square value={i} />
    );
  }

  render(): ReactNode {
    const status = "Next player X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class Game extends React.Component {
  render(): ReactNode {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div> {/* statius */}</div>
          <ol> {/* TODO */} </ol>
        </div>
      </div>
    );
  }
}

const element = document.getElementById("root");
const root = createRoot(element!);
root.render(<Game />);
