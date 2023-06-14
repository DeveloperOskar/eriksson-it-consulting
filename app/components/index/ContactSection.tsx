import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import FilledButton from "../FilledButton";
import Input from "../Input";
import TextArea from "../TextArea";
import IndexSection from "./IndexSection";
import { cookies } from "next/headers";
import { Database } from "@/app/types/supabase";
import { revalidatePath } from "next/cache";

const ContactSection = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const email = formData.get("email")?.toString();
    const subject = formData.get("subject")?.toString();
    const message = formData.get("message")?.toString();

    //todo add validation and request limitations
    const supabase = createServerActionClient<Database>(
      { cookies },
      {
        supabaseKey: process.env.SUPABASE_ANON_KEY,
        supabaseUrl: process.env.SUPABASE_URL,
      }
    );
    await supabase.from("messages").insert({ message, subject, email });

    revalidatePath("/");
  };

  return (
    <IndexSection subTitle={"Nå mig"} title={"Kontakt"}>
      <p className="mt-4s">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dignissimos
        consectetur odio corrupti natus, enim amet atque, nemo id eaque
        explicabo quasi voluptatum nam harum unde exercitationem! Cupiditate,
        qui est?
      </p>

      <div className="mx-auto mt-10 max-w-[1000px] rounded-lg border border-gray-200 p-6 shadow">
        <form action={handleSubmit} className="flex flex-col gap-8">
          <Input
            icon="email"
            placeholder="dev.oskar.eriksson@gmail.com"
            type="email"
            htmlFor="your-email"
            label="Din email"
            name="email"
          />

          <Input
            icon="subject"
            placeholder="Arbete"
            type="text"
            htmlFor="your-subject"
            label="Ämne"
            name="subject"
          />

          <TextArea
            placeholder="Skriv ditt meddelande här..."
            rows={4}
            htmlFor="contact-message"
            label="Meddelande"
            name="message"
          />

          <FilledButton
            type="submit"
            buttonText={"Skicka"}
            extraClasses="lg:max-w-[100px] ml-auto w-full"
          />
        </form>
      </div>
    </IndexSection>
  );
};

export default ContactSection;
