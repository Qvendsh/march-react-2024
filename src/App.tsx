import React from 'react';
import ToggleComponent from "./components/ToggleComponent";
import PreviousComponent from "./components/PreviousComponent";

const App = () => {
  return (
      <div>
          {
              <ToggleComponent/>
          }
          {
              <PreviousComponent value={0}/>
          }
      </div>
  );
};

export default App;
