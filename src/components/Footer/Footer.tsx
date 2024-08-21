const Footer = () => {
  const date = new Date();

  return (
    <div className="py-6">
      <div className="w-full bg-muted mx-auto max-sm:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start border-b-slate-300 border-b-[1.5px] py-8">
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-6">
            Company
          </h1>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            About
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Affiliate
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Careers & Culture
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Blog
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Press
          </p>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-6">
            My Account
          </h1>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Press Inquiries
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Social Media
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Directories
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Images & B-roll
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Permissions
          </p>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-6">
            Our Information
          </h1>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Terms & Conditions
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Privacy Policy
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Return Polices
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Site Map
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4">
            Store Hours
          </p>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-6">
            About Us
          </h1>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4 ">
            Support Center
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer  hover:underline underline-offset-4">
            Customer Support
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer hover:underline underline-offset-4 ">
            About Us
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer  hover:underline underline-offset-4">
            Copyright
          </p>
          <p className="text-black opacity-80 mb-4 text-[15px] cursor-pointer  hover:underline underline-offset-4">
            Popular Campaign
          </p>
        </div>
      </div>
      {/* <div className="w-[80%] font-semibold mx-auto text-center mt-4 text-[16px] opacity-75 text-black">
        All Rights Reserved. © Copyright {date.getFullYear()}
      </div> */}
      <div className="w-[80%] font-semibold mx-auto text-center mt-4 text-[16px] opacity-75 text-black">
        <p className="text-xs text-muted-foreground font-bold">
          &copy; 2024 Agency. All rights reserved.
        </p>
      </div>

      {/* <div className="">
        <footer className="bg-muted p-6 md:py-12 w-full border-b-slate-300 border-b-[1.5px] ">
          <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
            <div className="grid gap-1">
              <h3 className="font-semibold">Company</h3>
              <Link href="#" prefetch={false}>
                About Us
              </Link>
              <Link href="#" prefetch={false}>
                Our Team
              </Link>
              <Link href="#" prefetch={false}>
                Careers
              </Link>
              <Link href="#" prefetch={false}>
                News
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Products</h3>
              <Link href="#" prefetch={false}>
                Men
              </Link>
              <Link href="#" prefetch={false}>
                Women
              </Link>
              <Link href="#" prefetch={false}>
                Kids
              </Link>
              <Link href="#" prefetch={false}>
                Accessories
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Resources</h3>
              <Link href="#" prefetch={false}>
                Blog
              </Link>
              <Link href="#" prefetch={false}>
                Community
              </Link>
              <Link href="#" prefetch={false}>
                Support
              </Link>
              <Link href="#" prefetch={false}>
                FAQs
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Legal</h3>
              <Link href="#" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="#" prefetch={false}>
                Cookie Policy
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Contact</h3>
              <Link href="#" prefetch={false}>
                Support
              </Link>
              <Link href="#" prefetch={false}>
                Sales
              </Link>
              <Link href="#" prefetch={false}>
                Press
              </Link>
              <Link href="#">Partnerships</Link>
            </div>
          </div>
        </footer>
        <div className="w-[80%] mx-auto my-4 text-[15px] opacity-75">
          Copyright © 2024 by Webdev Warriros
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
