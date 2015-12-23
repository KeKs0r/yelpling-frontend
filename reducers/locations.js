import { Map } from 'immutable';
import { BUSINESS, BAR, REST, BAK } from '../constants';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`

const initialState = new Map()
  .set(1, new Map({
    business_id: 1,
    name: 'Hopfenreich',
    typ: BUSINESS,
    categories: [BAR, REST],
    longitude: 13.32080,
    latitude: 52.51275,
    stars: 3,
    review_count: 12,
    image: 'http://lorempixel.com/600/337/nightlife/1',
    description: lorem,
    optDescription: lorem,
    city: 'Los Angeles'
  }))
  .set(2, new Map({
    business_id: 2,
    name: 'Schnelle Quelle',
    typ: BUSINESS,
    longitude: 13.32724,
    latitude: 52.51745,
    stars: 3,
    categories: [BAR],
    review_count: 12,
    image: 'http://lorempixel.com/600/337/nightlife/2',
    description: lorem,
    city: 'Los Angeles'
  }))
  .set(3, new Map({
    business_id: 3,
    name: 'Burgermeister',
    typ: BUSINESS,
    stars: 3,
    categories: [REST, BAR],
    review_count: 12,
    image: 'http://lorempixel.com/600/337/nightlife/3',
    description: lorem,
    optDescription: lorem,
    city: 'Los Angeles'
  }))
  .set(4, new Map({
    business_id: 4,
    name: 'Piris',
    typ: BUSINESS,
    stars: 3,
    categories: [REST],
    review_count: 12,
    image: 'http://lorempixel.com/600/337/nightlife/4',
    city: 'New York'
  }))


export default function locations(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
