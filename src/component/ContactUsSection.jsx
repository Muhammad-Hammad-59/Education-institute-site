import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, MoveRight } from 'lucide-react';
import Button from './Button';
import SectionHeader from './SectionHeader';

const ContactUsSection = () => {
  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-12 xl:px-24">
    

      <SectionHeader subheading='Contact us' heading='Get in Touch' />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* LEFT SIDE */}
        <div className="space-y-6 p-8 ">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold">Send us a message</h3>
            <Send className="text-blue-600 w-6 h-6" />
          </div>
          <p className="text-gray-600">
            Feel free to reach out through the contact form or find our contact information below.
            Your feedback, questions, and suggestions are important to us as we strive to provide
            exceptional service to our university community.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>Contact@GreatStack.dev</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>+1 123-456-7890</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>77 Massachusetts Ave, Cambridge, MA 02139, United States</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className=" p-8 rounded-lg  space-y-6">
          <div>
            <label className="block mb-2  text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-blue-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 bg-blue-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full px-4 py-2 bg-blue-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Write your messages here</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 bg-blue-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="verify" className="w-4 h-4" />
            <label htmlFor="verify" className="text-sm text-gray-700">
              I am not a robot
            </label>
          </div>

       

          <Button label='Send now' className='bg-blue-600 text-white' size='lg' icon={<MoveRight  size={20} strokeWidth={1}  />}/>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
