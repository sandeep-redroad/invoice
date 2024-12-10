import './App.css'
import Header from './Components/Header/Header'
import Login from './Pages/Login'

function App() {
    return (
        <>
            <Header />
            <div className="h-[calc(100vh-3.5rem)]">
                <Login />
            </div>
        </>
    )
}

export default App
