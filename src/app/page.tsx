import { Posts } from '@/modules/Home/Posts';

const Homepage = async () => {
  return (
    <section className="grid h-full place-content-center">
      <Posts />
    </section>
  );
};

export default Homepage;
