import Map from './Map'
import Sidebar from './Sidebar'

export default function MainArea() {
  return (
    <div className="flex h-dvh pt-14">
      <div className="bg-[#f2f2f2]">
        <Sidebar />
      </div>
      <div className="bg-red-300">
        <Map />
      </div>
    </div>
  )
}
