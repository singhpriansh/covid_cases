import styled from '@emotion/styled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";
import { Country_data } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  countries: Country_data[];
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'COVID Cases Graph',
    },
  },
};

const ChartWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const BarChart: React.FunctionComponent<Props> = ({ countries }) => {
  const generateChartData = () => {
    // did not typescripted to allow variablity
    const data: number[] = [];
    const labels: string[] = [];

    countries.forEach((country) => {
      data.push(country.NewConfirmed);
      labels.push(country.Country);
    });

    return ({
      labels,
      datasets: [
        {
          label: 'New confirmed',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 235, 0.3)',
            'rgba(255, 159, 64, 0.3)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 235)',
            'rgb(255, 159, 64)',
          ],
          borderWidth: 1,
        }
      ],
    });
  }

  return (
    <ChartWrapper>
      <Bar options={options} data={generateChartData()} />
    </ChartWrapper>
  );
}
export default BarChart;