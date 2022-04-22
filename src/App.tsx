import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './Containers/AdminPanel';
import Home from './Containers/Home';
import Register from './Containers/Register';

const App = () => {
  const title: string = 'Admin Panel';

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<AdminPanel title={title} />} />
          <Route path="/login" element={<Home title={title} />} />
          <Route path="/signup" element={<Register title={title} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
