import React from "react";
import { Route, Routes } from "react-router-dom";
import Rock from "../components/page/gameIndexhtml/Rock";
import FlipyBird from "../components/page/gameIndexhtml/FlipyBird";
import Doodlejump from "../components/page/gameIndexhtml/Doodlejump";
import CandyCarsh from "../components/page/gameIndexhtml/CandyCarsh";
import Chrome_Dinosaur from "../components/page/gameIndexhtml/Chrome_Dinosaur";
import Code_Space_Invaders from "../components/page/gameIndexhtml/Code_Space_Invaders";
import Snake_game from "../components/page/gameIndexhtml/Snake_game";
import Bricker from "../components/page/gameIndexhtml/Bricker";
import Pong from "../components/page/gameIndexhtml/Pong";
import Blackjack from "../components/page/gameIndexhtml/Blackjack";
import Minesweeper from "../components/page/gameIndexhtml/Minesweeper";
import Wordle from "../components/page/gameIndexhtml/Wordle";
import Sudoku from "../components/page/gameIndexhtml/Sudoku";
import T2080 from "../components/page/gameIndexhtml/T2080";
import Connect_4 from "../components/page/gameIndexhtml/Connect_4";
import Tic_Tac_Toe from "../components/page/gameIndexhtml/Tic_Tac_Toe";
import Private from "../components/private/Private";
function GameRoutes() {
  return (
    <Routes>
      <Route element={<Private />}>
        <Route path="/" element={<Rock />} />
        <Route path="/whac-a-mole" element={<Rock />} />
        <Route path="/flappy-bird" element={<FlipyBird />} />
        <Route path="/Doodlejump" element={<Doodlejump />} />
        <Route path="/CandyCarsh" element={<CandyCarsh />} />
        <Route path="/Chrome_Dinosaur" element={<Chrome_Dinosaur />} />
        <Route path="/Code_Space_Invaders" element={<Code_Space_Invaders />} />
        <Route path="/Snake_game" element={<Snake_game />} />
        <Route path="/Brick_breaker" element={<Bricker />} />
        <Route path="/Pong" element={<Pong />} />
        <Route path="/Blackjack" element={<Blackjack />} />
        <Route path="/Minesweeper" element={<Minesweeper />} />
        <Route path="/Wordle" element={<Wordle />} />
        <Route path="/Sudoku" element={<Sudoku />} />
        <Route path="/T2080" element={<T2080 />} />
        <Route path="/Connect_4" element={<Connect_4 />} />
        <Route path="/Tic_Tac_Toe" element={<Tic_Tac_Toe />} />
      </Route>
    </Routes>
  );
}

export default GameRoutes;
