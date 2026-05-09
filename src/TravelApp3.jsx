import { useState } from "react";
//https://www.figma.com/design/4zIRy3GEwII1bysHJNsZ4E/Travelers-%7C-Landing-Page---Mobile-App--Community-?node-id=315-21&p=f&t=0aZNkspCRJXZ9RoL-0
const TravelApp3 = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const CURVE_PATH = `
   M108.154 40.1582C109.532 38.3008 110.708 36.2629 111.652 34.0284C114.966 26.1878 110.642 16.2264 103.376 9.1113C96.1134 1.9986 86.057 -2.1198 78.4915 1.12377C74.1651 2.97767 71.767 5.59187 70.7099 8.53283C69.6593 11.4587 69.9428 14.7662 71.1895 18.127C74.6685 27.4931 85.7683 37.341 92.4866 39.6674C95.5949 40.7419 98.7743 41.6049 101.999 42.2768C94.9926 48.6518 84.6042 51.8267 73.0631 53.0223C47.9804 55.6217 17.3779 48.7612 2.12133 43.1799C1.30166 42.8801 0.396662 43.3028 0.0967612 44.1224C-0.20314 44.9421 0.217154 45.8503 1.03682 46.1502C16.5955 51.8418 47.8081 58.8169 73.3873 56.1653C86.6008 54.7969 98.3002 50.8319 105.778 42.9799C130.24 46.9671 157.37 41.0239 180.393 36.1684C181.245 35.9917 181.793 35.1502 181.613 34.2953C181.43 33.4434 180.594 32.8953 179.739 33.0752C157.657 37.7307 131.728 43.5274 108.154 40.1582ZM104.599 39.576C106.273 37.5823 107.672 35.3294 108.741 32.7937C111.61 26.0084 107.456 17.5264 101.166 11.3674C97.3093 7.5937 92.6036 4.682 88 3.59439C85.106 2.90941 82.2606 2.94896 79.7371 4.03227C76.4251 5.45161 74.4918 7.35202 73.6865 9.6021C72.8714 11.8649 73.1858 14.4231 74.1543 17.0245C77.3232 25.5617 87.4044 34.5615 93.52 36.6784C97.1269 37.928 100.827 38.8777 104.599 39.576Z
`;
  return (
    <>
      {/*     <div className="relative w-full max-w-[1440px] min-h-[800px] mx-auto px-4 
    bg-gradient-to-r from-[#7b95e4] via-[#4CAF50] to-[#dee51e]  "> */}
      <div className="relative w-full max-w-[1440px] min-h-[800px] mx-auto px-4 
    bg-[#000000]  ">



        {/* ================= HEADER ================= */}
        <header className="relative w-full ">

          {/* NAVBAR */}
          <div className="flex justify-between items-center py-4">

            {/* LOGO */}
            <div className="text-lg font-bold text-white">LOGO</div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-6 text-white">
              <div>Home</div>
              <div>About</div>
              <div>Services</div>
              <div>Contact</div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div
              className="md:hidden flex flex-col gap-1 cursor-pointer text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="w-6 h-[2px] bg-black"></span>
              <span className="w-6 h-[2px] bg-black"></span>
              <span className="w-6 h-[2px] bg-black"></span>
            </div>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/80 text-white flex flex-col items-center justify-center gap-6 z-50">
              <div onClick={() => setMenuOpen(false)}>Home</div>
              <div onClick={() => setMenuOpen(false)}>About</div>
              <div onClick={() => setMenuOpen(false)}>Services</div>
              <div onClick={() => setMenuOpen(false)}>Contact</div>
            </div>
          )}
        </header>

        {/* ================= CONTENT ================= */}
        <section className="relative min-h-[600px] scale-75 md:scale-100 origin-top-left">

          <div className="absolute left-[20%] top-[25%] w-[131px] h-[120px] ">

            {/* SVG 1 */}
            <div className="absolute left-[25%] top-[16%] rotate-[7deg]">
              <svg width="91" height="91">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.28227 41.0359C0.474587 40.9294 -0.0936862 40.1884 0.0128591 39.3807C0.119318 38.5737 0.860302 38.0054 1.66799 38.112L14.0205 39.7414C14.9998 39.8706 15.9383 39.9506 16.8325 39.9843L16.8714 39.9861C17.7918 40.0198 18.7221 40.0091 19.6579 39.9573C26.8415 39.556 33.514 36.5857 38.6118 31.8626C43.6189 27.2239 47.1044 20.89 48.0615 13.6348L49.691 1.28232C49.7975 0.474634 50.5385 -0.0936389 51.3455 0.0128196C52.1532 0.119365 52.7215 0.860349 52.6149 1.66803L50.9854 14.0205C49.9563 21.8224 52.0255 29.3515 56.2333 35.356C60.4808 41.4171 66.9058 45.9291 74.5196 47.6076C75.0083 47.7145 75.435 47.8018 75.7967 47.8657C76.153 47.9289 76.5852 47.9947 77.0921 48.0615L89.4439 49.6909C90.2509 49.7974 90.8198 50.5384 90.7134 51.3455C90.6068 52.1531 89.8652 52.7213 89.0582 52.6149L76.7064 50.9855C68.4374 49.8947 60.472 52.2873 54.3019 57.0186C48.1325 61.7506 43.7561 68.8238 42.6653 77.0921L41.036 89.4439C40.9295 90.251 40.1884 90.8199 39.3807 90.7133C38.5737 90.6069 38.0055 89.8652 38.112 89.0582L39.7414 76.7064C40.8321 68.4381 38.4396 60.472 33.7083 54.302C28.9762 48.1325 21.9031 43.7561 13.6347 42.6654L1.28227 41.0359Z" fill="white" />
              </svg>
            </div>

            {/* SVG 2 */}
            <div className="absolute left-[60%] top-[66%]  rotate-[7deg]">
              <svg width="51" height="51">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.709636 22.7121C0.262608 22.6531 -0.0519133 22.243 0.0070562 21.796C0.0659775 21.3493 0.476089 21.0348 0.923117 21.0938L7.75982 21.9956C8.30183 22.0671 8.82131 22.1114 9.31619 22.1301L9.3377 22.131C9.84713 22.1497 10.362 22.1438 10.88 22.1151C14.8559 21.893 18.5489 20.249 21.3704 17.6349C24.1416 15.0676 26.0707 11.562 26.6005 7.54643L27.5023 0.709724C27.5613 0.262696 27.9714 -0.051825 28.4181 0.00709633C28.8651 0.0660658 29.1796 0.476177 29.1206 0.923205L28.2188 7.75991C27.6492 12.078 28.7944 16.2451 31.1233 19.5685C33.4742 22.9231 37.0302 25.4203 41.2442 26.3493C41.5147 26.4085 41.7508 26.4568 41.951 26.4922C42.1482 26.5271 42.3874 26.5635 42.668 26.6005L49.5043 27.5024C49.951 27.5613 50.2659 27.9714 50.2069 28.4181C50.148 28.8651 49.7375 29.1796 49.2908 29.1207L42.4545 28.2189C37.8779 27.6151 33.4693 28.9394 30.0543 31.558C26.6397 34.177 24.2175 38.0918 23.6139 42.6681L22.7121 49.5044C22.6531 49.9511 22.243 50.2659 21.7959 50.207C21.3493 50.1481 21.0348 49.7376 21.0937 49.2909L21.9955 42.4546C22.5992 37.8783 21.275 33.4693 18.6564 30.0544C16.0374 26.6398 12.1226 24.2176 7.54634 23.614L0.709636 22.7121Z" fill="white" />
              </svg>
            </div>

            {/* SVG 3 */}
            <div className="absolute left-[95%] top-[66%] rotate-[15deg]">
              <svg width="21" height="30">
                <path d="M1.50037 1.50038C7.46553 4.10105 19.3126 13.0767 18.9794 28.1741"
                  stroke="#49C4DD"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* ============================== TITLE ============================ */}
          <div className="absolute left-[4%] top-[35%] w-[341px] h-[120px] ">

            {/* 🔹 CENTER TEXT */}
            <div className="text-center z-10 px-4">
              <h1 className="text-3xl md:text-4xl font-bold leading-relaxed                             
                            macondo-regular                          
                            ">
                <span style={{ color: "white", WebkitTextStroke: "1.5px white" }}>Traveler</span><br />
                <span style={{ color: "#49C4DD", WebkitTextStroke: "1.5px #49C4DD" }}>Landing Page</span> <br />
                <span style={{ color: "white", WebkitTextStroke: "1.5px white" }}>& Mobile App</span>
              </h1>

            </div>
          </div>

          {/* ============================== TITLE ============================ */}
          {/* <div className="absolute left-[8%] top-[75%] w-[341px] h-[120px] "> */}
          <div className="left-[4%] top-[55%]  absolute bottom-15 md:bottom-4 flex justify-center items-center  gap-0">


            {/* 🔹 CENTER TEXT */}
            <svg
              width="200"
              height="100"
              viewBox="0 0 100 160"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={CURVE_PATH} fill="white" />
            </svg>
            <div
              className="carter-one-regular mt-[-50px]"
              style={{ color: "#49C4DD", fontSize: "33px", fontWeight: "bold" }}
            >
              Free
            </div>
          </div>
        </section>


      </div>
    </>

  );
};

export default TravelApp3;
/*
| Layer                      | Unit    |
| -------------------------- | ------- |
| Layout (section placement) | px OR % |
| Group (Figma frame)        | px      |
| Elements inside group      | %       |

*/