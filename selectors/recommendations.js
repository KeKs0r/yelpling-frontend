export default function recommendations(r, l){
  return r.map((score, id) => {
      return l.get(id).set('score', score);
  }).sortBy(
    (r) => r.get('score')
  );
}
