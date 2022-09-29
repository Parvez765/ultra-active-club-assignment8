import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1> Q-1: How Does React Work ?</h1><br/>
            <h2>Answer - ReactJS divides the UI into isolated reusable pieces of code known as <br></br>components.React components work similarly to JavaScript functions as they accept properties or props.</h2>
            <hr />
            <h1>Q-2: Difference Between Props and State</h1><br />
            <h2>Answer: Props are used to pass data from one component to another.<br></br>The state is a local data storage that is local to the component only and cannot be passed to other components.</h2>
            <hr />
            <h1>Q - 3: What Else Does UseEffect do besides fecting API ? </h1><br />
             <h2>Answer: The useEffect Hook allows to perform side effects in components.<br></br> Besides fetching data it also does work on directly updating the DOM, and timers. useEffect accepts two arguments.<br></br> The second argument is optional. </h2>
        </div>
    );
};

export default Questions;   
