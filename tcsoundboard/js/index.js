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
	// comment this if statement out to let the clips overlap
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
		if (this.props.sound.type == "drop") {
			return (
				React.createElement("div", { className: "sound-card-drop",
					onClick: () => this.props.playSound(this.props.sound.id) },
		  		React.createElement("div", { className: "sound-card-text" }, this.props.sound.soundName))
		  	);
		} else {
			return (
				React.createElement("div", { className: "sound-card",
					onClick: () => this.props.playSound(this.props.sound.id) },
				React.createElement("div", { className: "sound-card-text" }, this.props.sound.soundName))
		 	);
	 	}
	}
}


class App extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  sounds: [
	  { id: 1, soundName: 'TIME CRISIS INTRO', soundURL: './sounds/tcintro.mp3', isPlaying: false, type: "drop" },
	  { id: 2, soundName: 'SEINFELD NUMBER CRUNCH', soundURL: './sounds/seinfeldnumbercrunch.mp3', isPlaying: false, type: "quote" },
	  { id: 3, soundName: 'DIET COKE: BECAUSE I CAN', soundURL: './sounds/dietcoke.mp3', isPlaying: false, type: "drop" },
	  { id: 4, soundName: 'TIME CRISIS MAILBAG', soundURL: './sounds/tcmailbag.mp3', isPlaying: false, type: "drop" },
	  { id: 5, soundName: 'BORGESIAN', soundURL: './sounds/borgesian.mp3', isPlaying: false, type: "quote" },
	  { id: 6, soundName: 'ROCK\'S PLAYED OUT, DOG', soundURL: './sounds/rocksplayedout.mp3', isPlaying: false, type: "quote" },
	  { id: 7, soundName: '8 MINUTE CAPE COD', soundURL: './sounds/8minutecapecod.mp3', isPlaying: false, type: "drop" }, 
	  { id: 8, soundName: 'THIS SHOW RULES', soundURL: './sounds/thisshowrules.mp3', isPlaying: false, type: "quote" }, 
	  { id: 9, soundName: 'BUT IN MY NEIGHBOR- HOOD...', soundURL: './sounds/butinmyneighborhood.mp3', isPlaying: false, type: "quote" },
	  { id: 10, soundName: 'TIME CRISIS HOTLINE', soundURL: './sounds/tchotline.mp3', isPlaying: false, type: "drop" },
	  { id: 11, soundName: 'SWEET CHILI HEAT® WORLD PREMIERE', soundURL: './sounds/tcsweetchilipremiere.mp3', isPlaying: false, type: "drop" },
	  { id: 12, soundName: 'BUFF TRAFFIC SITCH', soundURL: './sounds/bufftrafficsitch.mp3', isPlaying: false, type: "quote" },
	  { id: 13, soundName: 'BRUTAL', soundURL: './sounds/brutal.mp3', isPlaying: false, type: "quote" },
	  { id: 14, soundName: 'JAKE\'S TAKES', soundURL: './sounds/jakestakes.mp3', isPlaying: false, type: "drop" }, 
	  { id: 15, soundName: 'TASTEFUL PALETTE OF THE 1970\'S', soundURL: './sounds/tastefulpalette.mp3', isPlaying: false, type: "drop" }, 
	  { id: 16, soundName: 'BANKIN\' THE EPS', soundURL: './sounds/bankintheeps.mp3', isPlaying: false, type: "quote" }, 
	  { id: 17, soundName: 'SMALL CHARCOAL GRILL', soundURL: './sounds/smallcharcoalgrill.mp3', isPlaying: false, type: "quote" }, 
	  { id: 18, soundName: 'CORPORATE FOOD HISTORY', soundURL: './sounds/corporatefoodhistory.mp3', isPlaying: false, type: "drop" }, 
	  { id: 19, soundName: 'AWFULLY HOT COFFEE POT', soundURL: './sounds/awfullyhotcoffeepot.mp3', isPlaying: false, type: "quote" }, 
	  ]};


  }
  render() {
	return (
	  React.createElement("div", null,
	  React.createElement(Board, { sounds: this.state.sounds, audio: this.state.audio })));


  }}
;

ReactDOM.render(React.createElement(App, null), document.getElementById('soundboard'));