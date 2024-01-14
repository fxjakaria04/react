import logo from './logo.svg';
import './App.css';

function App() {
  const friends = [
    {name: "Jakaria", Profession: "Freelancer", Duty: "7-10"},
    {name: "Shawon", Profession: "Shopkeper", Duty: "9-9"},
    {name: "Shoriful", Profession: "Rice mill oporator", Duty: "not fix"},
    {name: "Nurul-Amin", Profession: "Student", Duty: "not fix"},
    {name: "Asif", Profession: "Garments job", Duty: "day/night"},
    {name: "Mustari", Profession: "Student", Duty: "not-fix"},
    {name: "Rasel", Profession: "Student", Duty: "10-2"},
    {name: "Raju", Profession: "Student", Duty: "10-2"},
    {name: "Shopon", Profession: "Job", Duty: "9-10"}
  ];
  const friendsName = ["Jakaria", "Shawon", "Shoriful", "Nurul-Amin", "Asif", "Mustari", "Rasel", "Raju", "Shopon"];

 const Friend = props => (
  <h1>{props.name}</h1>
 );

 const Biginfo = info => (
  <div className="content-box">
    <h2>{info.name}</h2>
    <h2>{info.Profession}</h2>
    <h2>{info.Duty}</h2>
  </div>
 );

  return (
    <div className="container">
      {
        friendsName.map(fd => <Friend name={fd}></Friend>)
      }
      {
        friends.map(friend => <Biginfo name={friend.name} Profession={friend.Profession} Duty={friend.Duty}></Biginfo>)
      }

    </div>
  );

}


export default App;
