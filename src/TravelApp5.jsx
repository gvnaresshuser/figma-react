import { useState } from "react";
import Swal from "sweetalert2";

import { User, Calendar, Settings, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineDisconnect } from "react-icons/ai";
import { TbHttpConnectOff } from "react-icons/tb";
import { FaOm } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { AiFillDingtalkCircle } from "react-icons/ai";

//ResponsiveLayout.jsx as starting template
//https://www.figma.com/design/4zIRy3GEwII1bysHJNsZ4E/Travelers-%7C-Landing-Page---Mobile-App--Community-?node-id=315-21&p=f&t=0aZNkspCRJXZ9RoL-0

const TravelApp5 = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
 const handleMenuClick = (label) => {
        Swal.fire({
            title: "You clicked",
            text: label,
            icon: "success",
            confirmButtonColor: "#E7AC72",

            background: "linear-gradient(to right, #e4a97b, #4CAF50, #1E88E5)",
            color: "#ffffff",
        });
    };
  return (

      <div className="w-full h-full max-w-screen-xl mx-auto px-4  overflow-x-hidden
    bg-gradient-to-r from-[#1a1d27] via-[#0e1c0f] to-[#1b1c02]"> 
   

      {/* ================= HEADER ================= */}
          {/* ================= HEADER ================= */}
          <header className="relative w-full min-h-[80px] z-50">

              {/* TOP BAR */}
              <div className="flex items-center justify-between py-4 px-2 md:px-4">

                  {/* LOGO */}
                  <div className="z-50">
                      <AiFillDingtalkCircle className="w-15 h-15 md:w-15 md:h-15 text-amber-50" />
                  </div>

                  {/* DESKTOP MENU */}
                  <div className="hidden md:flex items-center gap-6 text-white">

                      <div onClick={() => handleMenuClick("Home")} className="cursor-pointer">
                          Home
                      </div>

                      <div onClick={() => handleMenuClick("About Us")} className="cursor-pointer">
                          About Us
                      </div>

                      <div onClick={() => handleMenuClick("Premium")} className="cursor-pointer">
                          Premium
                      </div>

                      <div onClick={() => handleMenuClick("Blogs")} className="cursor-pointer">
                          Blogs
                      </div>

                      <div
                          onClick={() => handleMenuClick("Explore")}
                          className="px-4 py-1 border border-white rounded-xl cursor-pointer"
                      >
                          Explore
                      </div>

                  </div>

                  {/* MOBILE HAMBURGER */}
                  {/* MOBILE MENU BUTTON */}
                  <div
                      className="md:hidden cursor-pointer z-50 text-white"
                      onClick={() => setMenuOpen(!menuOpen)}
                  >

                      {menuOpen ? (

                          /* CROSS */
                          <div className="text-3xl leading-none">
                              ✕
                          </div>

                      ) : (

                          /* HAMBURGER */
                          <div className="flex flex-col gap-1">
                              <span className="w-6 h-[2px] bg-white"></span>
                              <span className="w-6 h-[2px] bg-white"></span>
                              <span className="w-6 h-[2px] bg-white"></span>
                          </div>

                      )}

                  </div>

              </div>

              {/* MOBILE MENU */}
              {menuOpen && (
                  <div
                      className="
        fixed inset-0
        bg-gradient-to-r
        from-[#e4a97b]
        via-[#4CAF50]
        to-[#1E88E5]

        flex flex-col
        items-center
        justify-center
        gap-6

        text-white
        text-xl
        z-40">

                      <div
                          onClick={() => {
                              handleMenuClick("Home");
                              setMenuOpen(false);
                          }}
                          className="cursor-pointer"
                      >
                          Home
                      </div>

                      <div
                          onClick={() => {
                              handleMenuClick("About Us");
                              setMenuOpen(false);
                          }}
                          className="cursor-pointer"
                      >
                          About Us
                      </div>

                      <div
                          onClick={() => {
                              handleMenuClick("Premium");
                              setMenuOpen(false);
                          }}
                          className="cursor-pointer"
                      >
                          Premium
                      </div>

                      <div
                          onClick={() => {
                              handleMenuClick("Blogs");
                              setMenuOpen(false);
                          }}
                          className="cursor-pointer"
                      >
                          Blogs
                      </div>

                      <div
                          onClick={() => {
                              handleMenuClick("Explore");
                              setMenuOpen(false);
                          }}
                          className="px-6 py-2 border border-white rounded-xl cursor-pointer"
                      >
                          Explore
                      </div>

                  </div>
              )}
          </header>

      {/* ================= CONTENT ================= */}
          <section className="mt-6 bg-gradient-to-r from-[#1a1d27] via-[#0e1c0f] to-[#1b1c02]">

              {/* FLEX RESPONSIVE BLOCK */}
              <div className="flex flex-col md:flex-row gap-4 min-h-[500px]">

                  {/* LEFT SIDE */}
                  <div className="flex-1 bg-gradient-to-r from-[#1a1d27] via-[#0e1c0f] to-[#1b1c02] rounded-2xl 
                  p-4 flex flex-col gap-2">

                     
                      {/* ROW 1 */}
                      <div className="flex justify-end items-center bg-gradient-to-r from-[#1a1d27] via-[#0e1c0f] to-[#1b1c02] rounded-xl p-4 min-h-[120px] shadow-sm overflow-hidden">

                          {/* SVG GROUP */}
                          <div
                              className="
                                relative

                                w-[90px] h-[82px]
                                sm:w-[110px] sm:h-[100px]
                                md:w-[132px] md:h-[120px]
                                ">

                              {/* MAIN STAR */}
                              <svg
                                  className="
                                    absolute

                                    left-[12px] top-0
                                    w-[62px] h-[62px]

                                    sm:left-[16px]
                                    sm:w-[76px] sm:h-[76px]

                                    md:left-[20px]
                                    md:w-[91px] md:h-[91px]
                                "
                                  viewBox="0 0 91 91"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M1.28227 41.0359C0.474587 40.9294 -0.0936862 40.1884 0.0128591 39.3807C0.119318 38.5737 0.860302 38.0054 1.66799 38.112L14.0205 39.7414C14.9998 39.8706 15.9383 39.9506 16.8325 39.9843L16.8714 39.9861C17.7918 40.0198 18.7221 40.0091 19.6579 39.9573C26.8415 39.556 33.514 36.5857 38.6118 31.8626C43.6189 27.2239 47.1044 20.89 48.0615 13.6348L49.691 1.28232C49.7975 0.474634 50.5385 -0.0936389 51.3455 0.0128196C52.1532 0.119365 52.7215 0.860349 52.6149 1.66803L50.9854 14.0205C49.9563 21.8224 52.0255 29.3515 56.2333 35.356C60.4808 41.4171 66.9058 45.9291 74.5196 47.6076C75.0083 47.7145 75.435 47.8018 75.7967 47.8657C76.153 47.9289 76.5852 47.9947 77.0921 48.0615L89.4439 49.6909C90.2509 49.7974 90.8198 50.5384 90.7134 51.3455C90.6068 52.1531 89.8652 52.7213 89.0582 52.6149L76.7064 50.9855C68.4374 49.8947 60.472 52.2873 54.3019 57.0186C48.1325 61.7506 43.7561 68.8238 42.6653 77.0921L41.036 89.4439C40.9295 90.251 40.1884 90.8199 39.3807 90.7133C38.5737 90.6069 38.0055 89.8652 38.112 89.0582L39.7414 76.7064C40.8321 68.4381 38.4396 60.472 33.7083 54.302C28.9762 48.1325 21.9031 43.7561 13.6347 42.6654L1.28227 41.0359Z"
                                      fill="white"
                                  />
                              </svg>

                              {/* SMALL STAR */}
                              <svg
                                  className="
                                    absolute

                                    right-[6px] top-[42px]
                                    w-[34px] h-[34px]

                                    sm:right-[8px] sm:top-[50px]
                                    sm:w-[42px] sm:h-[42px]

                                    md:right-[10px] md:top-[62px]
                                    md:w-[51px] md:h-[51px]
                                "
                                  viewBox="0 0 51 51"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M0.709636 22.7121C0.262608 22.6531 -0.0519133 22.243 0.0070562 21.796C0.0659775 21.3493 0.476089 21.0348 0.923117 21.0938L7.75982 21.9956C8.30183 22.0671 8.82131 22.1114 9.31619 22.1301L9.3377 22.131C9.84713 22.1497 10.362 22.1438 10.88 22.1151C14.8559 21.893 18.5489 20.249 21.3704 17.6349C24.1416 15.0676 26.0707 11.562 26.6005 7.54643L27.5023 0.709724C27.5613 0.262696 27.9714 -0.051825 28.4181 0.00709633C28.8651 0.0660658 29.1796 0.476177 29.1206 0.923205L28.2188 7.75991C27.6492 12.078 28.7944 16.2451 31.1233 19.5685C33.4742 22.9231 37.0302 25.4203 41.2442 26.3493C41.5147 26.4085 41.7508 26.4568 41.951 26.4922C42.1482 26.5271 42.3874 26.5635 42.668 26.6005L49.5043 27.5024C49.951 27.5613 50.2659 27.9714 50.2069 28.4181C50.148 28.8651 49.7375 29.1796 49.2908 29.1207L42.4545 28.2189C37.8779 27.6151 33.4693 28.9394 30.0543 31.558C26.6397 34.177 24.2175 38.0918 23.6139 42.6681L22.7121 49.5044C22.6531 49.9511 22.243 50.2659 21.7959 50.207C21.3493 50.1481 21.0348 49.7376 21.0937 49.2909L21.9955 42.4546C22.5992 37.8783 21.275 33.4693 18.6564 30.0544C16.0374 26.6398 12.1226 24.2176 7.54634 23.614L0.709636 22.7121Z"
                                      fill="white"
                                  />
                              </svg>

                              {/* CURVE */}
                              <svg
                                  className="
                                    absolute

                                    right-0 top-[38px]
                                    w-[14px] h-[20px]

                                    sm:top-[45px]
                                    sm:w-[18px] sm:h-[26px]

                                    md:top-[52px]
                                    md:w-[21px] md:h-[30px]
                                "
                                  viewBox="0 0 21 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                      d="M1.50037 1.50038C7.46553 4.10105 19.3126 13.0767 18.9794 28.1741"
                                      stroke="#49C4DD"
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                  />
                              </svg>

                          </div>
                      </div>

                      {/* ROW 2 */}
                      <div
                          className="
                            bg-gradient-to-r 
                            from-[#1a1d27] 
                            via-[#0e1c0f] 
                            to-[#1b1c02]

                            mt-[-100px]
                           
                            
                            text-white 
                            rounded-xl 
                            p-4 
                            flex-1 
                            shadow-sm

                            leading-[1.1]
                            macondo-regular

                            text-[28px]
                            sm:text-[36px]
                            md:text-[48px]
                            lg:text-[60px]
                            xl:text-[72px]">
                          Traveler
                          <br />

                          <span className="text-cyan-400">
                              Landing Page
                          </span>

                          <br />

                          & Mobile App
                      </div>

                      {/* ROW 3 */}
                    
                      <div className="bg-gradient-to-r from-[#1a1d27] via-[#0e1c0f] to-[#1b1c02] rounded-xl p-4 flex-1 shadow-sm">

                          <div className="flex items-center justify-center">

                              <svg
                                  width="182"
                                  height="57"
                                  viewBox="0 0 182 57"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-[120px] md:w-[182px] h-auto"
                              >
                                  <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M108.154 40.1582C109.532 38.3008 110.708 36.2629 111.652 34.0284C114.966 26.1878 110.642 16.2264 103.376 9.1113C96.1134 1.9986 86.057 -2.1198 78.4915 1.12377C74.1651 2.97767 71.767 5.59187 70.7099 8.53283C69.6593 11.4587 69.9428 14.7662 71.1895 18.127C74.6685 27.4931 85.7683 37.341 92.4866 39.6674C95.5949 40.7419 98.7743 41.6049 101.999 42.2768C94.9926 48.6518 84.6042 51.8267 73.0631 53.0223C47.9805 55.6217 17.3779 48.7612 2.12133 43.1799C1.30166 42.88 0.396662 43.3028 0.0967612 44.1224C-0.20314 44.9421 0.217154 45.8503 1.03682 46.1502C16.5955 51.8418 47.8081 58.8169 73.3873 56.1653C86.6008 54.7969 98.3002 50.8319 105.778 42.9799C130.24 46.9671 157.37 41.0239 180.393 36.1684C181.245 35.9917 181.793 35.1502 181.613 34.2953C181.43 33.4435 180.594 32.8953 179.739 33.0752C157.657 37.7307 131.728 43.5274 108.154 40.1582ZM104.599 39.576C106.273 37.5823 107.672 35.3294 108.741 32.7937C111.61 26.0084 107.456 17.5264 101.166 11.3674C97.3093 7.5937 92.6036 4.682 88 3.59439C85.106 2.90941 82.2606 2.94896 79.7371 4.03227C76.4251 5.45161 74.4918 7.35202 73.6865 9.6021C72.8714 11.8649 73.1858 14.4231 74.1543 17.0245C77.3232 25.5617 87.4044 34.5614 93.52 36.6784C97.1269 37.928 100.827 38.8777 104.599 39.576Z"
                                      fill="white"
                                  />
                              </svg>

                              <span
                                  className="
                                    text-cyan-400
                                    font-bold
                                    leading-none
                                    ml-2
                                    macondo-regular

                                    text-[20px]
                                    sm:text-[26px]
                                    md:text-[34px]
                                    lg:text-[42px]
                                    xl:text-[48px]">
                                  FREE
                              </span>

                          </div>

                      </div>

                      {/* ROW 4 */}
                      <div className="bg-gradient-to-r from-[#1a1d27] via-[#0e1c0f] to-[#1b1c02] text-white rounded-xl p-4  shadow-sm">

                          <div className="flex items-center justify-center gap-6 flex-wrap">

                              {/* ITEM 1 */}
                              <div className="flex items-center gap-2">
                                  <AiOutlineDisconnect className="w-5 h-5" />
                                  <span>andrerio.com</span>
                              </div>

                              {/* ITEM 2 */}
                              <div className="flex items-center gap-2">
                                  <FaInstagram className="w-5 h-5" />
                                  <span>andrerio669</span>
                              </div>

                          </div>

                      </div>

                  </div>
               
                  {/* RIGHT */}
                  <div
                      className="
    mt-12
    flex-1
    relative

    min-h-[400px]
    md:min-h-[500px]

    flex
    items-center
    justify-center

    overflow-hidden
  "
                  >

                      {/* BACK IMAGE */}
                      <img
                          src="/assets/Home-Page-2.png"
                          alt="background-card"
                          className="
      absolute

      top-[50%]
      right-[-10px]
      -translate-y-1/2

      w-[75%]
      sm:w-[70%]
      md:w-[80%]

      h-auto

      rotate-[5deg]
      opacity-70

      rounded-xl
      shadow-2xl
    "
                      />

                      {/* FRONT IMAGE */}
                      <img
                          src="/assets/Home-Page-2.png"
                          alt="front-card"
                          className="
      absolute

      top-[50%]
      right-[30px]
      -translate-y-1/2

      w-[75%]
      sm:w-[70%]
      md:w-[80%]

      h-auto

      z-10

      rounded-xl
      shadow-2xl
    "
                      />

                  </div>
              </div>

          </section>

      {/* ================= BUTTON ================= */}
      {/*  <div className="mt-6">
        <button className="
          w-full md:w-[200px] 
          h-[45px] 
          bg-blue-500 text-white 
          rounded-lg
        ">
          Action Button
        </button>
      </div> */}

      {/* ================= FOOTER ================= */}
      <footer className="mt-10 text-center text-sm text-white py-4">
        © 2026 Travel App
      </footer>

    </div>
  );
};

export default TravelApp5;