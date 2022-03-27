import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <div className="question">
                <h2>How React Works? Q1</h2>
                <hr />
                <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It’s ‘V’ in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
                <p>
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                </p>
            </div>
            <div className="question">
                <h2>What are the differences between props and state ? Q2</h2>
                <hr />
                <p>Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>
                <p>
                    State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
                </p>
            </div>
            <div className="question">
                <h2>How useState works? Q3</h2>
                <hr />
                <p>useState() works differently from the setState() function (which is used to change the value of state variables in class-based components) when it comes to using arrays. setClick() does not merge new values with the existing ones on being called, it simply overwrites them with the new value. Hence, it is necessary to find a workaround for appending the existing values, which is done inside the addNumber() internal function with the help of the spread operator. The function creates a new variable with a certain id and value and adds it to the existing array.</p>
                <p>
                    If one needs to deal with multiple types of data at once, the best way to go for is with an object. While the same work can be done with separate state variables, objects make work much more efficient in the long run (also one can make do with fewer useState() declarations).
                </p>
            </div>
        </div>
    );
};

export default Question;