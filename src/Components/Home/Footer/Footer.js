import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <footer className="px-2 py-4 bg-dark">
        <div className="container d-flex flex-wrap justify-content-between mx-auto">
          <div className="d-flex flex-row pr-3">
            <div className="d-flex align-items-center justify-content-center flex-shrink-0 w-12 h-12 rounded-circle bg-primary text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-5 h-5 rounded-full text-white"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <ul className="d-flex  flex-wrap align-items-center ms-3 list-unstyled">
              <li>
                <a href="#" className="text-white fw-bold py-2">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-white fw-bold">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <ul className="d-flex flex-wrap align-items-center  list-unstyled ms-auto">
            <li>
              <a href="#" className="text-white fw-bold px-2">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-white fw-bold px-2">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-white fw-bold">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
