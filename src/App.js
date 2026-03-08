import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { nom: 'Oussama', photo: '/user.png' };
  const listeCourses1 = ["Pain", "Lait", "Œufs"];
  const listeCourses2 = ["Pâtes", "Tomates", "Fromage"];

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Profil utilisateur={utilisateur} taille={150} />

      <h1>Liste des voitures</h1>
      <Voiture marque="OussamaCar" modele="Alpha" couleur="Rouge" />
      <Voiture marque="OussamaCar" modele="Beta" couleur="Noir" />
      <Voiture marque="OussamaCar" modele="Gamma" couleur="Blanc" />

      <h1>Liste de courses 1</h1>
      <ListeCourses elements={listeCourses1} />

      <h1>Liste de courses 2</h1>
      <ListeCourses elements={listeCourses2} />
    </div>
  );
}

export default App;