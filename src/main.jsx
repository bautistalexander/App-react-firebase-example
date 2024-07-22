import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
// import App from './App.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { ProfilePage } from './pages/ProfilePage.jsx';
import { SignoutPage } from './pages/SignoutPage.jsx';
import { PublicProfilePage } from './pages/PublicProfilePage.jsx';
import { ChooseUserPage } from './pages/ChooseUserPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/dashboard/profile' element={<ProfilePage />} />
      <Route path='/signout' element={<SignoutPage />} />
      <Route path='u/:username' element={<PublicProfilePage />} />
      <Route path='/choose-username' element={<ChooseUserPage />} />
    </Routes>
  </BrowserRouter>,
)
