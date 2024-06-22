import service1 from "../assets/service01.png";
import service2 from "../assets/service02.png";
import service3 from "../assets/service03.png";
import user1 from "../assets/team-01.png";
import user2 from "../assets/team-02.png";
import user3 from "../assets/team-03.png";

export const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
];

export const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
  },
  {
    question: "How do you use React with Tailwind CSS?",
    answer:
      "You can use Tailwind CSS classes in your React components to style them quickly and efficiently.",
  },
];

export const services = [
  {
    title: "Social Media Monitoring",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    image: service1,
  },
  {
    title: "Audience Research",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    image: service2,
  },
  {
    title: "Brand Monitoring",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    image: service3,
  },
];

export const testimonials = [
  {
    name: "Jane Smith",
    photo: user1,
    message: "This is an amazing service! Highly recommend to everyone.",
    position: "CEO, Company",
  },
  {
    name: "John Doe",
    photo: user2,
    message:
      "The team was incredibly supportive and the service was top-notch!",
    position: "CTO, Startup",
  },
  {
    name: "Eliyana Doe",
    photo: user3,
    message:
      "A fantastic experience from start to finish. I will definitely be back!",
    position: "Freelancer",
  },
];
