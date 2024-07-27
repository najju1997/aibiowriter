

const Works = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
          How AI Bio Works
        </h1>
        <div className="space-y-12">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              AI Bio is an innovative tool designed to help users create professional and detailed biographies. Utilizing cutting-edge AI technology, our platform ensures that your biography is engaging, accurate, and tailored to your specific needs.
            </p>
          </section>
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Step-by-Step Process
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our process is simple and user-friendly:
            </p>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Fill out a form with your personal and professional details.</li>
              <li>Our AI analyzes the data to understand your background and achievements.</li>
              <li>We generate a comprehensive biography, which you can review and edit.</li>
              <li>Finalize and download your biography for use on your website, LinkedIn, or other platforms.</li>
            </ol>
          </section>
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Customizable biography templates.</li>
              <li>Real-time editing and preview.</li>
              <li>AI-driven content generation for accuracy and engagement.</li>
              <li>Secure data handling and privacy.</li>
              <li>Seamless integration with social media and professional platforms.</li>
            </ul>
          </section>
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Using AI Bio offers numerous advantages:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Save time and effort in creating professional biographies.</li>
              <li>Ensure your biography stands out with AI-enhanced writing.</li>
              <li>Maintain control over the final content with easy edits.</li>
              <li>Access a variety of templates to suit different needs and preferences.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Works;
