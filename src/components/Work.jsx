// Motion
import {motion} from "framer-motion"

// variants
import { fadeIn } from "../variants";

// img

import Img1 from "../assets/portfolio-img1.png"
import Img2 from "../assets/portfolio-img2.png"
import Img3 from "../assets/portfolio-img3.png"

const Work = () => {
  return <section className="section" id="work">
    <div className="container mx-auto">
      <div>
        <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
          {/* Text */}
          <div>
            <h2 className="h2 leading-tight text-accent">My Latest <br />Works</h2>
            <p className="max-w-sm mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="btn btn-sm">View all projects</button>
          </div>
          {/* Image */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* Overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt=""/>
            {/* Pretitle */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 duration-500">UI/UX Design</div>
            {/* title */}
              <div>
                <span>Project Title</span>
              </div>
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  </section>
};

export default Work;
