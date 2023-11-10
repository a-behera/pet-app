import { useState } from 'react';
import Form from '../components/Form';
import Display from '../components/Display';

export default function Home() {
  const [animalData, setAnimalData] = useState(null);

  const fetchData = async (animal) => {
    try {
      let response;
      let data;

      if (animal === 'cat') {
        response = await fetch('https://catfact.ninja/fact');
        data = await response.json();
        setAnimalData({ animal:animal, title: 'Cat Fact', fact: data.fact });
      } else if (animal === 'dog') {
        response = await fetch('https://dog.ceo/api/breeds/image/random');
        data = await response.json();
        setAnimalData({ animal:animal, title: 'Dog Image', image: data.message });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors or set a default state for the animalData
    }
  };
  
  return (
    <div>
      <h1>Animal Facts and Images</h1>
      <Form onSubmit={fetchData} />
      <Display data={animalData} />
    </div>
  );
}
