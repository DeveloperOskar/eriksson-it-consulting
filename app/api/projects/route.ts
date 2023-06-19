import { Database } from "@/app/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

type Project = Omit<
  Database["public"]["Tables"]["projects"]["Row"],
  "image_name"
>;

interface Response extends Project {
  url: string;
}

export const GET = async () => {
  const supabase = createRouteHandlerClient<Database>(
    { cookies },
    {
      supabaseKey: process.env.SUPABASE_ANON_KEY,
      supabaseUrl: process.env.SUPABASE_URL,
    }
  );

  const { data, error } = await supabase.from("projects").select("*");

  const response: Response[] = [];

  data?.forEach((d, i) => {
    const imgUrl = supabase.storage
      .from("projects-images")
      .getPublicUrl(d.img_name!).data.publicUrl;

    response.push({
      created_at: d.created_at,
      id: d.id,
      name: d.name,
      url: imgUrl,
      img_name: d.img_name,
      text: d.text,
      updated_at: d.updated_at,
    });
  });

  return NextResponse.json(response);
};
