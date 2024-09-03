import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className} py-4 overflow-hidden relative`}>
      <h5 className="tagline mb-8 text-center text-n-8/50">
        Helping people create beautiful content at
      </h5>

      <div className="relative flex items-center">
        <div className="flex animate-marquee">
          <ul className="flex justify-between">
            {companyLogos.map((logo, index) => (
              <li
                className="flex items-center mx-12 h-[6rem] w-[6rem] rounded-lg  p-4 "
                key={index}
              >
                <img
                  src={logo}
                  className="h-full w-full"
                  style={{ objectFit: "contain" }}
                  alt={`Company logo ${index + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
