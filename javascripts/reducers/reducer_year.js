var _ = require('lodash');
import { FETCH_YEAR } from '../actions/get_year';
import { DEVICE_REMOVED } from '../actions/hid_action';

const DEFAULT_DROPDOWN_VALUE = {id: 0, vehicle_year:"Select Year..."};
const YEAR_LIST = _.range(1980,2020).map((i) => {
      return {id: i, vehicle_year:i};
    });

export default function(state = {list: [DEFAULT_DROPDOWN_VALUE]}, action){
  switch (action.type){
    case FETCH_YEAR:
      //return state.concat([ action.payload.data ]);
      //or (same crete new array). NEVER!!!!! mutate array
      return {list: [DEFAULT_DROPDOWN_VALUE, ...YEAR_LIST ]};
    case DEVICE_REMOVED:
      return {list: [DEFAULT_DROPDOWN_VALUE]};
  }
  return state;
}
