import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data={this.props.data}/>
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    var todo = this.props.data.map(function (bag) {
        return <Todo title={bag.title} key={bag.title}>{bag.detail}</Todo>
      }
    );
    return (
      <div className="todoList">
        <table style={style}>
          <tbody>
          {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

// I am not sure getInitialState is used as it should be used
// The two approaches are not interchangeable.
// You should initialize state in the constructor when using ES6 classes,
// and define the getInitialState method when using React.createClass.
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /*
   getInitialState () {
   return {checked: false};
   }
   */

  // Unable to get property 'setState' of undefined or null reference
  handleChange(e) {
    this.setState({
      checked: e.target.checked
    });
  }

  render() {
    var currentStyle = this.state.checked
      ? style.checkedTodo
      : style.notCheckedTodo;
    return (
      <tr style={currentStyle}>
        <td style={style.tableContent}>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
        </td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  render() {
    return (
      <div className='todoForm'>
        I am a TodoForm.
      </div>
    );
  }
}


let style = {
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
  tableContent: {
    border: "1px solid black"
  }
};

