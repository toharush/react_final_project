import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LoggedInGraph = ({ data }) => {
  return (
    <>
      <BarChart
        width={700}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="a" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="LoggedInUsers" stackId="a" fill="#BD1D61" />
        <Bar dataKey="GuestUsers" stackId="a" fill="#1494A1" />
      </BarChart>
    </>
  );
};

export default LoggedInGraph;
