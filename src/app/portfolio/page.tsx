export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="w-4/5 flex flex-col items-center justify-center mx-auto">
        <div className="w-full md:w-full px-20 text-center flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">My Portfolio</h1>
          <div className="grid grid-cols-2 gap-4 justify-center items-center p-16 w-screen">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">Video Production</h3>
              <img
                className="object-cover rounded-full w-8/12 py-20"
                src="https://images.pexels.com/photos/3418613/pexels-photo-3418613.jpeg?cs=srgb&dl=pexels-bruno-massao-3418613.jpg&fm=jpg"
                alt="Photo of Video Camera"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">Programming</h3>
              <img
                className="object-cover rounded-full w-8/12 py-20"
                src="https://images.pexels.com/photos/3418613/pexels-photo-3418613.jpeg?cs=srgb&dl=pexels-bruno-massao-3418613.jpg&fm=jpg"
                alt="Photo of Alex Gardiner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
