import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfoItem = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-4 mb-4">
    <div className="text-blue-600">
      <Icon size={24} />
    </div>
    <p className="text-gray-700">{text}</p>
  </div>
);

export default ContactInfoItem;
