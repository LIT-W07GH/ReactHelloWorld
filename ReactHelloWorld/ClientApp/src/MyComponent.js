import React from 'react';
import MyOtherComponent from './MyOtherComponent';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from React!</h1>
                <MyOtherComponent />
            </div>
        );
    }
}

export default MyComponent;

//create a asp.net core web application and choose the React template
//Once it's up, delete all files within the src directory except for the index.js file.
//Delete everything that's in the src directory, and then create the following two
//components, each in separate files - MyFirstComponent and MySecondComponent

//MySecondComponent should return a p tag with some text in it, and MyFirstComponent
//should return a div that has an h1 in it, with <MySecondComponent /> beneath it

//Finally, in index.js, import react, react-dom and MyFirstComponent and render
//MyFirstComponent to the browser