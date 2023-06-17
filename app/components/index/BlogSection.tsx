import { Database } from "@/app/types/supabase";
import IndexSection from "./IndexSection";
import Link from "next/link";
import ForwardButton from "../ForwardButton";

interface Props {
  latestBlog: Database["public"]["Tables"]["blogs"]["Row"];
}

export const BlogSection: React.FC<Props> = ({ latestBlog }) => {
  return (
    <IndexSection subTitle={"Latest article"} title={latestBlog.name}>
      <p className="text-md mt-4 text-gray-500 lg:max-w-[80%] xl:text-lg">
        {latestBlog.text}...
      </p>

      <iframe
        className=" mx-auto mb-10 mt-6 aspect-video  w-full lg:max-w-[70%]"
        src="https://www.youtube.com/embed/rtgjFEJaFI8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <ForwardButton href={"/blog/" + latestBlog.id} text={"Läs mer här"} />
    </IndexSection>
  );
};
