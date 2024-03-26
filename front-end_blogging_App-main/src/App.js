import './App.css';

import HomeComponent from './component/HomeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import AddBlog from './pages/AddBlogPage';
import RegisterPage from './pages/RegisterPage'
import ContactPage from './pages/ContactPage'
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import ErrorPage from './pages/ErrorPage'
import LogoutPage from './pages/LogoutPage';
import AuthProvider from './security/AuthContext';
import BlogPage from './pages/BlogPage';


function App() {
  return (
    <div className="App">
     <AuthProvider>
    
     <BrowserRouter>
     <HeaderComponent/>
     
      <Routes>
      {/* <Route exact path="/" component={<Dummy />} /> */}
      <Route path="/" element={<HomeComponent />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/add" element={<AddBlog />} />
     <Route path="/register" element={< RegisterPage  />} />
     <Route path="/contact" element={< ContactPage  />} />
     <Route path="/logout" element={< LogoutPage  />} />
     <Route path="*" element={< ErrorPage  />} />
     <Route path="/post/:id" element={< BlogPage  />} />

    </Routes>
     
      </BrowserRouter>

    </AuthProvider>
     
    </div>

  );
}

export default App;
