import Ember from 'ember';

export function tuningName(params/*, hash*/) {
  const tuning = params[0];

  switch (tuning) {
    case 'E A D G B E':  return 'Standard Tuning';
    case 'D A D G B E':  return 'Drop D Tuning';
    case 'D G D G B E':  return 'Drop DG Tuning';
    case 'E A D F# B E': return 'Lute Tuning';
    default:             return 'Unknown Tuning';
  }
}

export default Ember.Helper.helper(tuningName);
