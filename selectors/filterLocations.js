import {SHOW_ALL} from '../actions/filter';

export default function filterLocations(locations, filter){
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
