
import React, { useState } from "react";
function Sad() {
  const [showButton, setShowButton] = useState(false);

  function handleClick() {
    setShowButton(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Нажми меня</button>
      {showButton && <button>Я появился!</button>}
    </div>
  );
}

