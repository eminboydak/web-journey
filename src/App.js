/* Default Imports */
import logo from "./logo.svg";
import "./App.css";

/* My Imports */
import Gallery from "./component/Galery";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/typeface-menomonia";

import { TraitLine } from "@discretize/gw2-ui-new";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TraitLine
          id={41}
          selected={[227, 214, 1672]}
          onSelect={({ id, tier }) =>
            console.log(`Clicked skill ${id} in tier ${tier}`)
          }
        />
      </header>
    </div>
  );
}

export default App;
