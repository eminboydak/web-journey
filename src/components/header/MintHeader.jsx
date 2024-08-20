import styles from "@/styles/header/MintHeader.module.css";

import { useState } from "react";

import {
  FaRss,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaMastodon,
} from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoChatbubbleEllipses } from "react-icons/io5";

import Image from "next/image";

export default function MintHeader() {
  const [downloadState, setDownloadState] = useState(false);

  const downloadHandleMouseEnter = () => {
    setDownloadState(true);
  };

  const downloadHandleMouseLeave = () => {
    setDownloadState(false);
  };

  return (
    <div
      id="mint-navbar"
      className="bg-gradient-to-r from-lime-700 to-emerald-600"
    >
      <div
        id="mint-navbar-top"
        className="border-b-2 border-neutral-800 p-2 pr-96"
      >
        <ul className="flex space-x-3 justify-end">
          <li className={styles.mintnavbarsociallist}>
            <FaRss />
          </li>
          <li className={styles.mintnavbarsociallist}>
            <TbMailFilled />
          </li>
          <li className={styles.mintnavbarsociallist}>
            <IoChatbubbleEllipses />
          </li>
          <li className={styles.mintnavbarsociallist}>
            <FaFacebook />
          </li>
          <li className={styles.mintnavbarsociallist}>
            <FaGithub />
          </li>
          <li className={styles.mintnavbarsociallist}>
            <FaTwitter />
          </li>
          <li className={styles.mintnavbarsociallist}>
            <FaMastodon />
          </li>
        </ul>
      </div>
      <div
        id="mint-navbar-bottom"
        className="flex items-center justify-between"
      >
        <div id="mint-navbar-bottom-logo" className="p-5 pl-96">
          <Image
            src="https://linuxmint.com/web/img/logo-mono.svg"
            alt=""
            width={200}
            height={1}
          />
        </div>
        <div id="mint-navbar-bottom-right" className="flex items-center pr-96">
          <div id="mint-navbar-bottom-menu" className="">
            <ul className="flex">
              <li className={styles.mintnavbarmenulist}>Home</li>
              <li
                className={styles.mintnavbarmenulist}
                onMouseEnter={downloadHandleMouseEnter}
                onMouseLeave={downloadHandleMouseLeave}
              >
                Download
                {downloadState && <Dropdown />}
              </li>
              <li className={styles.mintnavbarmenulist}>Project</li>
              <li className={styles.mintnavbarmenulist}>About</li>
              <li className={styles.mintnavbarmenulist}>Links</li>
            </ul>
          </div>
          <div id="mint-navbar-bottom-donate" className="px-4">
            <button className="rounded-lg px-4 py-3 bg-slate-100 hover:bg-slate-200 transition ease-in duration-300 text-black">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Dropdown() {
  return (
    <div id="mint-dropdown" className="absolute mt-2 p-2">
      <div
        id="mint-dropdown-top"
        className="bg-slate-100 border-t-2 border-emerald-800 text-black w-auto flex"
      >
        <div className="py-5 pl-7 pr-14">
          <b>Latest version</b>
          <ul className="my-4 space-y-4">
            <li>Linux Mint 22</li>
          </ul>
        </div>
        <div className="py-5 pl-7 pr-7">
          <b>Other versions</b>
          <ul className="my-4 space-y-4">
            <li>LMDE 6</li>
            <li>All Versions</li>
          </ul>
        </div>
      </div>
      <div
        id="mint-drowdown-bottom"
        className="bg-gradient-to-r from-lime-700 to-emerald-600 text-white "
      >
        Deneme2
      </div>
    </div>
  );
}
