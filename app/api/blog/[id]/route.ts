import { Database } from "@/app/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-static";
//fsd
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const supabase = createRouteHandlerClient<Database>(
    { cookies },
    {
      supabaseKey: process.env.SUPABASE_ANON_KEY,
      supabaseUrl: process.env.SUPABASE_URL,
    }
  );

  const { data } = await supabase.from("blogs").select("*").eq("id", params.id);

  return NextResponse.json(data);
};
