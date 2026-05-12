import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CategorySelect from './pages/CategorySelect'
import GameLauncher from './pages/GameLauncher'
import QuizService from './pages/QuizService'
import OmOss from './pages/OmOss'
import Kontakt from './pages/Kontakt'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"                          element={<Home />} />
        <Route path="/eget"                      element={<QuizService />} />
        <Route path="/quiz/:category"            element={<CategorySelect />} />
        <Route path="/quiz/:category/:packId"    element={<GameLauncher />} />
        <Route path="/om-oss"                    element={<OmOss />} />
        <Route path="/kontakt"                   element={<Kontakt />} />
      </Routes>
    </>
  )
}

export default App
