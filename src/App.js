import "./App.css";
import Accordian from "./components/accordian";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandonColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutocomplete from "./components/search-autocomplete";
import StartRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import { menus } from "./components/tree-view/data";
import ModalTest from "./custom-modal-popup/modal-test";

function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <RandonColor />
      <StartRating numOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
      <LoadMoreData />
      <TreeView menus={menus} />
      <QRCodeGenerator />
      <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      <SearchAutocomplete />
    </div>
  );
}

export default App;
