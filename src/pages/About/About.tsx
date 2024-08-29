const About = () => {
  return (
    <div
      className="my-[30px] xl:mt-[100px]"
      data-aos="fade-up"
      data-aos-offest="400"
    >
      <div className="container mx-auto">
        <div className="bg-[#f7e5f3] rounded-[50px] px-12 flex min-h-[570px] flex-col xl:flex-row items-center xl:items-center pb-12 gap-7">
          <div data-aos="fade-up-left">
            <img
              src="https://warehouse-blue.vercel.app/static/media/about.1c3d05a0bef752a3afb9.png"
              alt="img about"
            />
          </div>

          <div className="flex-1 text-center xl:text-left" data-aos="fade-up">
            <h2 className="h2 mb-12">We are a high-level data storage bank</h2>
            <p className="">
              The place to store various data that you can access at any time
              through the internet and where you can carry it. This very
              flexible storage area has a high level of security. To enter into
              your own data you must enter the password that you created when
              you registered in this Data Warehouse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
