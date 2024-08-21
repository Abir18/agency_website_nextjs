import Link from "next/link";

const ServicePage = () => {
  return (
    <div data-aos="fade-down">
      <section className="w-full py-20 md:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold ">
                Unlock Your Business Potential
              </h1>
              <p className="text-lg md:text-xl ">
                Our agency offers a wide range of services to help your business
                thrive. From branding and web design to digital marketing and
                strategy, we&#39;ve got you covered.
              </p>
            </div>
            {/* <div className="flex justify-center">
          <img
            src="/placeholder.svg"
            width="400"
            height="400"
            alt="Services"
            className="w-full max-w-md"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div> */}
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div
          className="container px-4 md:px-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                We offer a wide range of services to help your business succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <BrushIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Branding</h3>
                </div>
                <p className="text-muted-foreground">
                  We create unique and memorable brand identities that help your
                  business stand out.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <CodeIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Web Design</h3>
                </div>
                <p className="text-muted-foreground">
                  We design and develop visually stunning and user-friendly
                  websites that engage your audience.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <MegaphoneIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Digital Marketing</h3>
                </div>
                <p className="text-muted-foreground">
                  We help you reach your target audience through effective
                  digital marketing strategies.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <LightbulbIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Strategy</h3>
                </div>
                <p className="text-muted-foreground">
                  We develop comprehensive strategies to help your business
                  achieve its goals.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <InfoIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Analytics</h3>
                </div>
                <p className="text-muted-foreground">
                  We provide in-depth analytics to help you make data-driven
                  decisions.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <RocketIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Growth</h3>
                </div>
                <p className="text-muted-foreground">
                  We help you scale your business and reach new heights with our
                  growth strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-muted">
        <div
          className="container px-4 md:px-6"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to take your business to the next level?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Contact us today to learn how our agency can help you achieve
                your goals.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface Props {
  className: string;
}

function BrushIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function CodeIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function InfoIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function LightbulbIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function MegaphoneIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function RocketIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default ServicePage;
