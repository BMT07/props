import logo from './logo.svg';
import './App.css';
import MainVideo from './components/MainVideo';
import Comments from './components/comments';
import Sugggestions from './components/suggestions';
import {mainVideo,comments,suggestions} from "./data"

function App() {
  return (
    <div style={{display:"flex"}}>
    
     <div >
     <MainVideo mainVideo={mainVideo}/>
     <Comments comments={comments}/>
     </div>
     <Sugggestions suggestions={suggestions}/>
      
    </div>
  );
}

export default App;
