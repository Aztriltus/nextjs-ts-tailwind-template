import { PageHead } from '@/common/components/PageHead';

export default function Home() {
  return (
    <div className="h-full">
      <PageHead
        removeTitleAppend
        description="Home page description"
        name="Home"
      />
      <section className="grid h-full place-content-center">
        <span>Hello world</span>
      </section>
    </div>
  );
}
