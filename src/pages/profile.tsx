import rico from "../assets/rico.jpg";
import Skill from "../components/profile/Skill";

const Profile = () => {
  return (
    <main className="">
      <div className="bg-gradient-to-br from-teal-600 to-black to-50% w-full h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-semibold">Hello 👋</h2>
          <h1 className="text-6xl font-bold">I'm Rico Buez.</h1>
          <p className="text-2xl">And I'm an awesome developer. 😉 </p>
        </div>

        <div className="">
          <img
            src={rico}
            alt=""
            className="rounded-full border-4 border-white w-80 h-80"
          />
        </div>
      </div>

      <div className="h-screen w-full bg-gradient-to-bl from-black to-blue-600 from-50% text-white flex flex-col items-center gap-12">
        <h1 className="text-4xl font-semibold text-center">My Skills</h1>

        <div className="flex gap-8 flex-wrap justify-center">
          <Skill skill="HTML5" />
          <Skill skill="CSS3" />
          <Skill skill="JavaScript" />
          <Skill skill="React" />
          <Skill skill="Next.js" />
          <Skill skill="Tailwind CSS" />
        </div>
      </div>
    </main>
  );
};

export default Profile;
