import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Creative designer with a passion for crafting stunning user experiences.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently exploring futuristic UI animations and interactive experiences.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/p5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s bring your vision to life. Ready to collaborate?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Nike Redesign Website",
    des: "A complete redesign of the Nike website with a modern, sleek UI/UX approach, enhancing user experience and accessibility.",
    img: "/nike.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/YETzGMJSAFVqbeZWHIRQsd/Nike-Website-(Community)?page-id=0%3A1&node-id=392-27428&p=f&viewport=-151%2C91%2C0.02&t=ajg0hMIw8uKIfMrh-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=392%3A27428",
  },
  {
    id: 2,
    title: "E-Infochips Android Redesign",
    des: "Revamped the E-Infochips Android interface with a user-friendly and visually appealing design, optimizing accessibility and responsiveness.",
    img: "/einfochips.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/9PBA6khxHzBJcZMA5TWQ8g/e-infochips-(Community)?page-id=31%3A5&node-id=48-105&p=f&viewport=190%2C214%2C0.33&t=NSMMvX6AgyHi22ew-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=98%3A1464",
  },
  {
    id: 3,
    title: "Milk-Shake Cafe Menu",
    des: "Designed an interactive and aesthetically pleasing digital menu for a milkshake cafe, making ordering a delightful experience.",
    img: "/milkshake.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/aHl96fR1chSznhqABsyLPX/social-media-portfolio-(Community)?page-id=14%3A288&node-id=560-21735&p=f&viewport=432%2C25%2C0.05&t=YzKXdWvEsXev03sF-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    id: 4,
    title: "Social Media Portfolio for Client",
    des: "Developed a personalized and engaging social media portfolio, enhancing the client's online presence with a unique visual identity.",
    img: "/socialmedia.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/aHl96fR1chSznhqABsyLPX/social-media-portfolio-(Community)?page-id=14%3A288&node-id=560-21735&p=f&viewport=432%2C25%2C0.05&t=YzKXdWvEsXev03sF-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    id: 5,
    title: "Thar Redesign Website",
    des: "Redesigned the Thar website with a bold and adventurous theme, showcasing the ruggedness and versatility of the vehicle.",
    img: "/thar.png",
    iconLists: ["/figma.svg"],
    link: "/ui.thar.comhttps://www.figma.com/proto/zxkFJe7aEQhoMjcu4Sm3wx/THAR-WEBSITE-REDESIGN-(Community)?page-id=0%3A1&node-id=4-2&p=f&viewport=103%2C448%2C0.05&t=7uG27DuzCqMQTZJg-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=14%3A13",
  },
  {
    id: 6,
    title: "Travelling Website",
    des: "Created a visually captivating travel website that offers a seamless browsing experience for trip planning and destination exploration.",
    img: "/travel.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/kgM8PU6ZwTQXYkhpITjd4P/Travelverse-(Community)?page-id=0%3A1&node-id=7-1407&p=f&viewport=423%2C52%2C0.08&t=Mm4mq8iRbOR0LCcU-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
  },
];


export const testimonials = [
  {
    quote:
      "Working with Parva Shukla was an incredible experience. His attention to detail and creative problem-solving made our project a success. He always delivers beyond expectations and ensures top-notch quality in every aspect.",
    name: "Aastha",
    title: "Headlead at NavTech",
  },
  {
    quote:
      "Parva’s dedication and expertise in design are truly impressive. His ability to translate ideas into visually stunning and functional designs is exceptional. Would highly recommend him for any design project!",
    name: "Honey",
    title: "ProjectManager at NavTech",
  },
  {
    quote:
      "Parva Shukla is a true professional! His approach to design is innovative, and he understands the needs of the client perfectly. The work he delivered was nothing short of amazing.",
    name: "Aditya",
    title: "Founder at NavTech",
  },
  {
    quote:
      "Collaborating with Parva was a pleasure. His ability to think outside the box and deliver unique design solutions helped take our brand to the next level. Looking forward to working with him again!",
    name: "Harsh",
    title: "Co-Founder at NavTech",
  },
  {
    quote:
      "Parva’s skills and passion for design truly shine through his work. He listens, adapts, and executes flawlessly. Highly professional and an absolute asset to any team!",
    name: "Yaksh Rawal",
    title: "Product Manager at JKL Tech",
  },
  {
    quote:
      "From start to finish, working with Parva was smooth and enjoyable. His ability to balance creativity with usability is remarkable. Would definitely recommend him for any project!",
    name: "Khusi",
    title: "Design Lead at MNO Creations",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "UI/UX Designer & Frontend Developer",
    desc: "Crafting modern and intuitive user experiences using Figma and frontend technologies. Specializing in clean, functional, and visually appealing designs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance UI/UX Designer",
    desc: "Worked with multiple clients to design and enhance digital products, from wireframing to high-fidelity prototyping. Delivered impactful solutions tailored to brand identity and user needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: " Lead Designer for Web & App Projects",
    desc: "Led the design of multiple web and mobile applications, ensuring seamless user experiences and aesthetic excellence. Translated ideas into fully interactive prototypes for development handoff.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Creative Consultant for Startups & Brands",
    desc: "Helped startups establish a strong design presence by providing strategic UI/UX guidance, branding, and design solutions that align with their vision and target audience.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/community.png",
    url: "https://figma.com/@shukkla26",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/parva-shukla-ab4a61261/",
  },
];

