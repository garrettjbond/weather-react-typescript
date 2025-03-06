import './App.css'
import SearchInput from './components/searchInput/SearchInput'
import WeatherContainer from './components/weatherContainer/WeatherContainer'
import WeatherImage from './components/weatherImage/WeatherImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <FontAwesomeIcon icon={faLocationDot} onClick={() => setIsVisible((prev) => !prev)}/>
      {isVisible && <SearchInput/> }
      <WeatherContainer/>
      <WeatherImage/>
    </>
  )
}

export default App
