import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { useApp } from "../../context/AppContext";
import Footer from "../../components/Footer/Footer";


export function Stats() {
  const { timeline } = useApp();

  
  const callCount = timeline.filter(t => t.type === "Call").length;
  const textCount = timeline.filter(t => t.type === "Text").length;
  const videoCount = timeline.filter(t => t.type === "Video").length;
//
  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount }
  ];

  //
  const COLORS = ["#3b82f6", "#a855f7", "#22c55e"];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      <div className="flex-1 p-6">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow text-center">

          <h1 className="text-2xl font-bold mb-6">
            Friendship Analytics
          </h1>

         
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          

          <div className="flex justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Call ({callCount})
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Text ({textCount})
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Video ({videoCount})
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}