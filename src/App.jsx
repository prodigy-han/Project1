import React from 'react';
import CountryCard from './components/CountryCard';
import './App.css';

const countries = [
  { name: 'France', imageUrl: '/images/france.jpg', visitUrl: 'https://en.parisinfo.com/' },
  { name: 'Japan', imageUrl: '/images/japan.jpg', visitUrl: 'https://www.japan.travel/' },
  { name: 'Australia', imageUrl: '/images/australia.jpg', visitUrl: 'https://www.australia.com/' },
  { name: 'Canada', imageUrl: '/images/canada.jpg', visitUrl: 'https://www.canada.ca/en.html' },
  { name: 'Brazil', imageUrl: '/images/brazil.jpg', visitUrl: 'https://www.visitbrasil.com/' },
  { name: 'Italy', imageUrl: '/images/italy.jpg', visitUrl: 'https://www.italia.it/en' },
  { name: 'India', imageUrl: '/images/india.jpg', visitUrl: 'https://www.incredibleindia.org/' },
  { name: 'South Africa', imageUrl: '/images/south-africa.jpg', visitUrl: 'https://www.southafrica.net/' },
  { name: 'Mexico', imageUrl: '/images/mexico.jpg', visitUrl: 'https://www.visitmexico.com/' },
  { name: 'Thailand', imageUrl: '/images/thailand.jpg', visitUrl: 'https://www.tourismthailand.org/' },
];

const App = () => {
  return (
    <div className="app">
      <h1>Passport to the World</h1>
      <h3>Passport to the World is an event where people from different regions around the world set up 
        a designated table to represent their countries' food, cultures and tradition. However, we will
        do that on a virtual website now!</h3>
      <div className="card-grid">
        {countries.map((country) => (
          <CountryCard
            key={country.name}
            country={country.name}
            imageUrl={country.imageUrl}
            visitUrl={country.visitUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;