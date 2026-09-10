import { useState } from 'react';
import { movies } from '../data';   

function MovieGallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < movies.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);   // ไปเรื่องถัดไป
    } else {
      setIndex(0);           // สุดท้ายแล้ว วนกลับเรื่องแรก
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);  // กลับค่า true/false
  }

  const movie = movies[index];   // ค่าที่คำนวณจาก state ไม่ต้องเป็น state เอง

  return (
    <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-md">
      <button 
        onClick={handleNextClick}
        className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-700 transition"
      >
        เรื่องถัดไป
      </button>

      {/* ส่วนแสดงรูปโปสเตอร์ */}
      <div className="mt-4 flex flex-col gap-6 md:flex-row">
        {movie.poster && (
          <img 
            src={movie.poster} 
            alt={movie.title}
            className="mx-auto h-64 rounded-lg object-cover shadow-md" 
          />
        )}
      </div>

      {/* ส่วนแสดงรายละเอียดหนัง */}
      <h2 className="mt-4 text-2xl font-bold text-slate-800">
        {movie.title} <span className="text-slate-400">({movie.year})</span>
      </h2>
      
      <p className="text-sm text-slate-500">
        เรื่องที่ {index + 1} จาก {movies.length} | {movie.genre}
      </p>

      {/* ปุ่มเปิด-ปิดเรื่องย่อ */}
      <button 
        onClick={handleMoreClick} 
        className="mt-3 text-sm text-cyan-600 font-medium underline cursor-pointer"
      >
        {showMore ? 'ซ่อนเรื่องย่อ' : 'อ่านเรื่องย่อ'}
      </button>
      
      {showMore && (
        <p className="mt-2 text-slate-700 text-sm leading-relaxed">
          {movie.detail}
        </p>
      )}
    </div>
  );
}

export default MovieGallery;