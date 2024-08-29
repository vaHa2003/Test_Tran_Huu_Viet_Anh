import { BsArrowRight } from "react-icons/bs";
import { featuresData } from "../../data/data";

const Features = () => {
  const { list } = featuresData;
  return (
    <div className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2 className="h2 mb-[24px]">Features</h2>
          <div className="max-w-[700px] mx-auto">
            <p className="font-medium mx-[30px] mb-[74px] xl:mx-[70px]">
              Some of the features and advantages that we provide for those of
              you who store data in this Data Warehouse.
            </p>
          </div>
        </div>

        {/* 4 Features  */}
        <div className="grid grid-cols-1 gap-[40px] xl:grid-cols-2">
          {list.map((feature, index) => (
            <div
              key={index}
              className="w-full mx-auto flex flex-col items-center justify-center xl:flex-row xl:justify-start max-w-[530px] h-[358px] relative"
              data-aos="zoom-in"
            >
              <div className="flex items-center flex-col xl:flex-row">
                <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                  <img
                    src={feature.bgImage}
                    alt={`background feature ${index + 1}`}
                  />
                </div>
                <div className="max-w-[120px] xl:mr-7 xl:max-w-[230px]">
                  <img src={feature.image} alt={`feature icon ${index + 1}`} />
                </div>
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{feature.title}</h3>
                  <p className="italic text-[1rem] mb-4 text-[#4B5D68]">
                    {feature.description}
                  </p>
                  <button className="flex items-center justify-center gap-4 text-primary font-bold hover:text-violet-500 transition group">
                    {feature.linkText}
                    <BsArrowRight className="group-hover:ml-[5px] transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
