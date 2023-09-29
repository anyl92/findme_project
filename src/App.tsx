import Main from "./Main/index";
import FindExercise from "./FindExercise/index";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/exercise" element={<FindExercise />} />
    </Routes>
  );
};

export default App;
