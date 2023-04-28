// Icon

import {BsArrowUpRight} from "react-icons/bs"

// Motion
import {motion} from "framer-motion"

// Variants
import {fadeIn} from "../variants"

// Services data
const services = [
  {
    name: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia",
    link: "Learn more"
  },
  {
    name: "Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia",
    link: "Learn more"
  },
  {
    name: "Digital Marketing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia",
    link: "Learn more"
  },
  {
    name: "Product Branding",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia",
    link: "Learn more"
  },
]

const Services = () => {
	return (
		<section className="section" id="services">
			<div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text & Image */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">I'm a Freelance Frontend Developer with over 5 years of experience</h3>
            <button className="btn btn-sm">See my works</button>
          </div>
          {/* Services */}
          <div className="flex-1">
            {/* service list */}
            <div>
            {  services.map((service, index) => {
              // Destructure the service
              const {name, description, link} = service;
              return (
                <div className="border-b border-white/20 h-[146px]mb-[38px] flex" key={index}>
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                    <p className="font-secondary leading-tight">{description}</p>
                  </div>
                  <div>{link}</div>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </div>
		</section>
	);
};

export default Services;
