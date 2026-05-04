import { useState } from "react";
import "./BusinessCard.css";

interface BusinessCardProps {
  frontImage: string;
  backImage: string;
}

export default function BusinessCard({ frontImage, backImage }: BusinessCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="card-wrapper">
      <div
        className={`card-scene${isFlipped ? " is-flipped" : ""}`}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        aria-label={isFlipped ? "名刺の裏面（クリックで表面を表示）" : "名刺の表面（クリックで裏面を表示）"}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleFlip();
          }
        }}
      >
        <div className="card-inner">
          <div className="card-face card-face--front">
            <img src={frontImage} alt="名刺 表面" draggable={false} />
          </div>
          <div className="card-face card-face--back">
            <img src={backImage} alt="名刺 裏面" draggable={false} />
          </div>
        </div>
      </div>

      <button
        className="flip-button"
        onClick={handleFlip}
        aria-label={isFlipped ? "表面を表示" : "裏面を表示"}
      >
        {isFlipped ? "表面を見る" : "裏返す"}
      </button>

      <p className="hint-text">
        {isFlipped ? "クリック / タップで表面を表示" : "クリック / タップで裏返す"}
      </p>
    </div>
  );
}
