import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeApp from './components/EmployeeApp';
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/employees" element={<EmployeeApp />} />
        <Route path="*" element={<Navigate to="/employees" replace />} />
      </Routes>
      ;
    </div>
  );
};

export default App;
