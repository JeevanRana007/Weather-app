
import React from 'react'
import './styles.css';
import moment from 'moment';
import {Button} from 'semantic-ui-react'
const refresh=()=>{
    window.location.reload();
}
const CardExampleCard = ({weatherData}) => (

    <div className='main'>
        <div className='top'>
            <div className='header'>{weatherData.name}</div>
            <Button className='button' inverted color='blue' circular icon="refresh" onClick={refresh}/>
        </div>
        <div className='flex'>
            <div className='Day'><p>{moment().format('dddd')},{moment().format('LL')}</p></div>
            <div className='Day'><p>{weatherData.weather[0].description}</p></div>
        </div>
        <div className='flex'>
            <div className='temp'><p>Temperature : {weatherData.main.temp} &deg;C</p></div>
            <div className='temp'><p>Humidity: {weatherData.main.humidity} %</p></div>
        </div>
        <div className='flex'>
            <div className='temp'><p>Sunrise : {new Date(weatherData.sys.sunrise*1000).toLocaleTimeString('en-IN')}</p></div>
            <div className='temp'><p>SunSet : {new Date(weatherData.sys.sunset*1000).toLocaleTimeString('en-IN')}</p></div>
        </div>
        
    </div>

  )
  export default CardExampleCard;
