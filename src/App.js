import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from './Pages/MainPags/Home';
import Header from './Components/Header/Header';
import Doctors from './Pages/MainPags/Doctors';
import DoctorsCategory from './Components/DoctorsCategory';
import Footer from './Components/Footer/Footer';
import Specialties from './Pages/MainPags/Specialties';
import Support from './Pages/MainPags/Support';
import ShowDoctor from './Components/InputSearch/ShowDoctor';
import styled from 'styled-components';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ScrollUp from './Components/ScrollUp';

function App() {
  return (
    <AppStyle>
      <Router>
        <GlobalStyle />
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/doctors"} element={<Doctors />} />
            <Route path={"/category/:id"} element={<DoctorsCategory />} />
            <Route path={"/specialties"} element={<Specialties />} />
            <Route path={"/support"} element={<Support />} />
            <Route path={"/show_doctor/:id"} element={<ShowDoctor />} />

            {/* Protected Routes */}
            <Route path={'/dashboard/adddoctor'} element={<AddDoctor />} />

          </Routes>
          <ScrollUp />
          <Footer />
      </Router>
    </AppStyle>
  );
}

const AppStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;

export default App;
