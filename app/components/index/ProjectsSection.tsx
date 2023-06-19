import { Database } from "@/app/types/supabase";
import IndexSection from "./IndexSection";
import ForwardButton from "../ForwardButton";
import Link from "next/link";

interface Projects {
  project: Database["public"]["Tables"]["projects"]["Row"];
  latestImageUrl: string;
}

export const ProjectsSection: React.FC<Projects> = ({
  project,
  latestImageUrl,
}) => {
  return (
    <IndexSection subTitle={"Latest project"} title={project.name || ""}>
      <p className="text-md mt-4 text-gray-500 lg:max-w-[80%] xl:text-lg">
        {project.text?.substring(0, 600)}...
      </p>

      <img
        src={latestImageUrl}
        alt="latest project image"
        className=" mx-auto my-6 h-[600px] object-contain"
      />

      <div className="flex flex-col items-center justify-center">
        <Link
          href={"projects/" + project.id}
          className="font-semibold hover:underline"
        >
          Read more about {project.name} here
        </Link>

        <p className="my-3 text-sm text-gray-500  md:text-base">
          &#8212; OR &#8212;
        </p>
        <ForwardButton
          extraClasses="text-center font-semibold"
          href={"projects"}
          text={"See all projects"}
        />
      </div>
    </IndexSection>
  );
};
