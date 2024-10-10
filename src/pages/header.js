import ArchHeader from "@/components/header/ArchHeader";
import MintHeader, { Dropdown } from "@/components/header/MintHeader";
import PageLayout from "@/components/layout/PageLayout";

export default function Header() {
  return (
    <PageLayout>
      <ArchHeader />
      <br />
      <MintHeader />
      <br />
      <Dropdown />
    </PageLayout>
  );
}
