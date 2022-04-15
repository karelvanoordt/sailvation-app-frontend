import cruises from './api';

const fetchingResults = () => {
    cruises().then((results) => results)
};

export default fetchingResults