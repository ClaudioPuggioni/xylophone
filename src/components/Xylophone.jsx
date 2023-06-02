const barAudios = [
  { audio: new Audio("/assets/sounds_crfo.mp3"), letter: "C" },
  { audio: new Audio("/assets/sounds_edqt.mp3"), letter: "D" },
  { audio: new Audio("/assets/sounds_tena.mp3"), letter: "E" },
  { audio: new Audio("/assets/sounds_ldcc.mp3"), letter: "F" },
  { audio: new Audio("/assets/sounds_peoi.mp3"), letter: "G" },
  { audio: new Audio("/assets/sounds_dtse.mp3"), letter: "A" },
  { audio: new Audio("/assets/sounds_udgb.mp3"), letter: "B" },
  { audio: new Audio("/assets/sounds_bvng.mp3"), letter: "C" },
];

function Xylophone() {
  return (
    <div id="container">
      <div id="xyloCard">
        {barAudios.map((ele, idx) => (
          <div className="barContainer">
            <div
              className="bar"
              id={`bar${idx + 1}`}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => {
                ele.audio.load();
                ele.audio.play();
              }}
            >
              {ele.letter}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Xylophone;
