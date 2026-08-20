import react from "react";
import Greeting from './component/Greeting';
import Footer from './component/Footer';
import Header from './component/Header';
import MovieList from './component/Movielist';
import Card from './component/Card'
import ProfileCard from './component/ProfileCard';


const members = [
  { id: 1, name: 'ภูริภัทร ลิสอน', nickname: 'ภู',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'เเฮะ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ใบบัวบก', 'ยีราฟ'] },
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ไตเติ้ล',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['กระเจี๊ยบ', 'ปลาวาฬ'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;