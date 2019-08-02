import {ADD_NAME} from '../actions/types';

const INITIAL_STATE = [
  {
    name: 'Ayden',
    sex: 'male'
  }, {
    name: 'Jayden',
    sex: 'male'
  }, {
    name: 'Barack',
    sex: 'male'
  }, {
    name: 'Sam',
    sex: 'male'
  }, {
    name: 'Johnson',
    sex: 'male'
  }, {
    name: 'Gennadi',
    sex: 'male'
  }, {
    name: 'Genius',
    sex: 'male'
  }, {
    name: 'Melvin',
    sex: 'male'
  }, {
    name: 'Melville',
    sex: 'male'
  }, {
    name: 'Zabi',
    sex: 'male'
  }, {
    name: 'Madelyn',
    sex: 'female'
  }, {
    name: 'Makayla',
    sex: 'female'
  }, {
    name: 'Khloe',
    sex: 'female'
  }, {
    name: 'Zahava',
    sex: 'female'
  }, {
    name: 'Nava',
    sex: 'female'
  }, {
    name: 'Linnett',
    sex: 'female'
  }, {
    name: 'Cheyenne',
    sex: 'female'
  }, {
    name: 'Genevieve',
    sex: 'female'
  }, {
    name: 'Poppy',
    sex: 'female'
  }, {
    name: 'Olinda',
    sex: 'female'
  }
];

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NAME:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};
