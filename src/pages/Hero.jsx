import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#4c5fd5] to-[#8b5cf6]">
      <div className="container px-4 md:px-6 text-center text-primary-foreground">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }} // Start position and opacity
            animate={{ opacity: 1, y: 0 }}  // End position and opacity
            transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
            className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl"
          >
            Effortlessly Generate Captivating Celebrity Bios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} // Start position and opacity
            animate={{ opacity: 1, y: 0 }}  // End position and opacity
            transition={{ duration: 1.2, ease: "easeOut" }} // Animation duration and easing
            className="text-lg md:text-xl"
          >
            Our AI-powered bio generator crafts 600-word biographies that bring your favorite celebrities to life.
            Unlock their stories with a single click.
          </motion.p>
          <div>
            <Link
              to="/result"
              className="bg-gradient-to-r from-[#7C3AED] to-[#00C2FF] hover:from-[#6D28D9] 
              hover:to-[#00B5D8] focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-[#7C3AED] disabled:pointer-events-none disabled:opacity-50 
              text-white inline-flex h-12 items-center justify-center rounded-md 
              bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 
               focus-visible:ring-ring 
             bg-opacity-30 backdrop-blur-sm 
              hover:shadow-neon transition-shadow duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
