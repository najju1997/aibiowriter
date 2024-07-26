import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { FormContext } from './FormContext';
import Biography from './Biography';
import Error from './Error';
import { motion } from 'framer-motion';


const Logic = () => {
  const { formData, submitted, setSubmitted } = useContext(FormContext);
  const [biography, setBiography] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Use the apiKey as needed


  const fetchBiography = async (retryCount = 0) => {
    const maxRetries = 3;
    const delay = 5000; // Delay in milliseconds

    if (!formData || !submitted) return;

    setLoading(true);
    setError(''); // Clear previous errors

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // or 'gpt-4'
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `
            Write a 600 words biography of ${formData.celebrityName}. 
            The format of the biography should 
            1. Introduction, 
            2. Early Life 
            3. Romantic Relationship 
            4. Career 
            5. Net Worth 
            6. Social Media Profile. 
            Give results in div format.` }
          ],
          max_tokens: 1500,
          temperature: 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}` 
          }
        }
      );

      console.log('API Response:', response.data.choices[0].message.content);

      if (response.data.choices && response.data.choices.length > 0) {
        setBiography(response.data.choices[0].message.content.trim());
        setLoading(false);
      } else {
        throw new Error('No choices returned from API');
      }
    } catch (err) {
      console.error('Error fetching biography:', err);
      if (err.response && err.response.status === 429 && retryCount < maxRetries) {
        console.log('Rate limit exceeded, retrying...');
        setTimeout(() => fetchBiography(retryCount + 1), delay);
      } else {
        setError('Failed to fetch biography. Please try again later.');
      }
    } finally {
      if (retryCount >= maxRetries) {
        setLoading(false);
      }
    }
  };

  const handleCopyToClipboard = () => {
    if (biography) {
      // Create a temporary element to copy text
      const textarea = document.createElement('textarea');
      // Strip HTML tags and use plain text
      textarea.value = biography.replace(/<\/?[^>]+>/gi, '');
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Biography copied to clipboard!');
    }
  };

  useEffect(() => {
    if (submitted) {
      fetchBiography();
      setSubmitted(false); // Reset submitted state to allow new submissions
    }
  }, [submitted]); // Dependencies only on `submitted`

  return (
<div className="flex flex-col items-center justify-center h-full w-full">
      {loading ? (
        <div className="flex justify-center items-center h-64 w-full">
          <motion.div
            className="loader"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <svg
              className="w-12 h-12 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v4m0 0v4m0-4H8m4 0h4M8 12v4m0 0v4m0-4H4m4 0h4m0 4v4m0 0v4m0-4H8m4 0h4"
              />
            </svg>
          </motion.div>
        </div>
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          {biography && <Biography biography={biography} />}
          {biography && (
            <button
              onClick={handleCopyToClipboard}
              className="my-4 py-2 px-4 bg-gradient-to-r from-[#7C3AED] to-[#00C2FF] hover:from-[#6D28D9] hover:to-[#00B5D8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7C3AED] disabled:pointer-events-none disabled:opacity-50 text-white rounded-md hover:bg-blue-600"
            >
              Copy to Clipboard
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Logic;
