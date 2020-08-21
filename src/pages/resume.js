import { Document } from "react-pdf";
import Resume from "../assets/Resume.pdf";

const App = () => {
  return <Document file={Resume} />;
};

export default App;
