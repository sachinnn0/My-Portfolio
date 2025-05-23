import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Sachin</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Frontend Developer and Designer who loves{" "}
        <Highlight>building websites</Highlight> that can make a real impact. I enjoy crafting user-friendly, visually appealing interfaces that are both functional and engaging.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
      With a strong eye for {" "}
        <Highlight>design,</Highlight> I focus on creating clean, responsive layouts that offer a great user experience. I’m passionate about blending design and development to bring ideas to life on the web.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
