import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        draggable
      />
      <AppRoutes />
    </div>
  )
}

export default App
