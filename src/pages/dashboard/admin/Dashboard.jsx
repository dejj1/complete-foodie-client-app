import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Tooltip,
  Area,
  Line,
  AreaChart,
} from "recharts";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });

  console.log(stats)

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/ordersStats");
      return res.data;
    },
  });

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const PieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });
  return (
    <div className="w-full md:w-[870px] mx-auto px-4">
      <h2 className="text-2xl font-semibold my-4">Hi, {user.displayName} </h2>

      {/* stats div */}
      <div className="stats stats-vertical w-full lg:stats-horizontal shadow">
        <div className="stat bg-emerald-200">
          <div className="stat-figure text-secondary text-3xl">
            <FaDollarSign />
          </div>
          <div className="stat-title text-secondary">Revenue</div>
          <div className="stat-value text-black">{stats.revenue}</div>
          <div className="stat-desc text-secondary">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat bg-orange-200">
          <div className="stat-figure text-secondary text-3xl">
            <FaUsers />
          </div>
          <div className="stat-title text-secondary">Users</div>
          <div className="stat-value text-black">{stats.users}</div>
          <div className="stat-desc text-secondary">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-indigo-400">
          <div className="stat-figure text-secondary text-3xl">
            <FaBook />
          </div>
          <div className="stat-title text-secondary">Menu Items</div>
          <div className="stat-value text-black">{stats.menuItems}</div>
          <div className="stat-desc text-secondary">↘︎ 90 (14%)</div>
        </div>

        <div className="stat bg-purple-300">
          <div className="stat-figure text-secondary text-3xl">
            <FaShoppingCart />
          </div>
          <div className="stat-title text-secondary">All Orders</div>
          <div className="stat-value text-black">{stats.orders}</div>
          <div className="stat-desc text-secondary">↘︎ 90 (14%)</div>
        </div>
      </div>

      {/* charts and graph */}
      <div className="mt-16 flex flex-col sm:flex-row">
        {/* bar chart */}
        <div className="sm:w-1/2 w-full">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* pie chart */}
        <div className="sm:w-1/2 w-full">
          <div style={{width: '100%', height: 300}}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={PieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {PieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
