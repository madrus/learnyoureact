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
    var todo = this.props.data.map(function(bag) {
      return <Todo title={bag.title} key={bag.title}>{bag.detail}</Todo>}
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
  }

  /*
   getInitialState () {
   return {checked: false};
   }
   */

  handleChange(e) {
    this.setState({checked: e.target.checked});
  }

  render() {
    return (
      <tr>
        <td style={tdStyle}>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
        </td>
        <td style={tdStyle}>{this.props.title}</td>
        <td style={tdStyle}>{this.props.children}</td>
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
  border: "2px solid black"
};

let tdStyle = {
  border: "1px solid black"
};

