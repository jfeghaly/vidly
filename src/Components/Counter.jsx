import React, { Component } from "react";
class Counter extends Component {
  state = {
    counters: [1, 2, 3, 4, 5],
  };
  handleCountDelete = (index) => {
    this.setState({
      counters: this.state.counters.filter((el, ind) => ind !== index),
    });
  };
  handleCountIncrement = (index) => {
    let countersClone = this.state.counters.slice();
    countersClone[index]++;
    this.setState({
      counters: this.state.counters.map((el, ind) => {
        if (index === ind) return el + 1;
        else return el;
      }),
    });
  };

  renderTableData() {
    return this.state.counters.map((el, index) => {
      const { counters } = this.state;
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{el}</td>
          <td>
            <button onClick={() => this.handleCountDelete(index)}>x</button>
            <button onClick={() => this.handleCountIncrement(index)}>+</button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="Counters">
          <tbody>
            <tr>
              <th>Index</th>
              <th>Value</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Counter;
