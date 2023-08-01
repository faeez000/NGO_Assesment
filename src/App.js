import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './Components/Navbar';
import TrustInfo from './Components/TrustInfo';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div >
      <NavbarComponent />
    </div>
    <div style={{marginTop:"5%"}}>
      <TrustInfo />
    </div>
    <div style={{marginTop:"2%"}} className='shadow-lg p-3 mb-5 bg-body rounded'>
      <Footer />
    </div>
    </>
  );
}

export default App;
