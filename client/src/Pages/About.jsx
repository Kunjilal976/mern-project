import React from "react";
import { Link } from "react-router-dom";
import creator1 from "./../assets/creator1.jpg";
import creator2 from "./../assets/creator2.jpg";
import creator3 from "./../assets/creator3.jpeg"


export default function About(email1, linkedIn1) {
  email1 = "kunjilal976@gmail.com";
  linkedIn1 = "https://www.linkedin.com/in/kunji-lal-meena-560b59253";

  const sendEmail1 = () => {
    window.open(`mailto:${email1}`, "_blank");
  };

  const openLinkedIn1 = () => {
    window.open(linkedIn1, "_blank ");
  };

  return (
    <div className="min-h-screen text-white flex flex-col ">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">About Our Website</h2>
        <p className="text-lg mb-8">
        RoomieRent is a leading real estate agency that specializes in helping clients buy, sell, 
        and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated 
        to providing exceptional service and making the buying and selling process as smooth as possible.
        </p>
        <h1 className="text-3xl font-bold mb-8 text-blue-500">About Us</h1>
        <p className="text-lg mb-8">
          Welcome to our website! Our mission is to help our clients achieve their real estate goals by providing expert advice, 
          personalized service, and a deep understanding of the local market.Whether you are looking to buy, sell, or rent a property, 
          we are here to help you every step of the way.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Meet the Creators</h2>
        <div className="flex flex-col justify-around mb-8">
          <div className="flex flex-col items-center">

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
              <div>
                <img src={creator1} alt="Creator 1" className="w-[200px] h-[200px] rounded-full mb-4"/>
              </div>
              <div>
          <h3 className="text-xl font-bold mb-2 text-red-300">Kunji Lal Meena</h3>
              <p>I'm a passionate MERN stack developer with a knack for crafting robust and efficient web applications. With a strong 
                foundation in JavaScript, I specialize in building dynamic and responsive websites using MongoDB, Express.js, React.js, and Node.js.</p>
                <p>My journey into the world of web development began with a deep curiosity and a desire to create meaningful digital experiences.
                   I've honed my skills through hands-on projects and continuous learning, allowing me to stay updated with the latest trends and technologies in the industry.
                   </p>
              <p className="text-semibold text-blue-700">For any query contact below</p>
               <ul className="flex gap-2 list-none ">
                 <li><Link href="/" onClick={sendEmail1}className="w-8 h-8 flex gap-2 rounded-full pt-[6px] hover:text-blue-500">
                    <i className="fa fa-envelope"></i></Link>
                 </li>
                 <li><Link href="/" onClick={openLinkedIn1} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500">
                    <i className="fa fa-linkedin"></i></Link>
                 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around mb-8">
          <div className="flex flex-col items-center">

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
              <div>
                <img src={creator2} alt="Creator 1" className="w-[200px] h-[200px] rounded-full mb-4"/>
              </div>
              <div>
          <h3 className="text-xl font-bold mb-2 text-red-300">Indrasen Chauhan</h3>
              <p>I'm a passionate MERN stack developer with a knack for crafting robust and efficient web applications. With a strong 
                foundation in JavaScript, I specialize in building dynamic and responsive websites using MongoDB, Express.js, React.js, and Node.js.</p>
                <p>My journey into the world of web development began with a deep curiosity and a desire to create meaningful digital experiences.
                   I've honed my skills through hands-on projects and continuous learning, allowing me to stay updated with the latest trends and technologies in the industry.
                   </p>
              <p className="text-semibold text-blue-700">For any query contact below</p>
               <ul className="flex gap-2 list-none ">
                 <li><Link href="/" onClick={sendEmail1}className="w-8 h-8 flex gap-2 rounded-full pt-[6px] hover:text-blue-500">
                    <i className="fa fa-envelope"></i></Link>
                 </li>
                 <li><Link href="/" onClick={openLinkedIn1} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500">
                    <i className="fa fa-linkedin"></i></Link>
                 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around mb-8">
          <div className="flex flex-col items-center">

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
              <div>
                <img src={creator3} alt="Creator 1" className="w-[200px] h-[200px] rounded-full mb-4"/>
              </div>
              <div>
          <h3 className="text-xl font-bold mb-2 text-red-300">Sarthak Mishra</h3>
              <p>I'm a passionate MERN stack developer with a knack for crafting robust and efficient web applications. With a strong 
                foundation in JavaScript, I specialize in building dynamic and responsive websites using MongoDB, Express.js, React.js, and Node.js.</p>
                <p>My journey into the world of web development began with a deep curiosity and a desire to create meaningful digital experiences.
                   I've honed my skills through hands-on projects and continuous learning, allowing me to stay updated with the latest trends and technologies in the industry.
                   </p>
              <p className="text-semibold text-blue-700">For any query contact below</p>
               <ul className="flex gap-2 list-none ">
                 <li><Link href="/" onClick={sendEmail1}className="w-8 h-8 flex gap-2 rounded-full pt-[6px] hover:text-blue-500">
                    <i className="fa fa-envelope"></i></Link>
                 </li>
                 <li><Link href="/" onClick={openLinkedIn1} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500">
                    <i className="fa fa-linkedin"></i></Link>
                 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
