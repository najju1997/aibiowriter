
const Error = ({ message }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-red-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-red-700">Error</h2>
      <p className="text-red-600">{message}</p>
    </div>
  );
};

export default Error;
