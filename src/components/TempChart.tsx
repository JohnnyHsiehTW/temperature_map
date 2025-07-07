import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const chartData = [
  { time: '00:00', temperature: 27 },
  { time: '02:00', temperature: 27 },
  { time: '04:00', temperature: 28 },
  { time: '06:00', temperature: 28 },
  { time: '08:00', temperature: 29 },
  { time: '10:00', temperature: 31 },
  { time: '12:00', temperature: 33 },
  { time: '14:00', temperature: 36 },
]

import { type ChartConfig } from '@/components/ui/chart'
const chartConfig = {
  temperature: {
    label: '氣溫',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig

export default function TempChart() {
  return (
    <>
      <ChartContainer config={chartConfig} className="custom-chart h-[150px] w-full">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="time"
            tickMargin={4}
            interval={0}
            axisLine={{ stroke: '#55b4ca' }}
            tickLine={{ stroke: '#55b4ca' }}
            tick={{ fill: '#55b4ca', fontSize: 10 }}
          />
          <YAxis
            domain={[0, (dataMax) => dataMax + 4]}
            width={35}
            tickFormatter={(value) => `${value}°C`}
            axisLine={{ stroke: '#55b4ca' }}
            tickLine={{ stroke: '#55b4ca' }}
            tick={{ fill: '#55b4ca', fontSize: 10 }}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="temperature"
            type="natural"
            fill="var(--color-temperature)"
            fillOpacity={0.2}
            stroke="var(--color-temperature)"
          />
        </AreaChart>
      </ChartContainer>
    </>
  )
}
