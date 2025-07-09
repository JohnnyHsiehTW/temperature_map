import Map from './Map'
import Sidebar from './Sidebar'

export default function MainArea() {
  return (
    <div className="flex h-dvh">
      <div className="bg-radial from-[#ffffff] to-[#e8e8e8] pt-14">
        <Sidebar />
      </div>
      <div className="h-full flex-1 pt-14">
        <Map />
      </div>
    </div>
  )
}
