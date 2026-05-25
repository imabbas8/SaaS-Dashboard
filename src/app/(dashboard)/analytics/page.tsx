'use client';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000, users: 240 },
  { month: 'Feb', revenue: 3000, users: 198 },
  { month: 'Mar', revenue: 5000, users: 320 },
  { month: 'Apr', revenue: 7000, users: 410 },
  { month: 'May', revenue: 6000, users: 380 },
  { month: 'Jun', revenue: 9000, users: 520 },
];

const planData = [
  { name: 'Free', value: 400, color: '#94a3b8' },
  { name: 'Pro', value: 300, color: '#3b82f6' },
  { name: 'Enterprise', value: 200, color: '#8b5cf6' },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: 'Total Revenue', value: '$45,231', change: '+20.1%' },
          { title: 'Active Users', value: '2,350', change: '+15%' },
          { title: 'Subscriptions', value: '1,200', change: '+8%' },
          { title: 'Churn Rate', value: '2.4%', change: '-0.5%' },
        ].map((stat) => (
          <div key={stat.title} className="p-6 bg-white dark:bg-gray-900 rounded-xl border">
            <p className="text-sm text-gray-500">{stat.title}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
            <p className="text-sm text-green-500 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border">
        <h2 className="text-xl font-semibold mb-4">Revenue Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border">
          <h2 className="text-xl font-semibold mb-4">Subscription Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={planData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                {planData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border">
          <h2 className="text-xl font-semibold mb-4">Monthly Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}