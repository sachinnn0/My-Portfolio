import sidefolioAceternity from "public/images/Thumbnail-1.png";
import sidefolioAceternity1 from "public/images/M&M Ecommerce-1.png";
import sidefolioAceternity2 from "public/images/M&M Ecommerce-2.png";
import sidefolioAlgochurn from "public/images/Thumbnail-2.png";
import sidefolioAlgochurn1 from "public/images/Foodforshot-1.png";
import sidefolioAlgochurn2 from "public/images/Foodforshot-2.png";
import sidefolioMoonbeam from "public/images/Thumbnail-3.png";
import sidefolioMoonbeam1 from "public/images/Restaurant-1.jpeg";
import sidefolioMoonbeam2 from "public/images/Restaurant-2.png";
import sidefolioTailwindMasterKit from "public/images/Thumbnail-4.png";
import sidefolioTailwindMasterKit1 from "public/images/Thumbnail-4.png";
import sidefolioTailwindMasterKit2 from "public/images/Thumbnail-4.png";

export const products = [
  {
    href: "https://www.figma.com/design/c8aKHjJvfLcrG1VGG5FsXK/M-M-Ecommerce?node-id=110-10&t=Riq8TsJmlkgoGyxg-1",
    title: "M&M Ecommerce",
    description: "An Ecommerce Website which Focus on Printing T-shirts. ",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity1, sidefolioAceternity2],
    stack: ["Figma", "React", "Tailwindcss"],
    slug: "aceternity",
    content: (
      <div>
        <p>
          As a UI/UX Designer at M&M Ecommerce, I focus on creating intuitive,
          user-friendly experiences that make shopping for custom-printed
          T-shirts a breeze. I collaborate with developers and stakeholders to
          design interfaces that are both visually appealing and functional. By
          understanding user needs and applying principles of modern design, I
          ensure that our platform is not only aesthetically pleasing but also
          easy to navigate and engaging. My goal is to blend creativity with
          usability, turning every interaction into a delightful experience for
          our customers.{" "}
        </p>
        {/* <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "} */}
      </div>
    ),
  },
  {
    href: "https://www.figma.com/design/YvA3MmGXKwqE25OIbNRs4L/Food-for-shoot?node-id=31-66&t=XqJA1q8s7fXwzrrt-1",
    title: "Food for Shoot",
    description:
      "Landing page of a Advertising Agency that focuses on Food Photography.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn1, sidefolioAlgochurn2],
    stack: ["Figma"],
    slug: "algochurn",
    content: (
      <div>
        <p>
          The Food for Shoot landing page is designed for an advertising agency
          specializing in mouth-watering food photography. The layout highlights
          vibrant visuals and creative compositions that help brands showcase
          their dishes in the most appealing way possible.{" "}
        </p>
        <p>
          This landing page focuses on engaging restaurant owners, food brands,
          and culinary businesses by offering a glimpse into the agency&apos;s
          expertise. With an easy-to-navigate structure, strong calls to action,
          and stunning food imagery, it aims to convert visitors into clients
          seeking high-quality visual storytelling for their products.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://www.figma.com/design/6yGJTWfEruwBPhA3E2xpo6/Restaurant-Website?node-id=4-2&t=fBAybCsOrn4MYZUk-1",
    title: "Restaurant Website",
    description:
      "A Restaurant Website that focuses on providing a seamless dining experience.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam1, sidefolioMoonbeam2],
    stack: ["Figma"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
          This Restaurant Website is designed to offer visitors an exceptional
          online dining experience. The layout is clean and modern, featuring
          high-quality images, an easy-to-navigate menu, and clear calls to
          action for reservations and orders.{" "}
        </p>
        <p>
          The website ensures a seamless user journey from browsing dishes to
          booking a table or placing an online order. It&apos;s responsive
          across devices, making it easy for customers to explore the
          restaurant&apos;s offerings whether on mobile or desktop. The design
          focuses on enhancing the brand&apos;s identity while improving
          customer engagement.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://gradient.sachinvishwakarma.site/",
    title: "Gredient Generator",
    description:
      "A Gradient Generator that allows you to create beautiful gradients.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit1, sidefolioTailwindMasterKit2],
    stack: ["React", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          The Gradient Generator is a simple and intuitive tool that helps you
          design stunning gradients for your projects. With just a few clicks,
          you can choose your colors, adjust angles, and copy the CSS code
          instantly.{" "}
        </p>
        <p>
          Whether you&apos;s designing a website, an app, or any graphic
          element, this generator makes it easy to experiment with color
          combinations and preview them in real-time. It&apos;s perfect for
          developers, designers, and anyone looking to enhance their UI with
          smooth, modern gradients.
        </p>{" "}
      </div>
    ),
  },
];
