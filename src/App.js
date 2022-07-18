import React, {Fragment , useEffect , useState} from "react";
import List from "./Component/List";
import Loader from "./Component/Loader";
import "./App.css"
function App() {
  const [loader , setLoader] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    },2000);
  } )

  return (
    <Fragment>
       {loader ? 
        <div className="App">
          <Loader/>
        </div> 
     : 
        <div className="App">
          <List/>
        </div>
        }
    </Fragment>
  );
}
export default App;
