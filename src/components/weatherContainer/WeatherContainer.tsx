import Pagination from "../general/pagination/Pagination";
import TimeStamp from "../timeStamp/TimeStamp";
import WeatherDailyData from "../weatherDailyData/WeatherDailyData";
import WeatherImage from "../weatherImage/WeatherImage";
import WeatherLocation from "../weatherLocation/WeatherLocation";

const WeatherContainer: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-gray-500 rounded-lg h-4/5 w-9/10 m-auto">
            <WeatherLocation></WeatherLocation>
            <TimeStamp></TimeStamp>
            <WeatherImage></WeatherImage>
            <WeatherDailyData></WeatherDailyData>
            <Pagination></Pagination>
        </div>
    );
  };
  
  export default WeatherContainer;