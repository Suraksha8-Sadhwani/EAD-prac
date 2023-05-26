
import './App.css';
import Stories from './Stories';
// import Data from './Data';

import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';

// import prom from './prom';
function App() {
  return (
    <div className="App">
     {/* <Data /> */}
     <Stories />
     
     <Greet name = "Hello" />
     <Greet name = "Suraksha a.k.a" nickname = "Babi">
      <p>
        This is just for understanding
      </p>
     </Greet>
     <Greet name = "Sadhwani"> 
      <button>click</button>
     </Greet>
     <Welcome name = "Hello" />
     <Welcome name = "Suraksha a.k.a" nickname = "Babi">
      <p>
        This is just for understanding
      </p>
     </Welcome>
     <Welcome name = "Sadhwani"> 
      <button>click</button>
     </Welcome> 
    {/* <Hello /> */}
  

      
    </div>
  );
}

export default App;
