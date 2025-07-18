const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone Number</label>
        <input
          type="text"
          placeholder="Enter your mobile number"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Your Email</label>
        <input
          type="email"
          placeholder="Enter your email id"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          rows="4"
          placeholder="Write your messages here"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        ></textarea>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" id="human-check" />
        <label htmlFor="human-check" className="text-sm text-gray-600">
          Verify I am human
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit Now
      </button>
    </form>
  );
};

export default ContactForm;
