import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'

export default function Layout() {
  return (
    <div className="flex flex-col p-4 h-full space-y-4">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
