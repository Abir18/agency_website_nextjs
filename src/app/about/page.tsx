const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16 my-8">
              <div>
                <h1
                  className="lg:leading-tighter my-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]"
                  data-aos="fade-down"
                >
                  Our Agency
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
                  data-aos="fade-right"
                >
                  We are a full-service digital agency that specializes in
                  branding, web design, and digital marketing. Our mission is to
                  help our clients achieve their business goals through
                  innovative and effective solutions.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 font-bold">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 -mx-2 text-2xl text-left">
                  Our Services
                </div>
                <ul className="grid gap-2 text-black">
                  <li data-aos="fade-down" data-aos-delay="200">
                    Branding and Identity
                  </li>
                  <li data-aos="fade-down" data-aos-delay="400">
                    Web Design and Development
                  </li>
                  <li data-aos="fade-down" data-aos-delay="600">
                    Digital Marketing
                  </li>
                  <li data-aos="fade-down" data-aos-delay="800">
                    Social Media Management
                  </li>
                  <li data-aos="fade-down" data-aos-delay="1000">
                    Content Creation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Core Values
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Acme Agency, we are guided by a set of core values that
                  shape our approach to every project and client relationship.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Creativity
                </div>
                <p className="text-muted-foreground">
                  We believe that creativity is the foundation of great design.
                  We approach every project with a fresh perspective and a
                  willingness to think outside the box.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Collaboration
                </div>
                <p className="text-muted-foreground">
                  We value open communication and collaboration with our
                  clients. We work closely with them to understand their needs
                  and goals, and to create solutions that exceed their
                  expectations.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">
                  Excellence
                </div>
                <p className="text-muted-foreground">
                  We are committed to delivering exceptional work that exceeds
                  our clients expectations. We strive for excellence in every
                  aspect of our work, from strategy to execution.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Innovation
                </div>
                <p className="text-muted-foreground">
                  We are always exploring new technologies and techniques to
                  stay ahead of the curve. We are committed to finding
                  innovative solutions that help our clients stay competitive in
                  their industries.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Integrity
                </div>
                <p className="text-muted-foreground">
                  We believe in being honest and transparent in all of our
                  dealings. We are committed to building long-term relationships
                  with our clients based on trust and mutual respect.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Passion
                </div>
                <p className="text-muted-foreground">
                  We are passionate about what we do, and it shows in the
                  quality of our work. We are driven by a desire to create
                  something truly exceptional for every client.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet Our Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of talented professionals is dedicated to delivering
                  exceptional results for our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                JD
                <div className="text-center">
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Founder and CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                JS
                <div className="text-center">
                  <h3 className="text-lg font-bold">Jane Smith</h3>
                  <p className="text-muted-foreground">Creative Director</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                MJ
                <div className="text-center">
                  <h3 className="text-lg font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Lead Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                SA
                <div className="text-center">
                  <h3 className="text-lg font-bold">Sarah Anderson</h3>
                  <p className="text-muted-foreground">Digital Strategist</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                EM
                <div className="text-center">
                  <h3 className="text-lg font-bold">Emily Martinez</h3>
                  <p className="text-muted-foreground">Social Media Manager</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                RW
                <div className="text-center">
                  <h3 className="text-lg font-bold">Ryan Wilson</h3>
                  <p className="text-muted-foreground">Content Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
