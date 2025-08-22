function NoPage() {
  return (
    <div className="max-w-6xl m-auto p-5 text-center">
      <h1 className="text-3xl font-bold text-sky-700 mb-3">404 - Page Not Found</h1>
      <p className="text-green-700 mb-5">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="inline-block bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-500 transition"
      >
        Go Home
      </a>
    </div>
  );
}

export default NoPage;
