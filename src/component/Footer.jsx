

const Footer = () => {
  return (
    <footer className="border-t border-gray-400 py-4 px-6 bg-background text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
        {/* Left Text */}
        <p className="text-sm text-center sm:text-left">
          © 2024 Edusity. All rights reserved.
        </p>

        {/* Right Buttons */}
        <div className="flex space-x-4">
          <button className="text-sm text-gray-400 hover:underline transition duration-200">
            Terms of Services
          </button>
          <button className="text-sm text-gray-400 hover:underline transition duration-200">
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
