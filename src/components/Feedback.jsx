import Heading from "./Heading";
import Section from "./Section";
import { testimonial } from "../constants";
import { Gradient } from "./design/Roadmap";

const Feedback = () => (
  <Section className="overflow-hidden" id="feedback">
    <div className="container md:pb-10">
      <Heading tag="Here's What Our Users Say" title="Testimonials" />

      <div className="flex flex-wrap justify-center gap-6">
        {testimonial.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-6 rounded-lg w-full sm:w-[280px] md:w-[300px] lg:w-[450px] bg-n-6 shadow-lg"
          >
            <div className="text-lg font-semibold text-center text-n-1 mb-2">
              {item.title}
            </div>
            <div className="text-sm text-n-4 mb-4">{item.topic}</div>
            <div className="relative w-full mb-4 text-center overflow-hidden">
              <p className="text-n-3 text-base md:text-lg leading-tight">
                {item.text}
              </p>
            </div>
          </div>
        ))}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Feedback;
