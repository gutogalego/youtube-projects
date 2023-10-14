import { React, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  choice()
  compAsProps()

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
  return <span>your choice is: {choice}</span>;
}

function compAsProps() {
  return <App loginButton={<button href="/login"> Login </button>} />;
}

function Nav(props) {
  return <nav>{props.children}</nav>;
}

function useNav() {
  return (
    <Nav>
      <button href="/login"> Login </button>
    </Nav>
  );
}

// eslint-disable-next-line import/first
import { useEffect, useMemo } from "react";

function FootGun() {
  useEffect(() => {
    const shoot = async () => {
      // async logic
    };
  }, []);
}

function SideEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count is ${count}`;
  }, [count]);
}

function Memo() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => count * 2, [count]);

  useEffect(() => {
    document.title = `count is ${count}`;
  }, [count]);
}

function Conditional() {
  const [count, setCount] = useState(0);

  return <>{count < 1 ? <p>empty</p> : <p>not empty</p>}</>;
}

function ReactOnTheWild() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count < 1 ? (
        <p>empty</p>
      ) : count > 100 ? (
        <p>full</p>
      ) : count > 10 ? (
        <p>still not empty</p>
      ) : (
        <p>not empty</p>
      )}
    </>
  );
}

function loopz() {
  const items = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ];

  return (
    <>
      {items.map((item) => {
        <div>{item.name}</div>;
      })}
    </>
  );
}
