import { Card } from '@/components/ui/card'
import { Sun, Droplets, Umbrella, Building, Globe, Clock4 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import TempChart from './TempChart'

import catHotSm from '../assets/img/cat_hot_sm.png'
import sunnyIcon from '../assets/img/sunny_icon.png'
import coffeeShop from '../assets/img/coffee_shop.jpg'

import { ScrollArea } from '@/components/ui/scroll-area'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-3 px-3 py-5">
      {/* 即時資訊 */}
      <Card className="border-theme-cyan-dark relative border bg-[#f2fefe] py-3">
        <div className="flex justify-between gap-16 px-8">
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
              <p className="pt-3 pr-16 text-end text-5xl text-red-400">36℃</p>
            </div>
            <img src={sunnyIcon} alt="晴天" className="absolute top-2 right-0 z-0 w-1/3" />
            <p className="z-20 text-right text-xl text-red-400">太熱啦！快躲進室內！</p>
          </div>
        </div>
      </Card>
      {/* 預報資訊 */}
      <Card className="border-theme-cyan-dark border bg-[#f2fefe] py-3">
        <div className="text-theme-cyan-dark px-5">
          <div className="flex items-center justify-between pb-1">
            <p className="text-xl font-bold">接下來的天氣</p>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="text-theme-cyan-dark border-theme-cyan-dark hover:bg-theme-cyan-light active:bg-theme-cyan cursor-pointer border bg-white hover:text-white active:text-white"
              >
                氣溫
              </Button>
              <Button
                size="sm"
                className="text-theme-cyan-dark border-theme-cyan-dark hover:bg-theme-cyan-light active:bg-theme-cyan cursor-pointer border bg-white hover:text-white active:text-white"
              >
                紫外線
              </Button>
              <Button
                size="sm"
                className="text-theme-cyan-dark border-theme-cyan-dark hover:bg-theme-cyan-light active:bg-theme-cyan cursor-pointer border bg-white hover:text-white active:text-white"
              >
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
      <div className="text-theme-cyan-dark flex items-end justify-center">
        <img src={catHotSm} alt="遮太陽的貓咪" className="h-15" />
        <h3 className="text-2xl font-bold">推薦你可以去這些地方避暑</h3>
      </div>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="border-theme-cyan-dark h-full w-full flex-1 rounded-xl border bg-white p-4">
          <div className="overflow-hidden">
            <Card className="border-theme-cyan-dark mb-3 bg-[#f2fefe]">
              <div className="flex gap-3 px-5">
                <div>
                  <img src={coffeeShop} alt="" className="max-w-30 rounded" />
                </div>
                <div className="flex w-full flex-col justify-between">
                  <div>
                    <p className="flex gap-1 text-lg font-bold text-gray-700">
                      <Building color="#d67545" size={24} />
                      遠東SOGO 台北忠孝館
                    </p>
                    <p className="text-xs text-gray-600">台北市大安區忠孝東路四段45號</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1 text-gray-700">
                      <a href="#" target="_blank" className="flex items-center gap-1">
                        <Globe color="#55b4ca" size={20} />
                        店家網站
                      </a>
                      <HoverCard openDelay={200} closeDelay={200}>
                        <HoverCardTrigger>
                          <p className="flex cursor-default items-center gap-1">
                            <Clock4 color="#55b4ca" size={20} />
                            營業時間
                          </p>
                        </HoverCardTrigger>
                        <HoverCardContent align="start">
                          <div className="text-gray-700">
                            <div className="flex justify-between">
                              <p>星期一</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期二</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期三</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期四</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期五</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期六</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期日</p>
                              <p>12:00-21:30</p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <div className="flex items-end">
                      <Button className="text-theme-cyan-dark border-theme-cyan-dark active:bg-theme-cyan-dark hover:bg-theme-cyan-light cursor-pointer border bg-white hover:text-white">
                        導航
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="border-theme-cyan-dark mb-3 bg-[#f2fefe]">
              <div className="flex gap-3 px-5">
                <div>
                  <img src={coffeeShop} alt="" className="max-w-30 rounded" />
                </div>
                <div className="flex w-full flex-col justify-between">
                  <div>
                    <p className="flex gap-1 text-lg font-bold text-gray-700">
                      <Building color="#d67545" size={24} />
                      遠東SOGO 台北忠孝館
                    </p>
                    <p className="text-xs text-gray-600">台北市大安區忠孝東路四段45號</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1 text-gray-700">
                      <a href="#" target="_blank" className="flex items-center gap-1">
                        <Globe color="#55b4ca" size={20} />
                        店家網站
                      </a>
                      <HoverCard openDelay={200} closeDelay={200}>
                        <HoverCardTrigger>
                          <p className="flex cursor-default items-center gap-1">
                            <Clock4 color="#55b4ca" size={20} />
                            營業時間
                          </p>
                        </HoverCardTrigger>
                        <HoverCardContent align="start">
                          <div className="text-gray-700">
                            <div className="flex justify-between">
                              <p>星期一</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期二</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期三</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期四</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期五</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期六</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期日</p>
                              <p>12:00-21:30</p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <div className="flex items-end">
                      <Button className="text-theme-cyan-dark border-theme-cyan-dark active:bg-theme-cyan-dark hover:bg-theme-cyan-light cursor-pointer border bg-white hover:text-white">
                        導航
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="border-theme-cyan-dark mb-3 bg-[#f2fefe]">
              <div className="flex gap-3 px-5">
                <div>
                  <img src={coffeeShop} alt="" className="max-w-30 rounded" />
                </div>
                <div className="flex w-full flex-col justify-between">
                  <div>
                    <p className="flex gap-1 text-lg font-bold text-gray-700">
                      <Building color="#d67545" size={24} />
                      遠東SOGO 台北忠孝館
                    </p>
                    <p className="text-xs text-gray-600">台北市大安區忠孝東路四段45號</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1 text-gray-700">
                      <a href="#" target="_blank" className="flex items-center gap-1">
                        <Globe color="#55b4ca" size={20} />
                        店家網站
                      </a>
                      <HoverCard openDelay={200} closeDelay={200}>
                        <HoverCardTrigger>
                          <p className="flex cursor-default items-center gap-1">
                            <Clock4 color="#55b4ca" size={20} />
                            營業時間
                          </p>
                        </HoverCardTrigger>
                        <HoverCardContent align="start">
                          <div className="text-gray-700">
                            <div className="flex justify-between">
                              <p>星期一</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期二</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期三</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期四</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期五</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期六</p>
                              <p>12:00-21:30</p>
                            </div>
                            <div className="flex justify-between">
                              <p>星期日</p>
                              <p>12:00-21:30</p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <div className="flex items-end">
                      <Button className="text-theme-cyan-dark border-theme-cyan-dark active:bg-theme-cyan-dark hover:bg-theme-cyan-light cursor-pointer border bg-white hover:text-white">
                        導航
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
