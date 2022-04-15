import apiResults from './api';

const cruiseFetchResults = () => apiResults.then((results) => results.cruises);
const destinationFetchResults = () => apiResults.then((results) => results.destinations);

export default {
  cruiseFetchResults,
  destinationFetchResults,
};
