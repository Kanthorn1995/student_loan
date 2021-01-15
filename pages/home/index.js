import Theme from "../../components/theme";
import Guard from "../../guards/guard";

const Home = (props) => {
  return <Theme {...props}>Home Page</Theme>;
};

export default Guard(Home);
