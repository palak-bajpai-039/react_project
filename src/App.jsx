import "./components/EV.css";
import NetflixSeries from "./components/NetflixSeries";
//import { RegistrationReactForm } from "./components/hooks/useState/registrationReactForm";

//import { Counter } from "./components/hooks/useState";
//import CounterChallenges from "./components/hooks/useState/challenge";
//import ShortCiruit from "./components/ShortCircuit";
//import ControlledFrom from "./components/hooks/useState/controlled";

export const App = () => {
  return (
    <section>
      <h1>Top netflixSeries</h1>
      <br />
      <br />
      <NetflixSeries />
    </section>
  );
};
