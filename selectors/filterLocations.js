import {SHOW_ALL} from '../actions/filter';

function selectLocation(l){
  const locations = l.get('data');
  const selected = l.get('selected');
  if(!selected) {
    return locations;
  }
  return locations.map((loc) => {
    if(selected === loc.get('business_id')){
      return loc.set('selected', true);
    }
    return loc;
  })
}

export default function filterLocations(l, filter){
  const locations = selectLocation(l);
  if(filter === SHOW_ALL){
    return locations;
  }
  let current = locations;
  filter.forEach((f, k) => {
    current = current.filter((l) => {
      const value = l.get(k);
      if(Array.isArray(value)){
        for (var i = 0; i < value.length; i++) {
          if(f.contains(value[i])){
            return true;
          }
        }
      }
      return f.contains(value);
    });
  })
  return current;
}
