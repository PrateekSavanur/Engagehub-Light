import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-8 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>

      <ul className="flex mb-7">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[4.5rem] mb-4"
            key={index}
          >
            <img
              src={logo}
              className="h-full"
              style={{ objectFit: "contain" }}
              alt={`Company logo ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
