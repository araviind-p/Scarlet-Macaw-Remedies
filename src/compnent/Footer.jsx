import LOGO from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="text-center text-neutral-800 bg-[#e1ebec] lg:text-left border-t-2 border-gray-700">
      {/* <!-- Divider section (optional) --> */}

      {/* <!-- Main Content --> */}
      <div className="mx-4 pt-8 text-center md:text-left sm:mx-6 lg:mx-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Logo Section --> */}
          <div className="flex justify-center items-center lg:justify-end pt-0 sm:-mt-10 mr-0 lg:mr-10">
            <img className="h-16 sm:h-20" src={LOGO} alt="Logo" />
          </div>

          {/* <!-- Description Section --> */}
          <div className="text-center md:text-left">
            <p className="text-justify sm:pt-4">
              Your trusted partner in quality healthcare since 2014. Together,
              we strive for a healthier tomorrow with innovation and care.
            </p>
          </div>

          {/* <!-- Inquiries Section --> */}
          <div className="sm:pt-4">
            <h6 className="mb-2 font-bold uppercase">Inquiries</h6>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +91 9061004666
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              scarletmacawremediesclt@outlook.com
            </p>
          </div>

          {/* <!-- Address Section --> */}
          <div className="sm:pt-4">
            <h6 className="mb-2 font-bold uppercase">Visit us</h6>
            <p>
              12/1207F, 1&apos;st Floor Apple Square Building, Airport road,
              Ramanattukara, Kozhikode, 673633, Kerala
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Copyright Section --> */}
      <div className=" py-4 text-center">
        <span>© {new Date().getFullYear()} Copyright</span>
      </div>
    </footer>
  );
};

export default Footer;
