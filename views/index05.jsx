import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className='todoBox'>
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}

let tableStyle = {
    border: '2px solid black'
};

class TodoList extends React.Component {
    render() {
        return (
            <div className='todoList'>
                <table style={tableStyle}>
                    <tbody>
                    <Todo title='Shopping'>Milk</Todo>
                    <Todo title='Hair cut'>13:00</Todo>
                    <Todo title="Learn React">15:00</Todo>
                    </tbody>
                </table>
            </div>
        );
    }
}

let tdStyle = {
    border: '1px solid black'
};

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
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
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