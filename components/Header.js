
import Link from 'next/link';
import { FaHome, FaBook, FaImage, FaExclamationCircle, FaLightbulb } from 'react-icons/fa';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">Kelompok 2</Link>
      </div>
      <nav>
        <Link href="/"><FaHome /> Home</Link>
        <Link href="/overview"><FaBook /> Overview</Link>
        <Link href="/pengaruh-medsos"><FaBook /> Pengaruh Medsos</Link>
        <Link href="/infografis"><FaImage /> Infografis</Link>
        <Link href="/dampak-buruk"><FaExclamationCircle /> Dampak Buruk</Link>
        <Link href="/cara-mengatasi"><FaLightbulb /> Cara Mengatasi</Link>
      </nav>
    </header>
  );
}
