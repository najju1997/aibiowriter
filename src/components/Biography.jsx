const Biography = ({ biography }) => {
  return (
    <div className="flex justify-center mx-2 mt-10">
      <div className="w-full max-w-4xl p-6 bg-gradient-to-br from-[#4c5fd5] to-[#8b5cf6] rounded-lg shadow-lg">
        <div className="prose max-w-none bg-white p-6 rounded-lg shadow-md" dangerouslySetInnerHTML={{ __html: biography }} />
      </div>
    </div>
  );
};

export default Biography;
