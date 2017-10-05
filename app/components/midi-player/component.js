import Ember from 'ember';
// var MidiPlayer = require('midi-player-js');
// import MidiPlayer from 'npm:midi-player-js';

export default Ember.Component.extend({
  tagName: 'span',

  ajax: Ember.inject.service(),

  playing: false,

  // player: new MidiPlayer.Player(event => {
  //   // console.log(event);
  // }),

  actions: {
    play(/* midiName */) {
      // const player = this.get('player');

      // this.get('ajax').request('/midis/' + midiName, {
      //   dataType: 'audio/midi'
      // }).then(result => {
      //   player.loadDataUri(result);
      //   player.play();
      // });
    },

    stop() {
      this.get('player').stop();
    },

    pause() {

    }
  }
});
