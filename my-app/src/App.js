import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from "./components/StatefulGreeting";
import NavBarSimple from "./components/NavBarSimple";
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import NavBarForm from "./components/NavBarForm";
import RenderingLists from './components/RenderingLists';
import Content from './components/Content';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import Loader from './components/Loader';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks'
import UseStateWithArrays from './components/UseStateWithArrays';

function App() {
  return (
    <div className={App}>
      {/* <Sidebar /> */}
      {/* <StatefulGreeting greeting="from the stateful component class!" name="Antony"/> */}
      {/* <NavBarSimple /> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
      {/* <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false} /> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      {/* <NavBarForm /> */}
      {/* <RenderingLists/> */}
      {/* // <Content /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU/> */}
      {/* <Loader/> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <SearchBar/> */}
      {/* <ControlledFormHooks/> */}
      <UseStateWithArrays/>
    </div>
  );
}

export default App;