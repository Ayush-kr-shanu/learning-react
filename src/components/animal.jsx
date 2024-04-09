import React, { useState } from "react";

function Animal() {
  const [animals, setAnimals] = useState([]);
  const [inputAnimal, setInputAnimal] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addAnimal = () => {
    if (inputAnimal.trim() !== "") {
      setAnimals([...animals, inputAnimal]);
      setInputAnimal("");
    }
  };

  const removeAnimal = (index) => {
    const updatedAnimals = [...animals];
    updatedAnimals.splice(index, 1);
    setAnimals(updatedAnimals);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputAnimal(animals[index]);
  };

  const saveEdit = () => {
    const updatedAnimals = [...animals];
    updatedAnimals[editIndex] = inputAnimal;
    setAnimals(updatedAnimals);
    setEditIndex(null);
    setInputAnimal("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputAnimal}
        onChange={(e) => setInputAnimal(e.target.value)}
        placeholder="Enter Animal Name"
      />
      <button onClick={addAnimal}>Add Animal</button>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={inputAnimal}
                onChange={(e) => setInputAnimal(e.target.value)}
              />
            ) : (
              animal
            )}
            {editIndex === index ? (
              <button onClick={() => saveEdit(index)}>Save</button>
            ) : (
              <>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => removeAnimal(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Animal;
