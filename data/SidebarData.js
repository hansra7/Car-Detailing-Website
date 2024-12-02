import { AiFillHome } from 'react-icons/ai';
import { FaPhoneAlt, FaImages } from 'react-icons/fa';
import { IoMdCar } from 'react-icons/io';

const sidebarLinks = [
  {
    title: 'Home',
    path: '/', // Matches the root homepage
    icon: AiFillHome, // Pass the component reference
  },
  {
    title: 'Contact',
    path: '/Contact', // Lowercase path for consistency
    icon: FaPhoneAlt,
  },
  {
    title: 'Gallery',
    path: '/Gallery', // Lowercase path for consistency
    icon: FaImages,
  },
  {
    title: 'Interior Services',
    path: '/InteriorServices', // Ensure consistency in naming conventions
    icon: IoMdCar,
  },
  {
    title: 'Exterior Services',
    path: '/ExteriorServices', // Ensure consistency in naming conventions
    icon: IoMdCar,
  },
];

export default sidebarLinks;
