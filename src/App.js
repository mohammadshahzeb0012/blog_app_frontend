import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import LoginPage from './feature/auth/LoginPage';
import SignupPage from './feature/auth/SignupPage';
import Home from './Home';
import CreateBlog from './feature/blog/CreateBlog';
import MyBlogs from './feature/blog/MyBlogs';
import Profile from './feature/profile';
import EditProfile from './feature/profile/EditProfile';

const LazyLoadingWrapper = ({ Component }) => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Component />
    </Suspense>
  );
};


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route 
       path='/'
       element={<LazyLoadingWrapper Component={Home}/>}
     />
     <Route 
       path='/login'
       element={<LazyLoadingWrapper Component={LoginPage}/>}
     />
     <Route 
       path='/signup'
       element={<LazyLoadingWrapper Component={SignupPage}/>}
     />
     <Route 
       path='/profile'
       element={<LazyLoadingWrapper Component={Profile}/>}
     />
     <Route 
       path='/EditProfile'
       element={<LazyLoadingWrapper Component={EditProfile}/>}
     />
     <Route 
       path='/createblog'
       element={<LazyLoadingWrapper Component={CreateBlog}/>}
     />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
