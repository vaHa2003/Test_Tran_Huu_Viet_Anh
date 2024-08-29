// import icons
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

import Feature1Img from "../assets/imgs/ImgFeature/feature1.png";
import Feature2Img from "../assets/imgs/ImgFeature/feature2.png";
import Feature3Img from "../assets/imgs/ImgFeature/feature3.png";
import Feature4Img from "../assets/imgs/ImgFeature/feature4.png";
import Avatar1Img from "../assets/imgs/avatar/avatar1.png";
import Avatar2Img from "../assets/imgs/avatar/avatar2.png";
import Avatar3Img from "../assets/imgs/avatar/avatar3.png";
import Feature1BgImg from "../assets/imgs/ImgFeatureBg/feature1_bg.png";
import Feature2BgImg from "../assets/imgs/ImgFeatureBg/feature2_bg.png";
import Feature3BgImg from "../assets/imgs/ImgFeatureBg/feature3_bg.png";
import Feature4BgImg from "../assets/imgs/ImgFeatureBg/feature4_bg.png";
import logo from "../assets/imgs/logo-v2.png";

export const featuresData = {
  title: "Features",
  subtitle:
    "Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Search Data",
      description:
        "Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "24 Hours Access",
      description:
        "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent..",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Security Code",
      description:
        "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password than you created, so only you can open the file.",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "John Fang",
    web: "wordfaang.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Jane Doe",
    web: "janedoee.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Jim Ferry",
    web: "jimjimf.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const TryFree = {
  title: "Try for free!",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: logo,
  address: "Warehouse Society, 234 Bahagia Ave Street PRBW 29281",
  email: "info@warehouse.project",
  phone: "1-232-3434 (Main)",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "DW News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign Up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: "© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.",
  icon: <BsChatDotsFill />,
};
