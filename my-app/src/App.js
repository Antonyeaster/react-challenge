import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from "./components/StatefulGreeting"

function App() {
  return (
    <div className={App}>
      {/* <Sidebar /> */}
      <StatefulGreeting greeting="from the stateful component class!" name="Antony"/>
    </div>
  );
}

export default App;