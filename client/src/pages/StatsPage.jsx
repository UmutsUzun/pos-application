import { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import StatisticCard from "../components/stats/StatisticCard.jsx";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const StatisticPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  // Pie Chart verisi
  const pieData = [
    { name: "Emin Başbayan", value: 287 },
    { name: "Nur Başbayan", value: 57 },
    { name: "Ahmet Demir", value: 111 },
    { name: "Asım Altın", value: 67 },
    { name: "Mehmet Güneş", value: 16 },
  ];

  // Recharts Pie için renkler
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CD1"];

  // Ortaya yazı eklemek için özel render fonksiyonu
  const renderCenteredText = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <text
        x={cx}
        y={cy}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fontWeight="bold"
      >
        Total Earning
      </text>
    );
  };

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Statistics</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Welcome{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>

          {/* Kartlar - Responsive Grid */}
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-10 md:gap-10 gap-4">
            <StatisticCard
              title="Number of Customer"
              amount="6"
              img="images/user.png"
            />
            <StatisticCard
              title="Total Earning"
              amount="£660.90"
              img="images/money.png"
            />
            <StatisticCard
              title="Total Sale"
              amount="6"
              img="images/sale.png"
            />
            <StatisticCard
              title="Total Product"
              amount="28"
              img="images/product.png"
            />
          </div>

          {/* Grafikler - Responsive Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Area Chart - Satış Grafiği */}
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="timePeriod" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart - Ortasında Yazı Olan Dağılım Grafiği */}
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  {/* Ortadaki Yazı */}
                  {renderCenteredText({ viewBox: { cx: "50%", cy: "50%" } })}

                  {/* Pie Chart */}
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60} // Donut Chart yapmak için iç yarıçap
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
