const apiResults = () => Promise.resolve({
  cruises: [
    {
      id: 1,
      name: 'Titanic',
      description: 'The Unsinkable',
      image: 'https://cdn.britannica.com/72/153172-050-EB2F2D95/Titanic.jpg?q=60',
      user_id: 1,
    },
  ],
  destinations: [
    {
      country: 'Atlantis',
      city: 'Capital of Atlantis',
      image: 'https://cdn.britannica.com/72/153172-050-EB2F2D95/Titanic.jpg?q=60',
      departureCity: 'Mu',
      days: 15,
      price: 100,
    },
  ],
});

export default apiResults;
