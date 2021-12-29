import React, {useState} from 'react';
import List from './components/List'
import './App.css';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}
function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'lebron james',
      age: 36,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7sWdyXgR-vlMNcz5zR9HX8yANkhnUxccug&usqp=CAU',
      note: 'One of the goats'
    }
  ])
  

  return (
    <div className="App">
      <h1>people invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
