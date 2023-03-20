import {
    Home, About, CreateExam
} from './components/pages'

const routes = [
    { path: '/', element: <Home />, displayName: 'Home' },
    { path: '/about', element: <About />, displayName: 'About' },
    { path: '/create-exam', element: <CreateExam />, displayName: 'Create-Exam' },
    { path: '/secret-page', element: <h1>Secret Route</h1> },   // Omit the display name if not to be shown in header
]

export default routes

