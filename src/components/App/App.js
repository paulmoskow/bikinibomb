import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NavPopup from '../NavPopup/NavPopup';

function App() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleMenuClick() {
    setIsBurgerMenuOpen(true);
  }

  function closeAllPopups() {
    setIsBurgerMenuOpen(false);
  }

  return (

    <div className="App">
        <Routes>
          <Route path="/bikinibomb" element={
            <>
              <Header onMenu={handleMenuClick}
              />
              <Main/>
              <Footer/>
            </>
          } />
        </Routes>
        <NavPopup isOpen={isBurgerMenuOpen}
          onClose={closeAllPopups}
        />
    </div>
  );
}

export default App;
