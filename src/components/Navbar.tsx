import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, MapPin } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Navbar() {
  return (
    <>
      <div className="from-theme-cyan to-theme-cyan-light flex w-full justify-center bg-linear-to-b py-2">
        <div className="container flex items-center justify-between">
          <div className="flex flex-1 items-center">
            <img src="src/assets/img/temp_map_logo_sm.png" alt="避暑指南針" className="w-10" />
            <h1 className="text-2xl font-bold text-white">避暑指南針</h1>
          </div>
          <div className="flex-1"></div>
          <div className="flex flex-1 items-center gap-2">
            {/* 定位按鈕 */}
            <button className="text-theme-cyan-light hover:text-theme-cyan-dark cursor-pointer rounded-full bg-white p-2 active:bg-gray-100">
              <MapPin />
            </button>
            {/* 搜尋框 */}
            <div className="relative flex w-full items-center">
              <Input className="rounded-2xl bg-white pr-14" />
              <div className="absolute top-1/2 right-1 -translate-y-1/2">
                <Button
                  type="submit"
                  size="sm"
                  className="bg-theme-cyan-light hover:bg-theme-cyan-dark cursor-pointer rounded-full text-white"
                >
                  <Search />
                </Button>
              </div>
            </div>
            {/* 下拉選單 */}
            <Select>
              <SelectTrigger className="w-[180px] rounded-2xl bg-white">
                <SelectValue placeholder="景點類型" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">全部景點</SelectItem>
                  <SelectItem value="cafe">咖啡廳</SelectItem>
                  <SelectItem value="shopping-center">購物中心</SelectItem>
                  <SelectItem value="store">商店</SelectItem>
                  <SelectItem value="temple">寺廟</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  )
}
