import styles from "@/styles/header/ArchHeader.module.css";

export default function ArchHeader() {
  return (
    <div
      id="archnavbar"
      className="min-h-10 px-3.5 py-2.5 bg-neutral-900 border-b-4 border-sky-600"
    >
      <div
        id="archnavbarlogo"
        className="float-left h-10 w-48 bg-[url('https://archlinux.org/static/archnavbar/archlogo.a2d0ef2df27d.png')] bg-no-repeat"
      >
        <h1 className="-indent-96">
          <a
            href="https://archlinux.org/"
            title="Return to the main page"
            className="block"
          >
            Arch Linux
          </a>
        </h1>
      </div>
      <div id="archnavbarmenu" className="leading-normal">
        <ul id="archnavbarlist" className="block list-none text-right">
          <li id="anb-home" className={styles.archnavbarlist}>
            <a
              href="https://archlinux.org/"
              title="Arch news, packages, projects and more"
            >
              Home
            </a>
          </li>
          <li id="anb-packages" className={styles.archnavbarlist}>
            <a
              href="https://archlinux.org/packages/"
              title="Arch Package Database"
            >
              Packages
            </a>
          </li>
          <li id="anb-forums" className={styles.archnavbarlist}>
            <a href="https://bbs.archlinux.org/" title="Community forums">
              Forums
            </a>
          </li>
          <li id="anb-wiki" className={styles.archnavbarlist}>
            <a
              href="https://wiki.archlinux.org/"
              title="Community documentation"
            >
              Wiki
            </a>
          </li>
          <li id="anb-gitlab" className={styles.archnavbarlist}>
            <a href="https://gitlab.archlinux.org/archlinux" title="GitLab">
              GitLab
            </a>
          </li>
          <li id="anb-security" className={styles.archnavbarlist}>
            <a
              href="https://security.archlinux.org/"
              title="Arch Linux Security Tracker"
            >
              Security
            </a>
          </li>
          <li id="anb-aur" className={styles.archnavbarlist}>
            <a
              href="https://aur.archlinux.org/"
              title="Arch Linux User Repository"
            >
              AUR
            </a>
          </li>
          <li id="anb-download" className={styles.archnavbarlist}>
            <a href="https://archlinux.org/download/" title="Get Arch Linux">
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
