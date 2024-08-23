import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { testimonial } from "../constants";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="Testimonials" />

      <div className="flex flex-wrap justify-center gap-6">
        {testimonial.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-4 rounded-lg w-full sm:w-[280px] md:w-[300px] lg:w-[450px] bg-n-6"
          >
            <div className="relative text-center">
              <Heading tag={item.title} title={item.title} />
            </div>
            <div className="relative w-full mb-6 text-center overflow-hidden">
              <p className="text-n-3 text-base md:text-lg leading-tight">
                {item.text}
              </p>
            </div>
          </div>
        ))}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
