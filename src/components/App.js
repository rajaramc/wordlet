import './App.css';
import Header from "./Header"
import AttemptList from "./AttemptList"
import NewAttempt from './NewAttempt';
import dictionary from "../dictionary/dict-sorted.json"

function App() {
  console.log(dictionary.terms);
  return (
    <div className='ui container center'>
      <Header />
      <AttemptList/>
      <NewAttempt />
    </div>
  );
}

export default App;
