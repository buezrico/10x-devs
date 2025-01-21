import React from "react";

const Home = () => {
  return (
    <main className="h-screen w-full flex flex-col gap-12 items-center justify-center">
      <h1 className="text-3xl italic font-semibold text-blue-600">
        10x Devs Home Page
      </h1>
      <ul className="flex gap-8 text-lg">
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/product">Product Page</a>
        </li>
      </ul>
    </main>
  );
};

export default Home;
