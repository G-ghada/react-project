import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/Profile";
import profileImage from "./ProfilePhoto.jpg";

function App() {
  function HandleName(fullname) {
    alert(`my name is ${fullname}`);
  }
  return (
    <div className="App">
      <Profile
        fullname="Ghada Bousselmi"
        bio="web developper"
        profession="Graphic Designer"
        HandleName={HandleName}
      >
        <img
          src={profileImage}
          alt="image de ghada"
          style={{ height: "200px", width: "100" }}
        />
      </Profile>
    </div>
  );
}

export default App;
