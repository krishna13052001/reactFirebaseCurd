import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
