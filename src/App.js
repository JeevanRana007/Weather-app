import './index.css'
import './App.css';
import { useEffect, useState } from 'react';
import {Dimmer,Loader} from 'semantic-ui-react';
import Weather from './Weather';
function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      console.log(lat)
      console.log(long)
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=17.4424064&lon=78.3351808&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
    console.log(data)
  }, [lat,long])
  
  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
       <Dimmer active>
        <Loader>Loading...</Loader>
        </Dimmer>
      )}
      
    </div>
  );
}

export default App;
