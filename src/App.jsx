import { useState } from "react";
import logo from "./logo.svg";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import menu from "./menu.png";
import back from "./back.png";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);

  if (page === 0) {
    return (
      <div className="font-inter flex flex-col gap-4">
        <div className="flex justify-center items-center p-8 bg-[#fff6e7]">
          <img src={img1} />
        </div>
        <div className="p-8 text-center flex flex-col gap-2">
          <h1 className="font-semibold text-2xl">Feel Stronger</h1>
          <h1 className="text-sm text-zinc-400 px-20">
            Learn from the world's best yoga teahcers at home or on the go
          </h1>
        </div>
        <div className="text-center">
          <button
            className="p-4 px-12 bg-zinc-800 text-zinc-100 text-xs"
            onClick={() => setPage(page + 1)}
          >
            Get started
          </button>
        </div>
      </div>
    );
  }

  if (page === 1) {
    return (
      <>
        <div className="font-inter flex flex-col gap-4">
          <div className="flex justify-between items-center p-8">
            <img src={menu} className="h-8 w-8" />
            <div className="p-2 px-4 bg-zinc-300 font-medium rounded-full">
              V
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-medium text-2xl">Recommended for Today</h1>
          </div>
          <div className="flex justify-center items-center p-8 bg-[#ffeeed]">
            <img src={img2} onClick={() => setPage(page + 1)} />
          </div>

          <div className="flex justify-between p-4">
            <h1 className="font-medium">Morning flow</h1>
            <h1 className="text-zinc-400">45 mins</h1>
          </div>
        </div>
        <div className="font-inter flex flex-col gap-4">
          <div className="flex justify-center items-center p-8 bg-[#fff6e7]">
            <img src={img3} onClick={() => setPage(page + 1)} />
          </div>

          <div className="flex justify-between p-4">
            <h1 className="font-medium">Evening flow</h1>
            <h1 className="text-zinc-400">45 mins</h1>
          </div>
        </div>
      </>
    );
  }

  if (page === 2) {
    return (
      <div className="font-inter flex flex-col gap-4">
        <div className="flex justify-between items-center p-8">
          <img
            src={back}
            className="h-6 w-6"
            onClick={() => setPage(page - 1)}
          />
          <h1 className="font-medium text-xl">Challenge</h1>
          <div className=""></div>
        </div>
        <div className="flex justify-center items-center p-8 bg-[#fff6e7]">
          <img src={img3} />
        </div>

        <h1 className="text-center text-6xl text-zinc-800">00:45</h1>
        <h1 className="text-sm text-zinc-400 px-28 text-center">
          Learn from the world's best yoga teahcers at home or on the go
        </h1>

        <div className="text-center">
          <button
            className="p-4 px-12 bg-zinc-800 text-zinc-100 text-xs"
            onClick={() => setPage(page + 1)}
          >
            Join challenge
          </button>
        </div>
      </div>
    );
  }
}

export default App;
