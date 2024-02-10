import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandonColor from './components/random-color';
import StartRating from './components/star-rating';

function App() {
  return (
    <div className='App'>
      <Accordian />
      <RandonColor />
      <StartRating numOfStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} />
    </div>
  );
}

export default App;
