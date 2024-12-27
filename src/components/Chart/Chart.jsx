import React from "react";
import s from './Chart.module.scss'

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Chart = () => {
  const data = [
    { name: "Sport Car", value: 17439 },
    { name: "SUV", value: 9478 },
    { name: "Coupe", value: 18197 },
    { name: "Hatchback", value: 12510 },
    { name: "MPV", value: 14406 },
  ];

  const COLORS = ["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"];
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <>
      <div className={s.wrapper}>
      <h3>Top 5 Car Rental</h3>
      <div style={{ textAlign: "center" }}>
        <PieChart className={s.wrap} width={500} height={300}>
          <Pie
            data={data}
            cx={200}
            cy={150}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
        <div className={s.text} style={{  }}>
          <h2 style={{ margin: 0 }}>{total.toLocaleString()}</h2>
          <p style={{ margin: 0 }}>Rental Car</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Chart;
