import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './components/pages/HomePage';
import PlacePage from './components/pages/PlacePage';
import PostPage from './components/pages/PostPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/place' element={<PlacePage />}/>
          <Route path='/post' element={<PostPage />}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>

  );
}

export default App;
