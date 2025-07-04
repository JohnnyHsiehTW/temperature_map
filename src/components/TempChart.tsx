import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import type { ChartData } from 'chart.js'
const data: ChartData<'line'> = {
  labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00'],
  datasets: [
    {
      label: '氣溫',
      data: [27, 27, 27, 28, 29, 31, 34],
      borderColor: 'rgba(234, 41, 30, 0.5)',
      backgroundColor: 'rgba(234, 41, 30, 0.5)',
    },
    {
      label: '降雨機率',
      data: [30, 30, 20, 20, 25, 20, 15],
      borderColor: 'rgba(56, 117, 229, 0.5)',
      backgroundColor: 'rgba(56, 117, 229, 0.5)',
    },
  ],
}

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement)

export default function TempChart() {
  return (
    <div>
      <Line data={data} />
    </div>
  )
}
