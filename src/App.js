import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './pages/Dashboard/Dashboard';
import LandingPage from './pages/LangingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Maps from './pages/Dashboard/Maps';
import About from './pages/About/About';
import Symptoms from './pages/Symptoms/Symptoms';
import Prevention from './pages/Prevention/Prevention';
import Footer from './pages/Footer/Footer';

function App() {
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchStatics = async () => {
      setIsLoading(true);
      await axios
        .get(
          'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
          {
            headers: {
              'X-RapidAPI-Host':
                'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
              'X-RapidAPI-Key': '3c38e25fb6msh78a124a8b4046c0p11378fjsndd1406d518b6'
            }
          }
        )
        .then((res) => setData(res.data))
        .then(() => setIsLoading(false));
    };
    fetchStatics();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Dashboard data={data[0]} isLoading={isLoading} />
      <Maps data={data} />
      <About />
      <Symptoms />
      <Prevention />
      <Footer />
    </div>
  );
}

export default App;
