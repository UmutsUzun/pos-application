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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchInvoices();
    fetchProducts();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/invoices/get-all");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log("Fetch bills failed", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products/get-all");
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.log("Fetch products failed", error);
    }
  };

  const totalAmount = () => {
    const amount = data.reduce((total, item) => total + item.totalAmount, 0);
    return `£${amount.toFixed(2)}`;
  };

  // Pie chart 
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CD1"];

  // Pie chart 
  const pieData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.customerName]) {
        acc[item.customerName] = { name: item.customerName, value: 0 };
      }
      acc[item.customerName].value += item.totalAmount;
      return acc;
    }, {})
  );

  return (
    <>
      <Header />
      <div className="px-6 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">Statistics</h1>

        <div className="statistic-section">
          <h2 className="text-lg">
            Welcome{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>

          {/* Carts */}
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-10 md:gap-10 gap-4">
            <StatisticCard
              title="Number of Customer"
              amount={data.length}
              img="images/user.png"
            />
            <StatisticCard
              title="Total Earnings "
              amount={totalAmount()}
              img="images/money.png"
            />
            <StatisticCard
              title="Total Sales"
              amount={data.length}
              img="images/sale.png"
            />
            <StatisticCard
              title="Total Product"
              amount={products.length}
              img="images/product.png"
            />
          </div>

          {/* Graphs */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Area Chart */}
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="customerName" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="subTotal"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
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

