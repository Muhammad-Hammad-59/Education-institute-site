 
 // components/FeedbackCard.tsx
import Image from 'next/image';

 

const FeedbackCard  = ({ name, title, message, avatar }) => {


const truncateWords = (tit, maxWords) => {
  return title.length > maxWords ? title.slice(0,maxWords) + '..' : title;
};


  return (
    <div className="card bg-blue-500 shadow-md px-6 py-6 rounded-lg min-h-[200px] flex flex-col  transition duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4 mb-4 ">
        <div className="avatar">
        <div className='w-20 rounded-full'>

          <Image src={avatar} alt={name} width={56} height={56} className="object-cover" />
        </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm hidden sm:block text-gray-500">{title}</p>
          <p className="text-sm sm:hidden text-gray-500">{truncateWords(title,12)}</p>
        </div>
      </div>
      <p className="text-gray-700 text-md leading-relaxed pt-2 line-clamp-3 overflow-hidden">
        {message}
      </p>
    </div>
  );
};

export default FeedbackCard;
