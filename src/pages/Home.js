import Countries from "../components/Countries";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div className="home">
      <Navigation/>
      <Logo/>
      <Countries/>
    </div>
  );
};

export default Home;