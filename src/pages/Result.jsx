import CelebrityForm from '../components/form';
import Logic from '../components/logic';

const Result = () => {
  return (
    <div className="bg-gradient-to-br from-[#070833] via-[#1f2e56] to-[#627bf3] min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <CelebrityForm />
        <Logic />
      </div>
    </div>
  );
};

export default Result;
