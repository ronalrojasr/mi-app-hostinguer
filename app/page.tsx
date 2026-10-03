export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">
        🚀 ¡Funciona en Hostinger!
      </h1>
      <p className="text-xl mb-8 text-center max-w-md">
        App Next.js + TypeScript desplegada en Cloud Professional.
      </p>

      <div className="flex gap-4">
        <a
          href="/api/health"
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Probar API
        </a>
        <a
          href="/productos/1"
          className="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-900 transition"
        >
          Ruta dinámica
        </a>
      </div>

      <p className="mt-12 text-sm opacity-75">
        Entorno: {process.env.NODE_ENV}
      </p>
    </main>
  );
}