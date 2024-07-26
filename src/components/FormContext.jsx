import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    celebrityName: '',
    socialMediaLink: ''
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <FormContext.Provider value={{ formData, setFormData, submitted, setSubmitted }}>
      {children}
    </FormContext.Provider>
  );
};
