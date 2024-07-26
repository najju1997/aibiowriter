import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F1012] py-6 md:py-8 relative overflow-hidden">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row relative z-10 max-w-screen-xl mx-auto p-4">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-[#7C3AED] to-[#00C2FF] p-2 rounded-full">
            <RocketIcon className="h-6 w-6 text-white" />
          </div>
          <span className="text-lg font-semibold text-[#F9FAFB] relative z-10">AI Bio</span>
        </div>
        <div className="flex items-center gap-4 relative z-10">
          <Link
            to="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-[#7C3AED] to-[#00C2FF] px-4 text-sm font-medium text-[#F9FAFB] shadow transition-colors hover:from-[#6D28D9] hover:to-[#00B5D8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7C3AED] disabled:pointer-events-none disabled:opacity-50"
          >
            Explore Features
          </Link>
          <Link
            to="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-[#7C3AED] to-[#00C2FF] px-4 text-sm font-medium text-[#F9FAFB] shadow transition-colors hover:from-[#6D28D9] hover:to-[#00B5D8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7C3AED] disabled:pointer-events-none disabled:opacity-50"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#00C2FF] opacity-20 blur-3xl" />
    </footer>
  );
};

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default Footer;
