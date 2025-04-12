import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">DevcoreBits</Link>
      <div className="space-x-4">
        <Link href="/ppage" className="hover:text-blue-600">Ver parcial 02 - E Commerce</Link>
        <Link href="/newProduct" className="hover:text-blue-600">Crear nuevo producto</Link>
        <Link href="/newService" className="hover:text-blue-600">Crear nuevo servicio</Link>
      </div>
    </nav>
  );
};

export default Navbar;
