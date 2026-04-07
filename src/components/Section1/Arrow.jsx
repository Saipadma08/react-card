const Arrow = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      {/* First Card */}
      <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between">
        <p className="text-gray-600 mb-3">
          lorem ipsum docolor abcv fscbh hsjss radgs kxnxn dsgsk sgjbz .
        </p>

        <button className="bg-blue-600 text-white rounded-lg px-4 py-2 w-fit">
          Register
        </button>
      </div>

      {/* Second Card */}
      <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between">
        <p className="text-gray-600 mb-3">
          This is second card content. Add any text, info, or actions here.
        </p>
     <button className="bg-blue-600 text-white rounded-lg px-4 py-2 w-fit">
          Explore
        </button>
      </div>

    </div>
  );
};

export default Arrow;