import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Review from './components/Review/Review'
import Dashboard from './components/Dashboard/Dashboard'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import './App.css';
import Error from './components/Error/Error';


function App() {
  return (
    <div className="App">
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/review' element={<Review></Review>} ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/review' element={<Review></Review>} ></Route>
        <Route path='/*' element={<Error></Error>} ></Route>

      </Routes>

    </div>
  );
}

export default App;
