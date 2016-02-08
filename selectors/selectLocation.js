export default function selectLocation(locations, selected){
  if(!selected) {
    return locations;
  }
  return locations.map((loc) => {
    if(selected === loc.get('yelp_id')){
      return loc.set('selected', true);
    }
    return loc;
  })
}
