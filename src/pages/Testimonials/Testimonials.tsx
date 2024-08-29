import Slider from "../Slider/Slider";

const Testimonials = () => {
  return (
    <div className="relative">
      <div className="container mx-auto">
        <div
          className="bg-accent-primary min-h-[710px] rounded-[40px]"
          data-aos="fade-up"
          data-aos-offset="fade-up"
        >
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px]">
            <h2 className="h2 text-white text-center mb-[80px]">
              Testimonials
            </h2>

            {/* slider */}
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
