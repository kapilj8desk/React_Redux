import $ from 'jquery';
import updateServices from '../actions/updateServices';
import updateProviders from '../actions/updateProviders';
import { useDispatch } from 'react-redux';

// Used to make calls to the api to fetch the data asynchronously
class api {
  getServices() {
    const dispatch = useDispatch();

    $.ajax({
      type: 'GET',
      url: 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services',
      success: (results) => {
        dispatch(updateServices(results));
      },
      error: () => {
        dispatch(updateServices([]));
    }});
  }

  getProviders() {
    const dispatch = useDispatch();

    $.ajax({
      type: 'GET',
      url: 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers',
      success: (results) => {
        dispatch(updateProviders(results));
      },
      error: () => {
        dispatch(updateProviders([]));
    }});
  }
}

export default (new api());