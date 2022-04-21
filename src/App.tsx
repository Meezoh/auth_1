import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './Containers/AdminPanel';
import Home from './Containers/Home';
import Register from './Containers/Register';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<AdminPanel />} />
          <Route path="/login" element={<Home />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
