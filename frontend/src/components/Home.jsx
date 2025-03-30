const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-white bg-[#020206]">
      <h1 className="text-5xl font-bold text-[#564B9E]">Digbijaya Lenka</h1>
      <p className="mt-4 text-xl text-[#453882]">Full Stack Developer</p>
      <p className="mt-2 max-w-lg text-center text-[#D5C67A]">
        Passionate about building scalable web applications and exploring new
        technologies.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 text-lg font-medium bg-[#3E226D] text-white rounded-lg hover:bg-[#564B9E] transition-all"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;
