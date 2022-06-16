import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import "./App.css";

function App() {
  return (
    <div
      className="min-h-screen p-10"
      style={{
        background:
          "url(https://storage.googleapis.com/learngce-bucket-gcpftrk06/playstation-bg-pattern.jpeg)",
      }}
    >
      <div
        className="flex flex-col items-center justify-center text-white w-max rounded-3xl mx-auto p-10"
        style={{ background: "#2e3036" }}
      >
        <img
          className="h-40 w-40 rounded-full mb-8"
          src="https://storage.googleapis.com/learngce-bucket-gcpftrk06/profile.jpeg"
          alt="profile"
        />
        <h1
          className="font-bold mb-2"
          style={{ fontSize: "calc(10px + 2vmin)" }}
        >
          Muhammad Fitrah Pratama
        </h1>
        <p className="text-gray-600">Frontend Developer</p>
        <div className="mt-6">
          <button className="px-2">
            <a
              href="https://www.github.com/FGDevs"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiGithubFill
                className="duration-150 text-gray-600 hover:text-gray-300"
                size={20}
              />
            </a>
          </button>
          <button className="px-2">
            <a
              href="https://www.linkedin.com/in/fitrahpratama"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiLinkedinFill
                className="duration-150 text-gray-600 hover:text-gray-300"
                size={20}
              />
            </a>
          </button>
        </div>
      </div>

      <div
        className="grid gap-6 mt-8 w-max mx-auto"
        style={{ gridTemplateColumns: "minmax(auto, 548px) 320px" }}
      >
        <div className="p-6" style={{ background: "#2e3036" }}>
          <h3 className="font-bold text-xl text-white">My Story</h3>
          <p className="text-md text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <div className="grid grid-flow-row gap-3 bg-white rounded-xl p-6">
            <h3 className="font-bold text-xl text-gray-600">Personal Info</h3>
            <div className="flex items-center space-x-3 border-b p-2">
              <h4>Age:</h4>
              <p className="font-bold text-sm">55 years old</p>
            </div>
            <div className="flex items-center space-x-3 border-b p-2">
              <h4>Phone:</h4>
              <p className="font-bold text-sm">+62-851-6060-xxxx</p>
            </div>
            <div className="flex items-center space-x-3 border-b p-2">
              <h4>Email:</h4>
              <p className="font-bold text-sm">fitrakadev@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
