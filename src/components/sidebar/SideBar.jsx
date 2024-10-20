import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  const eGamesForChildren = [
    "whac-a-mole",
    "flappy-bird",
    "Doodlejump",
    "CandyCarsh",
    "Chrome_Dinosaur",
    "Code_Space_Invaders",
    "Snake_game",
    "Brick_breaker",
    "Pong",
    "Blackjack",
    "Minesweeper",
    "Wordle",
    "Sudoku",
    "T2080",
    "Connect_4",
    "Tic_Tac_Toe",
  ];
  const [side, setside] = useState(false);
  return (
    <div
      className={`w-[15%] h-[93vh] bg-[#7020f0] relative  ${
        side ? "left-0" : "left-[-15%]"
      } bg-opacity-80 backdrop-blur-sm  duration-300  z-50 `}
    >
      <div>
        <span
          className={`absolute top-[50%]  right-[-25%] z-50 cursor-pointer ${
            side ? "text-blue-600 duration-300" : "text-red-600 duration-300"
          } text-6xl `}
          onClick={() => setside(!side)}
        >
          {side ? (
            <i class="ri-arrow-right-s-line"></i>
          ) : (
            <i class="ri-arrow-left-s-line"></i>
          )}
        </span>
        <div className="h-[93vh] overflow-y-auto text-white flex flex-col gap-7 py-3 ">
          <h1 className="text-xl ml-1">Games</h1>
          {eGamesForChildren.map((item, index) => {
            return (
              <div className=" px-2  h-[10vh] w-full  " key={index}>
                <NavLink
                  to={`/game/${item}`}
                  className={`px-2 py-2 bg-[#7636dd] rounded-xl hover:bg-[#6c29d8] duration-300`}
                >
                  {item}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
