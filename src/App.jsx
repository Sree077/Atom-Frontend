import { Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./pages/Main";
import AboutPage from "./pages/AboutPage";
import DownloadPage from "./pages/DownloadPage";
import CoursePage from "./pages/CoursePage";
import NewsPage from "./pages/NewsPage";
import GalleryPage from "./pages/GalleryPage";
import RegistrationForm from "./componets/RegistrationForm/RegistrationForm";

import GalleryAdd from "./adminPages/galleryAdd";
import AdHome from "./adminPages/AdHome";
import CourseAdd from "./adminPages/CourseAdd";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/downloads" element={<DownloadPage/>}/>
      <Route path="/courses" element={<CoursePage/>}/>
      <Route path="/news" element={<NewsPage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path="/registation" element={<RegistrationForm/>}/>

      <Route path="/admin" element={<AdHome/>} />
      <Route path="/admin/gallery/add" element={<GalleryAdd/>} />
      <Route path="/admin/course/add" element={<CourseAdd/>} />
    </Routes>
  );
}

export default App;
