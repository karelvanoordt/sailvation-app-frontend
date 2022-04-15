const cruises = () => Promise.resolve({
    results: [
      {
        id: 1,
        user_id: 1,
        name: 'Titanic',
        description: 'The unsinkable',
        image: 'https://cdn.britannica.com/72/153172-050-EB2F2D95/Titanic.jpg?q=60'
      },
    ],
  });
  
  export default cruises;