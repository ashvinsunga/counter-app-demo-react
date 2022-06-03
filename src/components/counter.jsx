import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
  };

  //   Needed to comment this out since it affects accessing the 'this' keyword of props.value
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // Arrow function version of this function is used since this will not reset the bind to 'this' of Component Class
  //   handleIncrement() {
  //     this.setState({ count: this.state.count + 1 });
  //   }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
