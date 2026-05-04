import BusinessCard from "./components/BusinessCard";
import cardConfig from "./config";
import "./App.css";

function App() {
  const frontSrc = `/image/${cardConfig.frontImage}`;
  const backSrc = `/image/${cardConfig.backImage}`;

  return (
    <div className="app-container">
      <main className="app-main">
        <BusinessCard frontImage={frontSrc} backImage={backSrc} />
      </main>
    </div>
  );
}

export default App;
