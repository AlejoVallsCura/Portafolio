import React from "react";

const About = () => {
  return (
    <div
      name="Sobre Mi"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre Mi 🙌🏼
          </p>
        </div>

        <p className="text-xl mt-20">
          Soy Alejo Valls Cura, actualmente resido en Mendoza, Argentina. La ciudad en la que naci y vivi toda mi vida! Siempre estoy rodeado de mis amigos y familia, es lo que mas me gusta.
        </p>

        <br />

        <p className="text-xl">
          Me costo mucho trabajo encontrar algo a lo que me quiera dedicar por el resto de mi vida, hasta que encontre la programacion, me gusta mucho diseñar paginas web como aplicaciones. 
        </p>
      </div>
    </div>
  );
};

export default About;
