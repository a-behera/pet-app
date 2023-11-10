import { useState } from 'react';
import styles from '../styles/styles.module.css';

const Form = ({ onSubmit }) => {
  const [animal, setAnimal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(animal);
  };

  return (
    <div className={styles.formCard}>
    <form onSubmit={handleSubmit}>
      <label>
        Choose an animal:
        <select value={animal} onChange={(e) => setAnimal(e.target.value)} className={styles.customSelect}>
        <option value="default">--selected--</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </label>
      <button type="submit" className={styles.customButton}>Submit</button>
    </form>
    </div>
  );
};

export default Form;
