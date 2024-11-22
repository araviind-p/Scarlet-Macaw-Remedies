const Footer = () => {
  return (
    <footer className=" text-center text-neutral-800 bg-[#e9f9f9] lg:text-left">
      <div className="flex  items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between"></div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 pt-8 text-center md:text-left max-w-6xl sm:mx-auto">
        <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
              Scarlet macaw Remedies
            </h6>
            <p className="text-justify">
              Your trusted partner in quality healthcare since 2014. Together,
              we strive for a healthier tomorrow with innovation and care.
            </p>
          </div>
          {/* <!-- Products section --> */}

          <div className="">
            <h6 className="mb-2 flex justify-center font-bold uppercase md:justify-start">
              Inquiries
            </h6>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              + 91 9061004666
            </p>
            <p className="mb-3 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              scarletmacawremediesclt@outlook.com
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div className="">
            <h6 className="mb-2 flex justify-center font-bold uppercase md:justify-start">
              Visit us
            </h6>
            <p className=" flex items-center justify-center md:justify-start">
              12/1207F, 1&apos;st Floor Apple Square Building, Airport road,
              Ramanattukara, Kozhikode, 673633, Kerala
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="text-neutral-800 py-6 text-center bg-[#e9f9f9]">
        <span>© {new Date().getFullYear()} Copyright</span>
      </div>
    </footer>
  );
};

export default Footer;
