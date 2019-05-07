// Hit the gear icon to the left of JS in the header to open JavaScript settings

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: {
        sound: null,
        soundName: null,
        currentlyPlaying: null } };
  }

  playSound(id) {
    // comment this if statement out to let them overlap
    if (this.state.audio.currentlyPlaying) {
      let snd = this.state.audio.sound;
      snd.pause();
    }
    let sound = this.props.sounds.find(sound => {return sound.id === id;});
    let snd = new Audio(sound.soundURL);
    this.setState({ audio: { sound: snd, soundName: sound.soundName, currentlyPlaying: true } });
    snd.play();

    let data = [...this.props.sounds];
    const index = data.findIndex(obj => obj.soundName === sound.soundName);
    data[index].isPlaying = true;
    this.setState(data);

    snd.addEventListener('ended', this.soundListener.bind(this, data, index, snd));
  }

  soundListener(data, index, snd) {
    const newData = [...data];
    newData[index].isPlaying = false;
    this.setState(newData);
    snd.removeEventListener('ended', this.soundListener);
  }

  renderSounds() {
    return this.props.sounds.map(sound => {
      return React.createElement(Sound, { key: sound.id, sound: sound, audio: this.state.audio, playSound: this.playSound.bind(this) });
    });
  }
  render() {
    return (
      React.createElement("div", { className: "appContainer" },
      this.renderSounds()));


  }}
;

class Sound extends React.Component {
  render() {
    let speakerStyle = 'fa fa-volume-off fa-3x';
    if (this.props.sound.isPlaying && this.props.sound.soundName === this.props.audio.soundName && this.props.audio.currentlyPlaying) {
      speakerStyle += 'fa fa-volume-up fa-3x';
    }
    return (
      React.createElement("div", { className: "sound-card",
        onClick: () => this.props.playSound(this.props.sound.id) },
      React.createElement("div", { className: "sound-card-text" }, this.props.sound.soundName)));



  }}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [
      { id: 1, soundName: 'TIME CRISIS INTRO', soundURL: './sounds/timecrisisintrodrop.mp3', isPlaying: false },
      { id: 2, soundName: 'SEINFELD NUMBER CRUNCH', soundURL: './sounds/seinfeldnumbercrunch.mp3', isPlaying: false },
      { id: 3, soundName: 'BUT IN MY NEIGHBOR- HOOD...', soundURL: './sounds/seinfeldnumbercrunch.mp3', isPlaying: false },
      { id: 4, soundName: '8 MINUTE CAPE COD', soundURL: './sounds/seinfeldnumbercrunch.mp3', isPlaying: false },
      { id: 5, soundName: 'CORPORATE FOOD HISTORY LINE LINEEEEE', soundURL: './sounds/seinfeldnumbercrunch.mp3', isPlaying: false },
      { id: 6, soundName: 'BOOP', soundURL: './sounds/seinfeldnumbercrunch.mp3', isPlaying: false }] };


  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", {className: "logodiv"}, React.createElement('img', {className: "logoimg", src: "assets/logo.png"})),
      React.createElement(Board, { sounds: this.state.sounds, audio: this.state.audio }),
      React.createElement("p", null, "PLACEHOLDER FOOTER INFO")));


  }}
;

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));