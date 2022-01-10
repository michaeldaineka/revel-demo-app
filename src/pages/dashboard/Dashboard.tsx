import React, { useMemo } from 'react';
import { Card, Typography } from 'antd';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, Text } from 'recharts';
import { data, data1, COLORS } from 'utils/pages/dashboard';

const Dashboard = () => {
  const { Title, Paragraph } = Typography;

  const showTitle = useMemo(
    () => (
      <>
        <Title level={4}>Product Mix</Title>
        <Paragraph className="fw-400">
          {new Date().toUTCString()} - {new Date().toUTCString()}
        </Paragraph>
      </>
    ),
    []
  );

  return (
    <div>
      <Card title={showTitle}>
        <div className="d-flex">
          <div className="flex-grow-1 text-center">
            <Title level={4} className="mb-0">
              Top 10 Profit by Product
            </Title>
          </div>
          <div className="flex-grow-1 text-center">
            <Title level={4} className="mb-0">
              Top 10 Quantity Sold
            </Title>
          </div>
        </div>
        <ResponsiveContainer width="50%" height={400} className="d-inline-block">
          <PieChart width={400} height={400} margin={{ top: -30 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={125}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height={400} className="d-inline-block">
          <PieChart width={400} height={400}>
            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={125}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Dashboard;
