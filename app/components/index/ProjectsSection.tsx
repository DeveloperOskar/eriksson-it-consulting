import { Database } from "@/app/types/supabase";
import IndexSection from "./IndexSection";
import ForwardButton from "../ForwardButton";

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
        className=" mx-auto my-6"
      />

      <ForwardButton href={"projects"} text={"Se alla project"} />
    </IndexSection>
  );
};
