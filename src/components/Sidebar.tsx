import { Card } from '@/components/ui/card'
import { Sun, Droplets, Umbrella } from 'lucide-react'

import { Button } from '@/components/ui/button'
import TempChart from './TempChart'

export default function Sidebar() {
  return (
    <>
      <div className="space-y-3 px-3 py-5">
        {/* 即時資訊 */}
        <Card className="border-theme-cyan-dark relative border bg-[#f2fefe]">
          <div className="flex justify-between gap-10 px-5">
            {/* 左 */}
            <div className="text-theme-cyan-dark flex flex-col justify-between gap-5 font-bold">
              <div>
                <p className="text-4xl">中山區</p>
              </div>

              <div className="flex justify-between gap-6">
                <div className="flex flex-col gap-2 text-sm">
                  <p className="flex">
                    <span className="pr-2">
                      <Sun size={20} />
                    </span>
                    紫外線
                  </p>
                  <p className="flex">
                    <span className="pr-2">
                      <Droplets size={20} />
                    </span>
                    濕度
                  </p>
                  <p className="flex">
                    <span className="pr-2">
                      <Umbrella size={20} />
                    </span>
                    降雨機率
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-right text-sm">
                  <p className="text-red-400">過量級</p>
                  <p>64%</p>
                  <p>31%</p>
                </div>
              </div>
            </div>
            {/* 右 */}
            <div className="flex flex-col justify-between gap-5 font-bold">
              <div className="z-20">
                <p className="pt-3 text-center text-5xl text-red-400">36℃</p>
              </div>
              <img
                src="src/assets/img/sunny.png"
                alt="晴天"
                className="absolute top-2 right-0 z-0 w-1/3"
              />
              <p className="z-20 text-right text-xl text-red-400">太熱啦！快躲進室內！</p>
            </div>
          </div>
        </Card>
        {/* 預報資訊 */}
        <Card className="border-theme-cyan-dark relative border bg-[#f2fefe]">
          <div className="text-theme-cyan-dark px-5">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">接下來的天氣</p>
              <div className="flex gap-2">
                <Button className="text-theme-cyan-dark border-theme-cyan-dark hover:bg-theme-cyan-light active:bg-theme-cyan cursor-pointer border bg-white hover:text-white">
                  氣溫
                </Button>
                <Button className="text-theme-cyan-dark border-theme-cyan-dark hover:bg-theme-cyan-light active:bg-theme-cyan cursor-pointer border bg-white hover:text-white">
                  紫外線
                </Button>
                <Button className="text-theme-cyan-dark border-theme-cyan-dark hover:bg-theme-cyan-light active:bg-theme-cyan cursor-pointer border bg-white hover:text-white">
                  降雨機率
                </Button>
              </div>
            </div>
            <div className="">
              <TempChart />
            </div>
          </div>
        </Card>
        {/* 景點清單 */}
        <Card className="border-theme-cyan-dark relative border bg-[#f2fefe]"></Card>
      </div>
    </>
  )
}
