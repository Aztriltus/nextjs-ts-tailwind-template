import Image from "next/image";
import nextJsLogo from "public/nextjs-image-test.png";

const Homepage = async () => {
  return (
    <section className="bg-[#0A0A0A] grid h-full place-content-center">
      <Image alt="Next.js Logo" className="scale-75" src={nextJsLogo} />
    </section>
  );
};

export default Homepage;
