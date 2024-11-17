import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="pb-2">
      <footer className="bg-white rounded-lg shadow m-4 mb-0 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              Britto Digital
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <Link href="https://www.facebook.com/brittodigitalbd" className="hover:underline me-4 md:me-6">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/@brittodigitalbd" className="hover:underline me-4 md:me-6">
                Tik Tok
              </Link>
            </li>
            <li>
              <Link href="mailto:brittodigitalbd@gmail.com" className="hover:underline me-4 md:me-6">
                Email
              </Link>
            </li>
            <li>
              <Link href="tel:+8801828308123" className="hover:underline">
                Phone
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
