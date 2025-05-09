import { useState } from "react";
import "./App.css";

function App() {
  
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: './src/assets/images/baymax.png',
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: './src/assets/images/Olaf.png',
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "./src/assets/images/Woody.png",
    },
  ]);

  const [browser, setBrowser] = useState('');

  const totalStrength = team.reduce((acc, currVal) => {
    return acc + currVal.strength;
  }, 0);

  const totalAgility = team.reduce((acc, currVal) => {
    return acc + currVal.agility;
  }, 0);
  
  const handleAddFighter = (event, fighter) => {
    if (money < fighter.price) {
      const browserMessage = "not enough money!"
      console.log('Not enough money!')
      return
    }; 

    setTeam([...team, fighter]);
    const filteredFighters = zombieFighters.filter(zombieFighter => {
      return zombieFighter.id !== fighter.id
    });
    setZombieFighters(filteredFighters);
    setMoney((prevState) => prevState - fighter.price);

  };

  const handleRemoveFighter = (event, fighter) => {
    const filteredTeam = team.filter(teamMember => {
      return teamMember.id !== fighter.id
    })
    setTeam(filteredTeam);
    setZombieFighters([...zombieFighters, fighter]);
    setMoney((prevState) => prevState + fighter.price);
  }
  
  const browserTimer = () => {
    if (browser !== '') {
      setTimeout(5000)
      setBrowser('')
    } 
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>My Team</h2>
      <h3>{browser}</h3>
      {team.length === 0 ? <h3>Pick some team members!</h3> : <ul>
        {team.map((teamMember) => {
          return (
              <li key={teamMember.id}>
                <img src={teamMember.img} />
                <p>Name: {teamMember.name}</p>
                <p>Price: {teamMember.price}</p>
                <p>Strength: {teamMember.strength}</p>
                <p>Agility: {teamMember.agility}</p>
                <button onClick={(event) => handleRemoveFighter(event, teamMember)}>Remove Fighter</button>
              </li>
            
          );
        })}
      </ul>}
      <h2>Availible Fighters</h2>
      <ul>
        {zombieFighters.map((zombieFighter) => {
          return (
              <li key={zombieFighter.id}>
                <img src={zombieFighter.img} />
                <p>Name: {zombieFighter.name}</p>
                <p>Price: {zombieFighter.price}</p>
                <p>Strength: {zombieFighter.strength}</p>
                <p>Agility: {zombieFighter.agility}</p>
              <button onClick={(event)=> handleAddFighter(event, zombieFighter)}>Add Fighter</button>
              </li>
          );
        })}
      </ul>
    </>
  );
}
export default App;
