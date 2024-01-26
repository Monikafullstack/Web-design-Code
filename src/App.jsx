import { Monika} from "./components/Monika/Monika";
import { Navbar } from "./components/Navbar/Navbar";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Monika />
      <About />
      <Experience/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
