import { React, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      count: {count}
    </button>
  );
}

export default App;






function choice({ choice }) {

  return (
    <span>your choice is: {choice}</span>
  );

}






function compAsProps() {

  return (
    <App loginButton={<button href="/login"> Login </button>}/>
  );

}