import { PageHead } from "@/common/components/PageHead";

export default function Home() {
  return (
    <div className="h-full">
      <PageHead
        removeTitleAppend
        description="Home page description"
        name="Home"
      />
      <section className="grid place-content-center h-full">
        <span>Hello world</span>
      </section>
    </div>
  );
}
