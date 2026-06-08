//import NetflixSeries from "./components/NetflixSeries";
//import "./components/Netflix.css";
//import "./components/Netflix.module.css";
//import { EventHanhling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";

export const App = () => {
  return (
    <section className="container">
      {/*<h1 className="card-heading">List of Netflix Series</h1>*/}
      {/*<NetflixSeries />;*/}
      {/*<EventHanhling />;*/}
      <EventProps />
    </section>
  );
};
