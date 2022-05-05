
import { Route, Routes, Navigate} from 'react-router-dom';
import './App.scss';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Blogpage from './Pages/Blogpage';
import Notfoundpage from './Pages/Notfoundpage'
import Layout from './Components/Layout';
import Singlepage from './Pages/Singlepage';
import Createpost from './Pages/Createpost';
import Edditpage from './Pages/Edditpage';
import LoginPage from '../src/Pages/Login'; 
import RequireAuth from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='about/*' element={<Aboutpage/>}>
          <Route path='contacts' element={<p> Our contacts  </p>} />
        <Route path='team' element={<p> Our team </p>} />
          </Route>
          <Route path='about-us' element={<Navigate to='/about' replace/>}/>
          <Route path='posts' element={<Blogpage/>}/>
          <Route path='posts/:id' element={<Singlepage/>}/>
          <Route path='posts/new' element={
          <RequireAuth>
            <Createpost/>
          </RequireAuth>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='posts/:id/edit' element={<Edditpage/>}/>
          <Route path='*' element={<Notfoundpage/>}/>
        </Route>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;


// * в строке 23 about/* нужна, если компонент с ссылкой создан отдельно
//  сейчас вложенные роуты указаны прямо здесь, поэтому * и / можно спокойно убрать 