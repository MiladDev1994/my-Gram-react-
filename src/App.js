import {Route , Routes} from "react-router-dom";
import Login from "./components/login";
import Chats from "./components/Chats";


import AuthContextProvider from "./context/AuthContextProvider";
function App() {





  return (
      <AuthContextProvider>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/chats" element={<Chats />} />
          </Routes>
      </AuthContextProvider>

  );
}

export default App;
