
import './styles/App.scss';
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { Tasks } from './components/tasks/tasks'
function App() {
  return (
    <div className=''>
      <Header />
      <div className='container'>
        <Tasks />
      </div>

      <Footer />
    </div>




  );
}

export default App;
