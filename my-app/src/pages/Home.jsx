import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data";
import MovieCard from "../component/MovieCard";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

      {/* เพิ่มส่วนการแสดงรายการหนัง */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} year={movie.year} />
        ))}
      </div>
    </div>
  );
}

export default Home;