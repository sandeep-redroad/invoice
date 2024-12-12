import './App.css'
import Navbar from '@/Components/Header/Navbar'
import PageSidebar from '@/Components/Sidebar/PageSidebar'
import Login from './Pages/Login'
import {
    SidebarInset,
    SidebarProvider,
} from '@/components/ui/sidebar'



function App() {
    
    return (
        <>
            <SidebarProvider>
                <PageSidebar />
                <SidebarInset >
                    <Navbar />
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="aspect-video rounded-xl bg-red-200" />
                            <div className="aspect-video rounded-xl bg-red-200" />
                            <div className="aspect-video rounded-xl bg-red-200" />
                        </div>
                        <div className="min-h-[100vh] flex-1 rounded-xl bg-red-200 md:min-h-min" />
                    </div>
                </SidebarInset>
            </SidebarProvider>
            {/* <div className="h-[calc(100vh-3.5rem)]">
                <Login />
            </div> */}
        </>
        // <Login />
    )
}

export default App
