import React, { useState, useEffect } from "react";

const CountDown = () => {
  let [targetSeconds, setTargetSeconds] = useState(null);
  let [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(
    function () {
      if (targetSeconds === null) return;

      setElapsedSeconds(0);

      let interval = setInterval(function () {
        setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    },
    [targetSeconds]
  );

  function parseForm(ev) {
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
    setTargetSeconds(parseInt(seconds));
  }

  if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
    return (
      <div className="flex flex-col">
        <p className="text-xl font-medium">!Ha terminado! ✅</p>
        <button
          className="p-3 bg-red-500 hover:bg-red-600 w-full rounded text-white font-semibold mt-5"
          onClick={() => setTargetSeconds(null)}
        >
          Reiniciar
        </button>
      </div>
    );
  }

  if (targetSeconds !== null) {
    return (
      <p className="text-xl font-medium">
        Faltan {targetSeconds - elapsedSeconds} segundos⏱️
      </p>
    );
  }

  return (
    <div>
      <form onSubmit={(ev) => parseForm(ev)}>
        <h1 className="text-xl font-medium text-center">
          ⏱️ Estableza el temporizador ⏱️
        </h1>
        <input
          className="bg-gray-200 w-full rounded mt-5 p-2 text-blue-900 font-bold focus:outline-none"
          type="number"
          name="seconds"
          required
        />
        <button className="p-3 bg-red-500 hover:bg-red-600 w-full rounded text-white font-semibold mt-5">
          Inciar
        </button>
      </form>
    </div>
  );
};

export default CountDown;
