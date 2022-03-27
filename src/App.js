import './App.css';
import Foods from './Components/Foods/Foods';
import Header from './Components/Header/Header';
import Question from './Components/Questions/Question';
function App() {
  return (
    <div className='title-text'>
      <Header></Header>
      <h1>Choose Your <span className='text-color'>best Food</span></h1>
      <Foods></Foods>
      <Question></Question>
    </div>
  );
}

export default App;
