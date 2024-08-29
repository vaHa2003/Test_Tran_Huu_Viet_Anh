import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./router";

function App() {
  AOS.init({
    duration: 1800,
    offset: 0,
  });
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/signin" element={<SignIn />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/profile/post" element={<Post />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </Router>
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
