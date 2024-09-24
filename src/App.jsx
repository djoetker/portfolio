import './App.css';
import AuthContextProvider from './context/AuthContext';
import PrivateRoute from './service/PrivateRoute';
import Portfolio from './pages/portfolio/Portfolio';
import Welcome from './pages/welcome/Welcome';
import { SectionVisibilityProvider } from './context/SectionVisibility';

import { Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';

function App() {

  return (
    <AuthContextProvider>
      <SectionVisibilityProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route element={<PrivateRoute />}>
            <Route path='portfolio' element={<Layout />} >

              <Route index element={<Portfolio />} />
            </Route>
          </Route>

        </Routes>
      </SectionVisibilityProvider>
    </AuthContextProvider>
  )
}

export default App;
