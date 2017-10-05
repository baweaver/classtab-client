import Ember from 'ember';
// var MidiPlayer = require('midi-player-js');
// import MidiPlayer from 'midi-player-js';

export default Ember.Component.extend({
  tagName: 'span',

  playing: false,

  // player: new MidiPlayer.Player(event => {
  //   console.log(event);
  // }),

  actions: {
    play(midiName) {
      const player = this.get('player');

      player.loadFile('http://www.classtab.org/' + midiName);
      player.play();
    },

    stop() {
      this.get('player').stop();
    },

    pause() {

    }
  }
});
