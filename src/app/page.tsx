import Image from 'next/image';
import nextJsLogo from 'public/nextjs-image-test.png';

const Homepage = async () => {
  return (
    <section className="grid h-full place-content-center bg-[#0A0A0A]">
      <Image alt="Next.js Logo" className="scale-75" src={nextJsLogo} />
    </section>
  );
};

export default Homepage;
