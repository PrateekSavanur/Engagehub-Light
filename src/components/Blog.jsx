import Heading from "./Heading";
import Button from "./Button";
import Section from "./Section";
import { blogs } from "../constants";

const Blog = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="Our Blogs 👇" />

      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-4 rounded-lg w-full sm:w-[280px] md:w-[350px] lg:w-[50%] bg-n-6"
          >
            <div className="relative text-center">
              <Heading tag={item.title} title={item.title} />
              <p>{item.text}</p>
            </div>

            <div className="flex justify-center  mt-12">
              <Button href="https://medium.com/@nikhil.core2/engagehub-revolutionizing-whatsapp-marketing-automation-692e03f5615c">
                Read more
              </Button>
            </div>
          </div>
        ))}

        {/* <Gradient /> */}
      </div>
    </div>
  </Section>
);

export default Blog;
