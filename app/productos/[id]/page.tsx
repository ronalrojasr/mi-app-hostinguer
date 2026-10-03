type ProductoPageProps = {
  params: Promise<{ id: string }>;
};

export default async function Producto({ params }: ProductoPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Producto #{id}</h1>
      <p className="text-lg mb-8">
        Esta página es dinámica y se renderiza en el servidor.
      </p>
      <a
        href="/"
        className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        ← Volver al inicio
      </a>
    </main>
  );
}