import { Route, Router } from 'wouter'
import DefaultLayout from './layouts/default'
import Home from './pages/home'

export default function App() {
  return (
    <DefaultLayout>
      <Router>
        <Route path='/:path*' component={Home} />
      </Router>
    </DefaultLayout>
  )
}
