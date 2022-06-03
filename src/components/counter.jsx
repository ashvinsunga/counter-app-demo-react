import React, { Component } from "react";

class Counter extends Component {
  //   Needed to comment this out since it affects accessing the 'this' keyword of props.value
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // Arrow function version of this function is used since this will not reset the bind to 'this' of Component Class
  //   handleIncrement() {
  //     this.setState({ count: this.state.count + 1 });
  //   }

  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div className='row'>
        <div className='col-1'>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className='col'>
          {" "}
          <button
            onClick={() => onIncrement(counter)}
            className='btn btn-secondary btn-sm m-2'
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className='btn btn-secondary btn-sm m-2'
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className='btn btn-danger btn-sm '
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
