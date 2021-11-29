import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Login } from './components/open-id-connect/Login';
import { Logout } from './components/open-id-connect/Logout';
import { Main } from './components/root/Main';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" caseSensitive={false} element={<Login />}></Route>
          <Route path="/logout" caseSensitive={false} element={<Logout />}></Route>
          <Route path="/*" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}




