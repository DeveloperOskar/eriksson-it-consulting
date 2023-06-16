import { Database } from "@/app/types/supabase";
import IndexSection from "./IndexSection";

interface Projects {
  project: Database["public"]["Tables"]["projects"]["Row"];
}

export const ProjectsSection: React.FC<Projects> = ({ project }) => {
  return (
    <IndexSection subTitle={"Senaste"} title={"Projekt"}>
      {project.name}
    </IndexSection>
  );
};
