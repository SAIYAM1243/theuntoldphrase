import { Routes, Route, Outlet } from "react-router-dom";
import {
  BlogDetails,
  CategoriesPage,
  Home,
  LoginPage,
  SignupPage,
  WriterPage,
} from "./pages";
import Loading from "./components/Loading";
import { Footer, Navbar } from "./components";
import useStore from "./store";
import About from "./pages/About";
import Team from "./pages/Team";
import Submission from "./pages/Submission";

function Layout() {
  return (
    <div className='w-full flex flex-col min-h-screen'>
      <div className="w-full flex flex-col px-4 md:px-10 2xl:px-28">
        <Navbar />
      </div>
      <div className='flex-1 px-4 md:px-10 2xl:px-28'>
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const { theme, isLoading } = useStore();

  return (
    <main className={theme} >
      <div className={`w-full min-h-sreen relative dark:bg-[#020b19] bg-white`}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<CategoriesPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/submission' element={<Submission />} />
            <Route path='/team' element={<Team />} />
            <Route path='/:slug/:id?' element={<BlogDetails />} />
            <Route path='/writer/:id' element={<WriterPage />} />
          </Route>

          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signin' element={<LoginPage />} />
        </Routes>

        {isLoading && <Loading />}
      </div>
    </main>
  );
}

export default App;