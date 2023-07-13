import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Navbar/>
      <main className='flex-auto'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;