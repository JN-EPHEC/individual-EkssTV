import { useState, useEffect } from 'react';
import './App.css';

//Fonctions utilisées
import makeList from "./utils/makeList.tsx";
import deleteUser from './utils/deleteUser.tsx';
import loadData from './utils/loadData.tsx';
//Components
import UserForm from "./components/UserForm";


//Définition de d'un interface User pour le typage
import type { User } from './types/user.tsx';


function App() {
  const [data, setData] = useState<User[]>([]);

// 2. Appel API au montage du composant
  useEffect(() => {
    loadData(setData);
  }, []);
  return (
    
    <div className="container mt-4">
      <h1 className="text-center">Liste des étudiants</h1>
      <UserForm setData={setData} />
      <ul className="list-group row g-4 w-50 mx-auto"  id="listUsers">
        {makeList(data, (id) => deleteUser(id, setData))}
      </ul>
    </div>
  );
}

export default App
