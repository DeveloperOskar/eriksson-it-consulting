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

  const { data, error } = await supabase.storage
    .from("projects-images")
    .createSignedUploadUrl("project-placeholder.png");

  return NextResponse.json(data);
};
