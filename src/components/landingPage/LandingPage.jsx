import React from "react";
import LandingPageCards from "./LandingPageCards";
import { FileUser, Construction, Pickaxe, Copyright } from "lucide-react";
import contractor from "../../assets/contractor.jpg";
import client from "../../assets/client.jpg";
import worker from "../../assets/worker.jpg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import logo from "../../assets/logos.svg";
import background from "../../assets/Bg.svg";

const LandingPage = () => {
  const landingPageCards = [
    {
      id: 1,
      logo: <FileUser size={20} strokeWidth={1.5} />,
      img: client,
      role: "Client",
      description: "Monitor project progress, track budgets and stay updated.",
    },
    {
      id: 2,
      logo: <Construction size={20} strokeWidth={1.5} />,
      img: contractor,
      role: "Contractor",
      description:
        "Manage tasks, workers, budgets and ensure smooth project delivery.",
    },
    {
      id: 3,
      logo: <Pickaxe size={20} strokeWidth={1.5} />,
      img: worker,
      role: "Worker",
      description: "Submit work updates, upload site photos and stay on track",
    },
  ];
  return (
    <div
      className="w-full min-h-screen relative bg-cover bg-center max-md:bg-"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 w-full md:h-screen max-md:min-h-screen  flex flex-col  text-white items-center">
        <div className="flex flex-col h-full w-[90%] justify-around">
          <div className="w-full min-h-60 flex gap-5 items-center">
            <div className="w-60 max-md:w-30 max-sm:w-20">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1 className="text-8xl font-bold max-md:text-5xl max-sm:text-4xl">
                STRUVIA
              </h1>
              <h3 className="text-3xl text-[#fdba03] max-md:text-base max-sm:text-sm">
                BUILDING BETTER, TOGETHER
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-5 ">
            <h1 className="text-5xl font-extralight max-emd:text-3xl">
              Welcome to{" "}
              <span className="font-bold text-[#fdba03]">Struvia</span>
            </h1>
            <span className="w-30 h-[1.5px] bg-[#fdd703]"></span>
            <p className="w-[40%] text-white/80 max-lg:w-[60%] max-md:w-[80%] max-sm:w-full">
              Your all-in-one platform to track construction projects, manage
              tasks, monitor progress and build with confidence.
            </p>
          </div>

          <div>
            <LandingPageCards data={landingPageCards} />
          </div>

          <div className="flex justify-between max-emd:flex-col max-emd:gap-3">
            <div>
              <h1 className="flex gap-1 items-center text-sm text-white/80">
                <Copyright size={18} strokeWidth={1.5} />{" "}
                <span>
                  2026{" "}
                  <span className="text-[#fdba03] font-bold">Noumaan Nabi</span>
                  . All Rights Reserved
                </span>{" "}
              </h1>
            </div>

            <div className="flex gap-2 items-center text-white/80">
              Connect with us
              <ul className="flex items-center gap-2">
                <li>
                  <a href="">
                    <img src={facebook} alt="facebook" className="w-6" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={youtube} alt="youtube" className="w-8" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={instagram} alt="instagram" className="w-6" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={linkedin} alt="linkedin" className="w-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
