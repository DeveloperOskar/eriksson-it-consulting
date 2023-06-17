import { Database } from "@/app/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = createRouteHandlerClient<Database>(
    { cookies },
    {
      supabaseKey: process.env.SUPABASE_ANON_KEY,
      supabaseUrl: process.env.SUPABASE_URL,
    }
  );

  const latestProjectPromise = supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  const latestBlogPromise = supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  const latestProjectUrl = await supabase.storage
    .from("projects-images")
    .getPublicUrl("project-placeholder.png").data.publicUrl;

  const [blog, project] = await Promise.all([
    latestBlogPromise,
    latestProjectPromise,
  ]);

  return NextResponse.json({
    project: project.data,
    projectLatestImage: latestProjectUrl,
    blog: blog.data,
  });
};
