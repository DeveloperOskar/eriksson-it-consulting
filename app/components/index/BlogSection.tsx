import IndexSection from "./IndexSection";

export const BlogSection = () => {
  return (
    <IndexSection subTitle={"Latest article"} title={"Blogg"}>
      <p className="text-md mt-4 text-gray-500 xl:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti
        asperiores mollitia natus voluptatibus voluptates? Quaerat deserunt
        placeat ratione esse ullam eligendi numquam ipsa nihil tenetur, id, fuga
        excepturi rerum. Quaerat deserunt placeat ratione esse ullam eligendi
        numquam ipsa nihil tenetur, id, fuga excepturi rerum. Lorem ipsum, dolor
        sit amet consectetur adipisicing elit.
      </p>

      <video height="auto" width="100%" controls className="mt-6">
        <source
          src="https://www.youtube.com/embed/g5V6koptSXs"
          type="video/mp4"
        />
      </video>

      <p className="text-md mt-2 text-gray-500 xl:text-lg">
        Hitta mer att läsa
        <span className="font-bold text-black underline">här</span>
      </p>
    </IndexSection>
  );
};
