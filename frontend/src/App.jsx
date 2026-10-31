import HomePage from "./Pages/HomePage.jsx";
import CreateNote from "./Pages/CreateNote.jsx"
import NoteDetails from "./Pages/NoteDetails.jsx";
import { Routes, Route } from "react-router";
import toast from "react-hot-toast";

function App() {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/details/:id" element={<NoteDetails />} />
      </Routes>
    </div>
  );
}

export default App;