import Heading from "./Heading";
import Button from "./Button";
import Section from "./Section";
import { blogs } from "../constants";

const Blog = () => (
  <Section className="overflow-hidden" id="blogs">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="Our Blogs 👇" />

      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-4 rounded-lg w-full sm:w-[280px] md:w-[350px] lg:w-[50%] bg-n-1 border border-n-7"
          >
            <div className="relative text-center">
              <Heading
                tag={item.title}
                title={item.title}
                className="text-n-8"
              />
              <p className="text-n-8/75">{item.text}</p>
            </div>

            <div className="flex justify-center mt-12">
              <Button href={item.link}>Read more</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Blog;
