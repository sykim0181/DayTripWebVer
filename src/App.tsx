import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>

  );
}

export default App;
