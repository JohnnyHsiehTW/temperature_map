// MapComponent.tsx
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// 解決 marker 圖片不出現的問題（Leaflet 預設不支援 webpack）
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// 設定 marker 的圖示
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building, Globe } from 'lucide-react'
import coffeeShop from '../assets/img/coffee_shop.jpg'

export default function Map() {
  return (
    <MapContainer
      center={[25.047540469754708, 121.51705152899675]}
      zoom={15}
      zoomControl={false}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">Carto</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[25.047540469754708, 121.51705152899675]}>
        <Popup>
          <div className="flex max-w-53 flex-col items-center justify-center gap-2">
            <img src={coffeeShop} alt="" className="w-50 rounded-lg" />
            <div className="flex w-full">
              <span className="mr-1">
                <Building color="#d67545" size={20} />
              </span>
              <p className="w-full overflow-hidden align-bottom text-base font-bold text-ellipsis whitespace-nowrap text-gray-700">
                遠東SOGO 台北忠孝館 遠東SOGO 台北忠孝館
              </p>
            </div>
            <Button className="text-theme-cyan-dark border-theme-cyan-dark active:bg-theme-cyan-dark hover:bg-theme-cyan-light cursor-pointer border bg-white hover:text-white">
              詳細資訊
            </Button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
