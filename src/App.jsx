import { Routes, Route } from 'react-router-dom';
import { FormProvider } from './components/FormContext';
import './index.css';
import Result from './pages/Result';
import Home from './pages/Home';
import Works from './pages/Works'
import NavBar from "./pages/NavBar"
import Footer from './pages/Footer';

const App = () => {
  return (
    <FormProvider>
      <NavBar />
      <div className="App">
        <main className="flex flex-col justify-center mt-10">
          <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer />
        </main>
      </div>
    </FormProvider>
  );
};

export default App;
