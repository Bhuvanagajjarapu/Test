import React from 'react';
import ReactDOM from 'react-dom/client';
//import DataFetching from './DataFetching';
import App from './App';
// function MissedGoal() {
// 	return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
// 	return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);