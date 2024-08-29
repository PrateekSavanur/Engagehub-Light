import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className}  py-10`}>
      <h5 className="tagline mb-8 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>

      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center h-[6rem]  rounded-lg shadow-md p-4"
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
  );
};

export default CompanyLogos;
