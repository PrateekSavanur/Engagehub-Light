import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useState } from "react";
import Modal from "react-modal";

const Benefits = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const openModal = (benefit) => {
    setSelectedBenefit(benefit);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBenefit(null);
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Engage Hub Features"
        />
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="relative block md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10 flex flex-col min-h-[22rem] p-[2.6rem] bg-black bg-opacity-50 rounded-md">
                <h5 className="h5 mb-5 relative z-20 text-white shadow-md">
                  {item.title}
                </h5>

                <div
                  className="relative z-20 flex items-center mt-auto cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <img src={item.iconUrl} alt={item.title} />
                  <p className="ml-auto font-code text-xx font-bold text-white uppercase tracking-wider shadow-md">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <ClipPath />
            </div>
          ))}
        </div>

        {selectedBenefit && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="rounded-lg p-8 max-w-lg mx-auto my-10 relative overflow-hidden bg-n-1 border border-n-7"
            overlayClassName="fixed inset-0 bg-n-6 bg-opacity-50 z-50 flex items-center justify-center"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-lg text-n-8 hover:bg-orange-700"
            >
              ✕
            </button>
            <div className="overflow-y-auto max-h-[80vh] custom-scrollbar">
              <h2 className="text-2xl font-bold mb-4 text-center text-n-8">
                {selectedBenefit.tagline}
              </h2>
              <div className="flex flex-col items-start gap-4 text-justify text-n-8">
                <ul className="list-disc list-inside space-y-2">
                  {selectedBenefit.text1 && <li>{selectedBenefit.text1}</li>}
                  {selectedBenefit.text2 && <li>{selectedBenefit.text2}</li>}
                  {selectedBenefit.text3 && <li>{selectedBenefit.text3}</li>}
                </ul>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </Section>
  );
};

export default Benefits;
