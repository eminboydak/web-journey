import ArchHeader from "@/components/header/ArchHeader";
import MintHeader, { Dropdown } from "@/components/header/MintHeader";

export default function Header() {
  return (
    <>
      <ArchHeader />
      <br/>
      <MintHeader />
      <br/>
      <Dropdown />
    </>
  );
}
