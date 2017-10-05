import Ember from 'ember';

export function difficultyLevel(params/*, hash*/) {
  const difficulty = params[0];

  switch (difficulty) {
    case 'easy':         return 'fa-circle text-success';
    case 'intermediate': return 'fa-square text-info';
    case 'advanced':     return 'fa-diamond text-warning';
    case 'expert':       return 'fa-exclamation-triangle text-danger';
    default:             return 'fa-circle-o';
  }
}

export default Ember.Helper.helper(difficultyLevel);
