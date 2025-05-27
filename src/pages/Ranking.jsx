import { useState } from 'react';
import { motion } from 'framer-motion';

const Ranking = () => {
  const [employees] = useState([
    {
      id: 1,
      name: 'John Doe',
      position: 'Senior Developer',
      points: 950,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      achievements: ['Best Developer Q1', 'Perfect Attendance']
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Project Manager',
      points: 920,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      achievements: ['Project Excellence Award', 'Team Leader of the Month']
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'UI/UX Designer',
      points: 890,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      achievements: ['Design Innovation Award']
    },
    {
      id: 4,
      name: 'Sarah Williams',
      position: 'Marketing Specialist',
      points: 870,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      achievements: ['Marketing Campaign of the Year']
    },
    {
      id: 5,
      name: 'David Brown',
      position: 'Sales Representative',
      points: 850,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      achievements: ['Top Sales Performer']
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-white pb-16">
      {/* Header & Slogan */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 rounded-b-3xl shadow-lg mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 tracking-wide uppercase">Bảng Vinh Danh MC Group</h1>
        <p className="text-lg md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto">Tôn vinh những cá nhân xuất sắc, truyền cảm hứng và lan tỏa giá trị tích cực trong tập thể MC Group!</p>
      </div>

      {/* Top 3 Employees */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-end justify-center gap-8 mb-12">
        {/* Silver - 2 */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex-1 flex flex-col items-center">
          <div className="relative bg-white rounded-2xl shadow-xl p-4 pt-8 w-56 md:w-64 border-4 border-gray-300">
            <img src={employees[1].avatar} alt={employees[1].name} className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-gray-300 mx-auto" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-br from-gray-400 to-gray-200 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg border-4 border-white">2</div>
            <div className="mt-4 text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">{employees[1].name}</h3>
              <p className="text-gray-500 text-sm">{employees[1].position}</p>
              <p className="text-blue-600 font-bold text-xl mt-2">{employees[1].points} pts</p>
            </div>
          </div>
        </motion.div>
        {/* Gold - 1 */}
        <motion.div whileHover={{ scale: 1.08 }} className="flex-1 flex flex-col items-center z-10">
          <div className="relative bg-white rounded-2xl shadow-2xl p-4 pt-8 w-64 md:w-80 border-4 border-yellow-400 scale-110">
            <img src={employees[0].avatar} alt={employees[0].name} className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-yellow-400 mx-auto" />
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-yellow-400 to-yellow-200 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg border-4 border-white">1</div>
            <div className="mt-4 text-center">
              <h3 className="text-xl md:text-2xl font-extrabold text-yellow-600">{employees[0].name}</h3>
              <p className="text-gray-500 text-base">{employees[0].position}</p>
              <p className="text-yellow-600 font-extrabold text-2xl mt-2">{employees[0].points} pts</p>
            </div>
          </div>
        </motion.div>
        {/* Bronze - 3 */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex-1 flex flex-col items-center">
          <div className="relative bg-white rounded-2xl shadow-xl p-4 pt-8 w-56 md:w-64 border-4 border-amber-700">
            <img src={employees[2].avatar} alt={employees[2].name} className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-amber-700 mx-auto" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-br from-amber-700 to-amber-400 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg border-4 border-white">3</div>
            <div className="mt-4 text-center">
              <h3 className="text-lg md:text-xl font-bold text-amber-700">{employees[2].name}</h3>
              <p className="text-gray-500 text-sm">{employees[2].position}</p>
              <p className="text-amber-700 font-bold text-xl mt-2">{employees[2].points} pts</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bảng xếp hạng chi tiết */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center tracking-wide">Bảng xếp hạng chi tiết</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 text-gray-700 font-semibold">#</th>
                <th className="px-4 py-2 text-gray-700 font-semibold">Nhân viên</th>
                <th className="px-4 py-2 text-gray-700 font-semibold">Chức vụ</th>
                <th className="px-4 py-2 text-gray-700 font-semibold">Điểm</th>
                <th className="px-4 py-2 text-gray-700 font-semibold">Thành tích</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id} className="hover:bg-blue-50 transition">
                  <td className="px-4 py-3 font-bold text-blue-600 text-lg">{index + 1}</td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <img src={employee.avatar} alt={employee.name} className="w-10 h-10 rounded-full object-cover border-2 border-blue-200" />
                    <span className="font-semibold text-gray-800">{employee.name}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{employee.position}</td>
                  <td className="px-4 py-3 font-bold text-blue-700">{employee.points}</td>
                  <td className="px-4 py-3">
                    {employee.achievements.map((ach, i) => (
                      <span key={i} className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs mr-2 mb-1">
                        {ach}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ranking; 