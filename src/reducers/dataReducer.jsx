import { SERVICES } from '../actions/updateServices';
import { PROVIDERS } from '../actions/updateProviders';
import { FILTERED_PROVIDERS } from '../actions/filterProviders';
import { CLEAR_SELECTION } from '../actions/clearSelection';

// initial state
let initialState = {
  services: [],
  providers: [],
  filteredProviders: []
}
let updatedProviders = {data: []};

// data is returned based on action type sent from the actions
function returnData(state = initialState, action) {
  switch (action.type) {
    case CLEAR_SELECTION:
      return Object.assign({}, state, {
        filteredProviders: state.providers
      });
    case FILTERED_PROVIDERS:
      updatedProviders.data = [];
      state.providers.data.forEach((value) => {
        if(value.attributes["subspecialties"].map(v => v.toLowerCase()).indexOf(action.id.replace('-',' ')) !== -1) {
          updatedProviders.data.push(value);
        }
      });
      return Object.assign({}, state, {
        filteredProviders: updatedProviders
      });
    case CLEAR_SELECTION:
      return Object.assign({}, state, {
        providers: action.providers,
        filteredProviders: action.providers
      });
    case PROVIDERS:
      return Object.assign({}, state, {
        providers: action.providers,
        filteredProviders: action.providers
      });
    case SERVICES:
        return Object.assign({}, state, {
          services: action.services
        });
    default:
      return state;
  }
}
export default returnData;