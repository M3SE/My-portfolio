const Journey = () => {
    return (
      <section
        id="journey"
        className="flex flex-col items-center justify-center text-center bg-gray-800 text-white py-20 px-6"
      >
        <h2 className="text-4xl font-bold mb-8">Who I Am</h2>
  
        {/* Timeline */}
        <div className="space-y-8 max-w-3xl">
  <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-md shadow-md">
    <h3 className="text-xl font-semibold text-orange-500">2018 – Started My Journey</h3>
    <p className="text-gray-300">
      Discovered coding as a way to turn my curiosity into a career.
    </p>
  </div>
  <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-md shadow-md">
    <h3 className="text-xl font-semibold text-orange-500">2023 – Present</h3>
    <p className="text-gray-300">
      Continuously learning and building projects with passion and soul.
    </p>
  </div>
</div>

  
        {/* Inspiration */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">What Inspires Me</h3>
          <p className="text-gray-300 max-w-xl mx-auto">
            Music, art, and life experiences. I strive to bring emotion and depth
            into every line of code I write.
          </p>
        </div>
      </section>
    );
  };
  
  export default Journey;
  