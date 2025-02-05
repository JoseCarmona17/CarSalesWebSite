import { useState } from "react";
import { TbMailFilled } from "react-icons/tb";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [policyChecked, setPolicyChecked] = useState(false);
  const [errors, setErrors] = useState({ email: false, message: false });

  const handlePolicyChange = (e) => {
    if (!email || !message) {
      const newErrors = {
        email: email === "",
        message: message === "",
      };
      setErrors(newErrors);
      return;
    }
    setPolicyChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      email: email === "",
      message: message === "",
    };
    setErrors(newErrors);
    if (!newErrors.email && !newErrors.message) {
      // Submit the form
      console.log("Form submitted");
    }
  };

  return (
    <div>
      <div className="items-center text-center justify-center font-roboto">
        <h2 className="text-6xl text-title mb-3 mt-2 font-semibold text-[#222732]">Contact Us</h2>
        <p className="text-xl flex items-center justify-center mt-8">
          <TbMailFilled size={24} color="#c97c5d" className="mr-2" /> sales@angrypatsauto.com
        </p>
        <p className='text-3xl text-[#c97c5d] mt-8 font-bold'><a href="" className='text-black'>(123)</a> 456-78901</p>
        <p className="text-xl mt-8">Angry Pat's Auto, 210 MS-12 W, Kosciusko, MS 39090</p>
      </div>

      {/* formulario */}
      <section className="p-6 mt-25">
        <div className="flex justify-center items-center p-13 bg-[#eff3fa] rounded-4xl">
          <form className="w-full max-w-7xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <input
                className="bg-white border rounded-lg p-3 text-title text-gray-950 border-gray-300 shadow-2xs w-full"
                type="text"
                placeholder="Name"
              />
              <input
                className={`bg-white border rounded-lg p-3 text-title text-gray-950 border-gray-300 shadow-2xs w-full ${errors.email ? 'border-red-500 animate-pulse' : ''}`}
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="bg-white border rounded-lg p-3 text-title text-gray-950 border-gray-300 shadow-2xs w-full"
                type="tel"
                placeholder="Phone"
              />
            </div>
            <div className="mb-4">
              <textarea
                className={`bg-white border rounded-lg p-3 text-title text-gray-950 border-gray-300 shadow-2xs w-full h-50 ${errors.message ? 'border-red-500 animate-pulse' : ''}`}
                placeholder="Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
              <input
                  type="checkbox"
                  id="policy"
                  className="mr-2 h-5 w-5 text-orange-500 focus:ring-orange-500 border-gray-300 rounded checked:bg-orange-500"
                  checked={policyChecked}
                  onChange={handlePolicyChange}
                  onClick={(e) => {
                    if (!email || !message) {
                      e.preventDefault();
                      setErrors({
                        email: email === "",
                        message: message === "",
                      });
                    }
                  }}
                />
                <label htmlFor="policy" className="text-gray-700">
                  I accept the <a href="#" className="text-orange-500">privacy policy</a>
                </label>
              </div>
              <button
                className="mt-4 bg-[#c97c5d] text-white py-4 px-10 rounded-2xl text-2xl text-blod hover:bg-[#b86b50] transition cursor-pointer"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* mapa */}
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