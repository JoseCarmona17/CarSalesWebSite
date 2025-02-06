import { CheckCircle } from "lucide-react";
import CarGallery from "../components/CarGallery";
import { Link } from 'react-router-dom';

export const MainPage = () => {

  const hours = [
    { day: "Monday", time: "9:30 AM–5:30 PM" },
    { day: "Tuesday", time: "9:30 AM–5:30 PM" },
    { day: "Wednesday", time: "9:30 AM–5:30 PM" },
    { day: "Thursday", time: "9:30 AM–5:30 PM" },
    { day: "Friday", time: "9:30 AM–5:30 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div>
      {/* About US */}
      <img src="/8-PHOTO-1.webp" alt="" />
      <div className="mb-2">
        <h2 className="text-center text-5xl font-bold text-title mb-3 mt-2">About Us</h2>
        <p className="text-xl text-center">Angry Pat’s Auto has been serving Illinois area for over 15 years. We seek to offer vehicles that you can afford and will adequately suit your transportation needs. <br />
          We have thousands satisfied costumers who trust us. <br />
          Our slogan is “Angry Pat’s Auto, where you come first” That holds true from beginning to end of your car buying experience. We take care in hand picking and purchasing best used cars. Before we make our cars available for you, we go with them through a 55 point inspection. We take pride of giving you the best price.</p>
      </div>

      {/* Inventory Section */}
      <div className="flex justify-center items-start min-h-[60vh] bg-gradient-to-r from-[#c47a57] to-[#936363] mt-0">
        <div className="bg-white shadow-lg mb-6 overflow-hidden w-full max-w-[450px]">
          {/* Imagen del auto */}
          <img src="/7-PHOTO.webp" alt="Car" className="w-full h-auto" />

          {/* Contenido de la tarjeta */}
          <div className="p-6 text-center mt-6">
            <h3 className="text-3xl font-bold text-gray-800">Inventory</h3>
            <Link to="/search">
              <button className="mt-6 mb-7 bg-[#c97c5d] text-white py-3 px-6 rounded-xl text-2xl hover:bg-[#b86b50] transition cursor-pointer">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className="bg-[#f8f7f7]">
        <div className="flex justify-center space-x-6 text-gray-900 text-xl">
          <div className="flex items-center space-x-2 mt-20">
            <CheckCircle className="text-[#c97c5d]" size={20} />
            <span>We guarantee a good car</span>
          </div>
          <div className="flex items-center space-x-2 mt-20">
            <CheckCircle className="text-[#c97c5d]" size={20} />
            <span>We guarantee safe delivery</span>
          </div>
          <div className="flex items-center space-x-2 mt-20">
            <CheckCircle className="text-[#c97c5d]" size={20} />
            <span>Good prices</span>
          </div>

        </div>

        <div>
          <div className="ml-6 bg-[#f8f7f7]">
            <p className="text-[#de9471] text-xl mb-2">Handy picked</p>
            <p className="text-6xl font-extrabold text-[#222732]">Featured Listings</p>
          </div>

          <CarGallery />
        </div>

        <div>
          <Link to="/search">
            <button className="mt-4 mb-15 bg-[#c97c5d] text-white py-3 px-6 rounded-lg text-xl hover:bg-[#b86b50] transition ml-20 cursor-pointer">
              View 20 Used
            </button>
          </Link>
        </div>
      </div>

      <div className="font-blod ml-6 text-center p-4">
        <p className="text-4xl font-semibold">Get in Touch</p>
        <p className="text-2xl font-semibold">Contact our Sales Departament</p>
        <p className='text-[#c97c5d] text-5xl font-extrabold mb-6'><a>(123)</a> 456-78901</p>
      </div>

      <div className="mx-auto mt-10 mb-5">
        <table className="w-full text-left text-black border-collapse">
          <tbody>
            {hours.map((item, index) => (
              <tr
                key={index}
                className={`px-4 py-2 ${index % 2 === 0 ? "bg-gradient-to-r from-[#c47a57] to-[#936363]" : "bg-gradient-to-r from-[#c47a57] to-[#936363]"
                  }`}
              >
                <td className="px-4 py-3 text-2xl">{item.day}</td>
                <td className="px-4 py-3 text-2xl">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-8 p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.804248394606!2d-89.5939341847717!3d33.05737698089974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862a7e5e8b8b5e6d%3A0x1d0c2e3f9b3c8f3a!2sAngry%20Pat's%20Auto!5e0!3m2!1ses!2sco!4v1630717693777!5m2!1ses!2sco"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>



    </div>
  );
};