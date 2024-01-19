import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";

import React from 'react';

const Nav = () => {
  return (
    <div className="container">
      <div className="item flex h-16 items-center">
        <ul className="m-1 text-neutral-500 text-2xl hover:cursor-pointer">
          <GoHome />
        </ul>
        <ul className="m-1 text-blue-900">
          <FaChevronRight />
        </ul>
        <ul className="m-1 text-neutral-500 font-medium hover:cursor-pointer">Flashcard</ul>
        <ul className="m-1 text-blue-900">
          <FaChevronRight />
        </ul>
        <ul className="m-1 text-neutral-500 font-medium hover:cursor-pointer">Mathematics</ul>
        <ul className="m-1 text-blue-900">
          <FaChevronRight />
        </ul>
        <ul className="m-1 text-blue-900 font-bold hover:cursor-pointer ">Relation and Function</ul>
      </div>
    </div>
  );
};

export default Nav;
