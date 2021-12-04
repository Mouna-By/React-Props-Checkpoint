
import './App.css';
import Profile from './profile/Profile';

function App() {
  
  return (
    <div className="App">
    <Profile FullName= "Mina" Bio= "This is my Bio" Profession= "web developper" >
    <img style={{height:'300px'}} className="img" src="https://fnadepape.org/wp-content/uploads/2018/07/avatar-1577909_960_720.png" alt="profile pic"></img>
    
    </Profile>
  
    </div>
  );
}

export default App;
