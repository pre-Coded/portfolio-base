// Import the video file
// import make1 from '../../assets/videos/make1.mp4';

import Image from "../../../node_modules/next/image";
import me from '../../assets/images/me.jpg'
import client1 from '../../assets/images/client1.jpg'
import client2 from '../../assets/images/client2.jpg'
import client3 from '../../assets/images/client3.jpg'
import client4 from '../../assets/images/client4.jpg'
import client5 from '../../assets/images/client5.jpg'
import client6 from '../../assets/images/client6.jpg'


const WhyMe = () => {
  return (
    <div
      className='flex flex-col space-y-2 w-full'
    >
      <div
        className="w-full flex flex-col space-y-2 items-center mb-10"
      >
        <span
          className={`text-md text-active font-medium tracking-wider`}
        >
          Our Happy Clients
        </span>
        <span
          className={`text-5xl font-bold tracking-wider`}
        >
          Clients
        </span>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2`}
      >
        <Image
          alt="client1"
          src={client1}
          className={`object-cover w-full aspect-square border-none rounded-md`}
        />
        <Image
          alt="client2"
          src={client2}
          className={`object-cover w-full aspect-square border-none rounded-md`}
        />
        <Image
          alt="client3"
          src={client3}
          className={`object-cover w-full aspect-square border-none rounded-md`}
        />
        <Image
          alt="client4"
          src={client4}
          className={`object-cover w-full aspect-square border-none rounded-md`}
        />
        
        <Image
          alt="client5"
          src={client5}
          className={`object-cover w-full aspect-square border-none rounded-md`}
        />
        
        <Image
          alt="client6"
          src={client6}
          className={`object-cover w-full aspect-square border-none rounded-md`}
        />
        
      </div>
    </div>
  );
};

export default WhyMe;
