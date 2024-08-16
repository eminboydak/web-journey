import styles from "@/styles/header/MintHeader.module.css";

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
              <li className={styles.mintnavbarmenulist}>Download</li>
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
