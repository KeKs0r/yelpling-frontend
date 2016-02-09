import {Map} from 'immutable';
export default function recommendations(r, l){
  if(!r){
    return new Map();
  }
  return r.map((score, id) => {
      return l.get(id).set('score', score);
  }).sortBy(
    (r) => r.get('score')
  );
}
