import './App.css';
import { Routes, Route } from 'react-router-dom';
import TodoPage from './pages/todoPage';
import LoginPage from './pages/loginPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='create' element={<TodoPage />} />
    </Routes>
  );
}

export default App;
