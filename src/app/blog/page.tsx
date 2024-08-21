import icon1 from "@/../public/images/icon1.png";
import icon2 from "@/../public/images/icon2.png";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-muted py-12 md:py-16 lg:py-20" data-aos="fade-down">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Unlocking the Power of Digital Transformation
            </h1>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground font-bold">
              <div data-aos="fade-right" data-aos-delay="200">
                John Doe
              </div>
              <div className="h-4 w-px bg-muted-foreground/50 font-bold" />
              <div data-aos="fade-left" data-aos-delay="400">
                August 21, 2024
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[3fr_1fr]">
          <article
            className="text-lg prose prose-lg dark:prose-invert"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p>
              In today&#39;s rapidly evolving digital landscape, businesses are
              facing the challenge of adapting to new technologies and changing
              consumer behaviors. Digital transformation has emerged as a
              critical strategy for organizations to remain competitive, enhance
              customer experiences, and drive innovation.
            </p>
            <p>
              At the heart of this transformation lies the need to seamlessly
              integrate digital technologies into every aspect of a business,
              from operations to customer engagement. By embracing digital tools
              and platforms, companies can streamline processes, improve
              efficiency, and unlock new opportunities for growth.
            </p>
            <p>
              One of the key drivers of digital transformation is the increasing
              prevalence of mobile devices and the rise of mobile-first consumer
              behavior. Consumers now expect personalized, on-demand experiences
              that are accessible anytime, anywhere. Businesses that can
              effectively leverage mobile technologies to deliver these
              experiences will thrive in the digital age.
            </p>
            <p>
              Another crucial aspect of digital transformation is the
              integration of data and analytics. By harnessing the power of
              data, organizations can gain valuable insights into customer
              preferences, market trends, and operational performance. This
              information can then be used to inform strategic decision-making,
              optimize processes, and personalize customer interactions.
            </p>
            <p>
              However, the journey to digital transformation is not without its
              challenges. Businesses must navigate complex technological
              landscapes, address cybersecurity concerns, and overcome
              resistance to change within their organizations. Successful
              digital transformation requires a holistic approach that
              encompasses people, processes, and technology.
            </p>
            <p>
              By embracing digital transformation, businesses can unlock new
              avenues for growth, enhance customer loyalty, and position
              themselves for long-term success in the digital age. It is a
              transformative process that requires commitment, agility, and a
              willingness to adapt to the ever-changing demands of the modern
              marketplace.
            </p>
          </article>
          <div className="space-y-8">
            <Card data-aos="fade-left" data-aos-delay="200">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <Link
                    href="#"
                    className="block text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    Digital Transformation
                  </Link>
                  <Link
                    href="#"
                    className="block text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    Technology
                  </Link>
                  <Link
                    href="#"
                    className="block text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    Innovation
                  </Link>
                  <Link
                    href="#"
                    className="block text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    Customer Experience
                  </Link>
                  <Link
                    href="#"
                    className="block text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    Strategy
                  </Link>
                </nav>
              </CardContent>
            </Card>
            <Card data-aos="fade-left" data-aos-delay="200">
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-4">
                  <Link
                    href="#"
                    className="grid grid-cols-[48px_1fr] items-start gap-4 text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    <Image
                      src={icon1}
                      width={48}
                      height={48}
                      alt="Post Thumbnail"
                      className="rounded-md"
                      style={{aspectRatio: "48/48", objectFit: "cover"}}
                    />
                    <div className="space-y-1">
                      <div>Mastering the Art of Digital Marketing</div>
                      <div className="text-xs text-muted-foreground">
                        August 15, 2024
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="grid grid-cols-[48px_1fr] items-start gap-4 text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    <Image
                      src={icon2}
                      width={48}
                      height={48}
                      alt="Post Thumbnail"
                      className="rounded-md"
                      style={{aspectRatio: "48/48", objectFit: "cover"}}
                    />
                    <div className="space-y-1">
                      <div>
                        Navigating the Evolving Landscape of Social Media
                      </div>
                      <div className="text-xs text-muted-foreground">
                        August 10, 2024
                      </div>
                    </div>
                  </Link>
                  {/* <Link
                  href="#"
                  className="grid grid-cols-[48px_1fr] items-start gap-4 text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <img
                    src="/placeholder.svg"
                    width={48}
                    height={48}
                    alt="Post Thumbnail"
                    className="rounded-md"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <div>Unleashing the Power of Data-Driven Decision Making</div>
                    <div className="text-xs text-muted-foreground">August 5, 2024</div>
                  </div>
                </Link> */}
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
