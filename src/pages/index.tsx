import { CrossIcon } from "@/modules/common/components/CustomIcon";
import PageHead from "@/modules/common/components/PageHead";

export default function Home() {
  return (
    <div className="">
      <PageHead
        append={false}
        description="Home page description"
        name="Home"
      />
      <CrossIcon />
      Hello world
    </div>
  );
}
