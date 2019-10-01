import Link from "next/link";

const Header = () => (
  <div className="header">
    <div className="header-inner">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/show">
        <a>Show</a>
      </Link>
      <Link href="/page">
        <a>page</a>
      </Link>
    </div>
  </div>
);

export default Header;
