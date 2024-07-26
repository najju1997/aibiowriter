import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function Feature() {
  return (
    <section className="flex flex-col items-center w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#070833] via-[#1f2e56] to-[#627bf3]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }}  // End state
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition settings
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-neon">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }} // Initial state
                  animate={{ opacity: 1, y: 0 }}  // End state
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }} // Transition settings with delay
                  className="bg-card p-6 rounded-lg shadow-lg flex items-center gap-4 bg-opacity-30 backdrop-blur-sm hover:shadow-neon transition-shadow duration-300"
                >
                  <div className="bg-primary rounded-full flex items-center justify-center w-12 h-12 text-glow">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/result"
              className="inline-flex h-10 items-center justify-center rounded-md bg-neon px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:shadow-neon hover:text-neon-foreground"
              prefetch={false}
            >
              Get Started
            </Link>
            <Link
              to="/works"
              className="inline-flex h-10 items-center justify-center rounded-md border border-neon bg-background px-8 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-neon hover:text-neon-foreground"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Automated Bio Generation",
    icon: <SparkleIcon className="w-6 h-6 text-neon" />
  },
  {
    title: "Customizable Output",
    icon: <MoveHorizontalIcon className="w-6 h-6 text-neon" />
  },
  {
    title: "Extensive Database",
    icon: <DatabaseIcon className="w-6 h-6 text-neon" />
  },
  {
    title: "Share and Download",
    icon: <ShareIcon className="w-6 h-6 text-neon" />
  }
];

function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function SparkleIcon(props) {
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
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
