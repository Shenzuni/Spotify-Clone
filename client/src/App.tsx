import AuthProvider from "context/authContext";
import PlayerProvider from "context/PlayerContext";

import MainScreen from "containers/MainScreen";

function App() {
  return (
    <AuthProvider>
      <PlayerProvider>
        <MainScreen />
      </PlayerProvider>
    </AuthProvider>  
  )
}

export default App;