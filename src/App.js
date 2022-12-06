import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import Home from './components/pages/Home/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
