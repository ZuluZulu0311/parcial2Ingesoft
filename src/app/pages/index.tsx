import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Parcial 02 - Ingeniería de Software II
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Juan David Muñoz & Juan Pablo Zuluaga
        </p>
        <p className="text-base text-gray-500">
          Tema: Patrones y Antipatrones de Diseño de Software
        </p>
        <div className="mt-8 text-sm text-gray-400">
          Universidad Autónoma de Occidente - Abril 2025
        </div>
      </main>
    </>
  );
}
