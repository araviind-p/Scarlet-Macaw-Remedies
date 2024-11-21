import { Link } from 'react-router-dom';
import Logo from '../assets/logo.webp';

const Footer = () => {
  return (
    <footer className=" text-center text-neutral-800 bg-[#e9f9f9] lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between"></div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-8 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
              <img src={Logo} alt="Logo" className="h-24 w-24 mr-3" />
              Scarlet macaw
            </h6>
            <p className="text-justify">
              Your trusted partner in quality healthcare since 2014. Together,
              we strive for a healthier tomorrow with innovation and care.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-center">
              Quick links
            </h6>
            <p className="mb-4 flex justify-center">
              <Link to={'/'} className="text-neutral-800">
                Home
              </Link>
            </p>
            <p className="mb-4 flex justify-center">
              <Link to={'/about'} className="text-neutral-800">
                About
              </Link>
            </p>
            <p className="mb-4 flex justify-center">
              <Link to={'/services'} className="text-neutral-800">
                Services
              </Link>
            </p>
            <p className="flex justify-center">
              <Link to={'/contact'} className="text-neutral-800">
                Contact us
              </Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-center">
              Inquiries
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              + 91 8075748473
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              scarletmacawremedies@gmail.com
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-center">
              Visit us
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-14 w-14"
              >
                <path d="M12 2C8.686 2 6 4.686 6 8c0 4.672 5.145 10.654 5.408 10.943a.75.75 0 001.184 0C12.855 18.654 18 12.672 18 8c0-3.314-2.686-6-6-6zm0 16.34C10.36 15.6 7.5 11.88 7.5 8c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5c0 3.88-2.86 7.6-4.5 10.34z" />
                <path d="M12 10.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0-3a.75.75 0 110 1.5.75.75 0 010-1.5z" />
              </svg>
              12/1207F, 1&apos;st Floor Apple Square Building, Airport road,
              Ramanattukara, Kozhikode, 673633, Kerala
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="text-neutral-800 p-6 text-center bg-[#e9f9f9]">
        <span>© {new Date().getFullYear()} Copyright : </span>

        <a
          className="font-semibold text-neutral-800"
          href="https://tw-elements.com/"
        >
          Scarlet Macaw Remedies
        </a>
      </div>
    </footer>
  );
};

export default Footer;
