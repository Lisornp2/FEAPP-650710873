import React from 'react';
import Button from './Button';

// รับ props แบบ Destructuring และใส่ default value ให้ major
function ProfileCard({ name, nickname, major = 'ยังไม่ระบุสาขา', favorites = [] }) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* ส่วนหัวของการ์ด */}
        <div className="border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-bold text-slate-800">{name}</h2>
            <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
              {nickname}
            </span>
          </div>
          <p className="mt-2 text-xs font-semibold tracking-wide text-slate-400 uppercase">
            🎓 {major}
          </p>
        </div>

        {/* ส่วนแสดงของที่ชอบ (Favorites) แบบ Pills */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            ❤️ ของที่ชอบ
          </h3>
          <div className="flex flex-wrap gap-2">
            {favorites.map((fav, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full hover:bg-indigo-100 transition-colors"
              >
                {fav}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ปุ่มกด action การ์ด (เรียกใช้ Component Button) */}
      <div className="flex gap-2 pt-2 border-t border-slate-50">
        <Button variant="primary" className="w-full">
          ดูโปรไฟล์
        </Button>
        <Button variant="outline" className="w-full">
          ทักทาย
        </Button>
      </div>
    </div>
  );
}

export default ProfileCard;