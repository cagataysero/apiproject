import React from "react";
import NavBar from "../../components/NavBar";
import Featured from "./components/Featured";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <section id="featured" className="text-white ">
          <Featured />
        </section>
      </div>
    </>
  );
};

export default Home;
