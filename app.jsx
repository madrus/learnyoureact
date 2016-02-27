import React from 'react';
import ReactDom from 'react-dom';

const name = 'Andre';

const list = [
    'foo',
    'bar',
    'baz'
];

// create a new component
export default class JumboList extends React.Component {
    render() {
        // return JSX element
        return <div className="jumbotron">
                    This is my Jumbotron
                    <p style={ { color: 'blue' } }>
                        This is my happy content, { this.props.someName }
                    </p>

                    { this.props.items.map(item => {
                        return <p> { item } </p>;
                    }) }

                    { this.props.someJSX }
                </div>
    }   
}

// here we create CSS with JS notation
// meaning objects and camel case notation
// like fontSize istead of font-size
// otherwise put it in quotes 'font-size'
const titleStyle = {
    color: 'red'
};

const content = (
    <div>
        <h1 style={ titleStyle }>Hello, { name.toUpperCase() }!</h1>
        <JumboList items={list} someName="Andre" someJSX={ <h2> SOME JSX </h2> }/> 
    </div>
);

ReactDom.render(
  content,
  document.getElementById('app')
);
