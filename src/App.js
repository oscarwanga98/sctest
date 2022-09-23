import './App.css';
// import Navabr1 from './Components/Navabr1';
import Navabr2 from './Components/Navabr2';
import ProductList from './Components/ProductList';
import ProductForm from './Components/ProductForm';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'



function App() {
  return (
    <Router >
      <Routes>

        <Route path='/' element={
          <>
            {/* <Navabr1/> */}
            <ProductList />
            <Footer/>
          </>
        }>
        </Route>
        
        <Route path='/add' element={
          <>
            <Navabr2/>
            <ProductForm />
            <Footer/>
          </>
        }>
        </Route>
        
      </Routes>
     
        
     
    </Router>
  );
}

export default App;
