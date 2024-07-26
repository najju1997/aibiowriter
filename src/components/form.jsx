import { useContext } from 'react';
import { FormContext } from './FormContext';
import { FaPaperPlane } from 'react-icons/fa';

const CelebrityForm = () => {
  const { formData, setFormData, setSubmitted } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-16 mx-4 justify-center gap-4 bg-gradient-to-br from-[#4c5fd5] to-[#8b5cf6] p-6 rounded-lg shadow-lg w-full max-w-4xl sm:flex-row sm:w-4/5">
        <div className="flex items-center gap-4 flex-1">
          <label htmlFor="celebrityName" className="block text-sm font-medium text-white">
            Celebrity Name
          </label>
          <input
            type="text"
            id="celebrityName"
            name="celebrityName"
            placeholder="Enter celebrity name"
            className="mt-1 block w-full sm:w-3/4 rounded-md border-[#6DD5FA] bg-white px-3 py-2 text-sm shadow-sm focus:border-[#6DD5FA] focus:outline-none focus:ring-1 focus:ring-[#6DD5FA] text-[#2980B9]"
            value={formData.celebrityName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center gap-4 flex-1">
          <label htmlFor="socialMediaLink" className="block text-sm font-medium text-white">
            Social Media Link
          </label>
          <input
            type="url"
            id="socialMediaLink"
            name="socialMediaLink"
            placeholder="Enter social media link"
            className="mt-1 block w-full sm:w-3/4 rounded-md border-[#6DD5FA] bg-white px-3 py-2 text-sm shadow-sm focus:border-[#6DD5FA] focus:outline-none focus:ring-1 focus:ring-[#6DD5FA] text-[#2980B9]"
            value={formData.socialMediaLink}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-gradient-to-br from-[#2980b9] to-[#6DD5FA] hover:opacity-80 p-2 text-white flex items-center mt-4 sm:mt-0"
          onClick={handleSubmit}
        >
          <FaPaperPlane className="h-6 w-6" />
          <span className="sr-only">Submit</span>
        </button>
      </div>
    </div>
  );
};

export default CelebrityForm;
