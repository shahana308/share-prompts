import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center max-md:hidden">
        Discover & Share
        <br className="max-md:hidden"></br>
        <span className="orange_gradient text-center"> AI-Powered Propmts</span>
      </h1>
      <p className="text-center desc">
        Promptopia is an open source AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>
    </section>
  );
};

export default Home;
