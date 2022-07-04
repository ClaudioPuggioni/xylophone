const barAudio1 = new Audio("/assets/sounds_crfo.mp3");
const barAudio2 = new Audio("/assets/sounds_edqt.mp3");
const barAudio3 = new Audio("/assets/sounds_tena.mp3");
const barAudio4 = new Audio("/assets/sounds_ldcc.mp3");
const barAudio5 = new Audio("/assets/sounds_peoi.mp3");
const barAudio6 = new Audio("/assets/sounds_dtse.mp3");
const barAudio7 = new Audio("/assets/sounds_udgb.mp3");
const barAudio8 = new Audio("/assets/sounds_bvng.mp3");

function Xylophone() {
  return (
    <div id="container">
      <div id="xyloCard">
        <div className="barContainer">
          <div
            className="bar"
            id="bar1"
            onClick={() => {
              barAudio1.load();
              barAudio1.play();
            }}
          >
            C
          </div>
          <div className="numDesignator">1</div>
        </div>
        <div className="barContainer">
          <div
            className="bar"
            id="bar2"
            onClick={() => {
              barAudio2.load();
              barAudio2.play();
            }}
          >
            D
          </div>
          <div className="numDesignator">2</div>
        </div>
        <div className="barContainer">
          <div
            className="bar"
            id="bar3"
            onClick={() => {
              barAudio3.load();
              barAudio3.play();
            }}
          >
            E
          </div>
          <div className="numDesignator">3</div>
        </div>
        <div className="barContainer">
          <div
            className="bar"
            id="bar4"
            onClick={() => {
              barAudio4.load();
              barAudio4.play();
            }}
          >
            F
          </div>
          <div className="numDesignator">4</div>
        </div>
        <div className="barContainer">
          <div
            className="bar"
            id="bar5"
            onClick={() => {
              barAudio5.load();
              barAudio5.play();
            }}
          >
            G
          </div>
          <div className="numDesignator">5</div>
        </div>
        <div className="barContainer">
          <div
            className="bar"
            id="bar6"
            onClick={() => {
              barAudio6.load();
              barAudio6.play();
            }}
          >
            A
          </div>
          <div className="numDesignator">6</div>
        </div>
        <div className="barContainer">
          <div
            className="bar"
            id="bar7"
            onClick={() => {
              barAudio7.load();
              barAudio7.play();
            }}
          >
            B
          </div>
          <div className="numDesignator">7</div>
        </div>
        <div className="barContainer">
          <div
            className="bar"
            id="bar8"
            onClick={() => {
              barAudio8.load();
              barAudio8.play();
            }}
          >
            C
          </div>
          <div className="numDesignator">8</div>
        </div>
      </div>
    </div>
  );
}

export default Xylophone;
