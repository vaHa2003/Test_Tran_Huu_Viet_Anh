import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CopyRight from "../CopyRight/CopyRight";
import Testimonials from "../Testimonials/Testimonials";
import TryForFree from "../TryForFree/TryForFree";

const Home = () => {
  return (
    <div className="lg:h-[900px] py-12">
      <Header />
      <Banner />
      <About />
      <Features />
      <Testimonials />
      <TryForFree />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Home;
