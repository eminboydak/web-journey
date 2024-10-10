import Header from "./Header";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
