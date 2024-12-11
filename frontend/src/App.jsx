import {BrowserRouter, Route, Routes} from "react-router-dom"
//import { Home } from "./pages/Home"
//import { About } from "./pages/About"
import ProtectedRoute from './components/ProtectedRoute';
import { Error } from "./pages/Error"
//import { Footer } from "./components/Footer"
import { Logout } from "./pages/Logout"
import { AdminLayout } from "./components/layout/Admin-Layout"
import Navbar from "./components/Navbar/Navbar"
import { Voting } from "./pages/Voting/Voting"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Register } from "./pages/Register/Register"
import { Login } from "./pages/Login/Login";
import { Contact } from "./pages/Contact/Contact";
import { AdminCandidates } from "./pages/Admin-Candidate/Admin-Candidates";
import { AdminUsers } from "./pages/Admin-Users/Admin-Users";
import { AdminUpdate } from "./pages/Admin-Update/Admin-Update";
import { AdminAddCandidates } from "./pages/Admin-AddCandidate/Admin-AddCandidate";
import { AdminContacts } from "./pages/Admin-Contacts/Admin-Contacts";
import Footer from "./components/Footer/Footer";
import {Home} from "./pages/Home/Home"
import { About } from "./pages/About/About";
import { Verify } from "./pages/Verify/Verify";



function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        {/*<Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/voting" element={<Voting />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="*" element={<Error />}/>
          
          <Route path="/admin" element={<AdminLayout/>} >
              <Route path="users" element={<AdminUsers/>} />
              <Route path="contacts" element={<AdminContacts/>} />
              <Route path="users/:id/edit" element={<AdminUpdate/>} />
              <Route path="candidates" element={<AdminCandidates/>} />
              <Route path="candidates/add" element={<AdminAddCandidates/>} />

          </Route>

        </Routes>*/}
 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="*" element={<Error />}/>
        <Route path="/verify" element={<Verify />}/>
        
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/voting" element={<ProtectedRoute><Voting /></ProtectedRoute>} />
        {/*<Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />*/}

        <Route path="/admin" element={<AdminLayout/>} >
            <Route path="users" element={<AdminUsers/>} />
            <Route path="contacts" element={<AdminContacts/>} />
            <Route path="users/:id/edit" element={<AdminUpdate/>} />
            <Route path="candidates" element={<AdminCandidates/>} />
            <Route path="candidates/add" element={<AdminAddCandidates/>} />
        </Route>
       
        
      </Routes>
  
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
