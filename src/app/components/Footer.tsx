import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link className="brand" href="/">
        <b>N.</b> NEXORA <span>ENGINEERING</span>
      </Link>

      <span>ENGINEERING IS AN OPEN QUESTION.</span>
      <span>© 2026 NEXORA ENGINEERING</span>
    </footer>
  );
}
