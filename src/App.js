import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandonColor from "./components/random-color";
import StartRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import { menus } from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandonColor />
      <StartRating numOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
      <LoadMoreData />
      <TreeView menus={menus} />
      <QRCodeGenerator />
    </div>
  );
}

export default App;
