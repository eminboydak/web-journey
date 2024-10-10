import Link from "next/link";

const links = [
  { name: "Header", url: "/header" },
  { name: "Header", url: "/header" },
];

export default function Header() {
  return (
    <div className="bg-slate-700">
      <ul className="flex p-4">
        {links.map((link, index) => (
          <li className="m-4 font-bold text-lg text-gray-300 hover:text-green-400" key={index}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
