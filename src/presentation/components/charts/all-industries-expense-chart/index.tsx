"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type PieChartData = {
  name: string;
  value: number;
};

type Props = {
  data: PieChartData[];
};

const COLORS = [
  "#7C3AED", "#6D28D9", "#5B21B6",
  "#4C1D95", "#8B5CF6", "#A78BFA",
  "#DDD6FE", "#EDE9FE",
];

const RADIAN = Math.PI / 180;

function polarToCartesian(cx: number, cy: number, radius: number, angle: number) {
  const rad = (angle - 90) * RADIAN;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function RoundedSlice(props: any) {
  const {
    cx, cy,
    innerRadius, outerRadius,
    startAngle, endAngle,
    fill,
  } = props;

  const gap = 2;
  const s = startAngle + gap;
  const e = endAngle - gap;

  if (s >= e) return <></>;

  const outerStart = polarToCartesian(cx, cy, outerRadius, s);
  const outerEnd   = polarToCartesian(cx, cy, outerRadius, e);
  const innerStart = polarToCartesian(cx, cy, innerRadius, s);
  const innerEnd   = polarToCartesian(cx, cy, innerRadius, e);

  const largeArc = e - s > 180 ? 1 : 0;

  const d = [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");

  return <path d={d} fill={fill} stroke="none" />;
}

export function ExpensesPieChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={130}
          dataKey="value"
          shape={RoundedSlice}
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) =>
            typeof value === "number"
              ? value.toLocaleString("en-US", { style: "currency", currency: "USD" })
              : value ?? ""
          }
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}