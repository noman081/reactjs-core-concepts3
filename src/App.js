import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
    </div>
  );
}

function LoadUsers() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => setUsers(data.results));
  }, [])
  // console.log(users);
  return (
    <div>
      <h1>Load Some users</h1>
      {
        users.map(user => <User imgUrl={user.picture.large} fname={user.name.first} lname={user.name.last} email={user.email} phone={user.phone}></User>)
      }
    </div>
  )

}

function User(props) {
  return (
    <div className='user'>
      <img src={props.imgUrl} alt="" />
      <h3>Name: {props.fname} {props.lname}</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
