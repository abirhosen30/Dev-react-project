import React from "react";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="container mx-auto  border-t border-slate-100 bg-white">
      {/* Main Footer */}
      <div className="px-4 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <img src={logo} alt="Dev Stack" />

            <p className="mt-3 text-sm leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="mt-5 flex gap-6 text-sm text-slate-400">
              <li>
                <a href="" className="transition hover:text-slate-700">
                  GitHub
                </a>
              </li>

              <li>
                <a href="" className="transition hover:text-slate-700">
                  Twitter
                </a>
              </li>

              <li>
                <a href="" className="transition hover:text-slate-700">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-800">PRODUCT</h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="" className="hover:text-slate-700">
                  Home
                </a>
              </li>

              <li>
                <a href="" className="hover:text-slate-700">
                  Technologies
                </a>
              </li>

              <li>
                <a href="" className="hover:text-slate-700">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-800">COMPANY</h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="" className="hover:text-slate-700">
                  About
                </a>
              </li>

              <li>
                <a href="" className="hover:text-slate-700">
                  Contact
                </a>
              </li>

              <li>
                <a href="" className="hover:text-slate-700">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-800">LEGAL</h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="" className="hover:text-slate-700">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="" className="hover:text-slate-700">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 border-t border-slate-100"></div>

        <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <ul className="flex gap-6">
            <li>
              <a href="" className="hover:text-slate-700">
                Privacy
              </a>
            </li>

            <li>
              <a href="" className="hover:text-slate-700">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
