import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">E-Shop</Link>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-600">Inicio</Link>
        <Link href="/cart" className="hover:text-blue-600">Carrito</Link>
      </div>
    </nav>
  );
};

export default Navbar;
