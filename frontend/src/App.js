import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register';
import Nav from './components/nav/Nav';
import NotFound from './components/notFound/NotFound';
import AddShopItem from './components/addShopItem/AddShopItem';
import AdminPanel from './components/adminPanel/AdminPanel';
import UserPanel from './components/userPanel/UserPanel';
import CartPanel from './components/cartPanel/CartPanel';



function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [id, setid] = useState(localStorage.getItem('id'));
  const [privilage, setPrivilage] = useState(null);
  let render;

  useEffect(() => {
    if (privilage === null) setPrivilage(localStorage.getItem('privilage'));
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    }

    function checkLoginStatus() {
      if (id != null) {
        setIsLogged(true);
      }
    }

    checkLoginStatus();
  }, [privilage]);


  let loggedContent = () => {
    return (<div className="dark wrapper">
      <Nav setIsLogged={setIsLogged} />
      <div className="content">
        <Switch>
          {
            privilage === "admin" ? <>
              <Route exact path='/' element={<AdminPanel />} />
              <Route exact path='/addShopItem' element={<AddShopItem />} />
            </> : ""
          }
          {
            privilage === "user" ? <>
              <Route exact path='/' element={<UserPanel />} />
              <Route exact path='/cart' element={<CartPanel />} />
            </> : ""
          }
          <Route path='*' element={<NotFound />} />
        </Switch>
      </div>
    </div>)
  };

  let notLoggedContent = () => {
    return (<div className="wrapper">
      <Switch>
        <Route exact path='/' element={<Login setprivilage={setPrivilage} setIsLogged={setIsLogged} />} />
        <Route exact path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Switch>
    </div>)
  };
  if (!isLogged) {
    render = notLoggedContent();
  } else {
    render = loggedContent();
  }



  return (
    <Router>
      { render}
    </Router>
  );
}

export default App;
