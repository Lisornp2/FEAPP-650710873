// import React from 'react';
// import ProfileCard from './component/ProfileCard';
// import Button from './component/Button';

// function App() {
//   // ข้อมูลสมาชิก 3 คน
//   const members = [
//     {
//       id: 1,
//       name: 'สมปอง มุ้ยตุ้ย',
//       nickname: 'สมปอง',
//       major: 'วิทยาการคอมพิวเตอร์',
//       favorites: ['เขียนโค้ด', 'เล่นเกม FPS', 'ดื่มกาแฟ', 'อ่านการ์ตูน']
//     },
//     {
//       id: 2,
//       name: 'สมหญิง มะเเง้วด็อก',
//       nickname: 'สมหญิง',
//       major: 'เทคโนโลยีสารสนเทศ',
//       favorites: ['วาดรูป', 'ฟังเพลง', 'เที่ยวคาเฟ่']
//     },
//     {
//       id: 3,
//       name: 'สมหมาย สะง็อกก๊อก',
//       nickname: 'สมหมาย',
//       major: 'เทคโนโลยีสารสนเทศ',
//       favorites: ['ดูหนัง', 'ออกกำลังกาย', 'ถ่ายรูป']
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header ของหน้าเว็บ */}
//         <header className="text-center mb-12">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
//             สมาชิกกลุ่มของเรา
//           </h1>
//           <p className="text-slate-600 max-w-xl mx-auto mb-6">
//             ทำความรู้จักกับสมาชิกในทีมผ่านการ์ดโปรไฟล์สุดเท่
//           </p>
          
//           {/* ตัวอย่างการใช้ Button Variants ในส่วน Header */}
//           <div className="flex justify-center gap-3">
//             <Button variant="primary">เพิ่มสมาชิกใหม่</Button>
//             <Button variant="secondary">รีเฟรชข้อมูล</Button>
//           </div>
//         </header>

//         {/* Responsive Grid: มือถือ 1 / แท็บเล็ต 2 (md) / โน้ตบุ๊ก 3 (lg) */}
//         <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {members.map((m) => (
//             <ProfileCard
//               key={m.id}
//               name={m.name}
//               nickname={m.nickname}
//               major={m.major}
//               favorites={m.favorites}
//             />
//           ))}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;