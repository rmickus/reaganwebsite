import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";

const App = (): JSX.Element => {
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    const int = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <p>{time.toLocaleTimeString("en-US")}</p>
      </header>
    </div>
  );
};

export default App;
