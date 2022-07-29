
import './App.css';
import { FormBook } from './components/FormBook';
import { NavBarTemplate } from './components/NavBarTemplate';

function App() {
  return (

    <div className="App ">
      <NavBarTemplate />
      <div className='container'>
        <FormBook />
      </div>

    </div>
  );
}

export default App;
