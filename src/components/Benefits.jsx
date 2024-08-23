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
              className="relative block p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div
                  className="flex items-center mt-auto cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xx font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>

        {selectedBenefit && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="bg-black rounded-lg p-8 max-w--[50%] mx-auto my-10 relative overflow-hidden"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-red-500"
            >
              ✕
            </button>
            <div className="overflow-y-auto max-h-[80vh] custom-scrollbar">
              <h2 className="text-2xl font-bold mb-4">
                {selectedBenefit.title}
              </h2>
              <img
                src={selectedBenefit.imageUrl}
                alt={selectedBenefit.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="mb-4">{selectedBenefit.text}</p>
              <h2 className="text-2xl font-bold mb-4">
                {selectedBenefit.title}
              </h2>
              <img
                src={selectedBenefit.imageUrl}
                alt={selectedBenefit.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="mb-4">{selectedBenefit.text}</p>
              <h2 className="text-2xl font-bold mb-4">
                {selectedBenefit.title}
              </h2>
              <img
                src={selectedBenefit.imageUrl}
                alt={selectedBenefit.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="mb-4">{selectedBenefit.text}</p>
            </div>
          </Modal>
        )}
      </div>
    </Section>
  );
};

export default Benefits;
