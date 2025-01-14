import rico from "./assets/rico.jpg";

function App() {
  return (
    <div className="bg-black w-full h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
      <div className="text-center lg:text-left">
        <h2 className="text-4xl font-semibold">Hello 👋</h2>
        <h1 className="text-6xl">I'm Rico Buez.</h1>
        <p className="text-2xl">And I'm an awesome developer. 😉 </p>
      </div>

      <div className="">
        <img
          src={rico}
          alt=""
          className="rounded-full border-4 border-white w-[20rem] h-[20rem] xl:w-[40rem] xl:h-[40rem]"
        />
      </div>
    </div>
  );
}

export default App;
