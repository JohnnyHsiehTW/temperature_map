import Map from './Map'
import Sidebar from './Sidebar'
import bgSidebar from '../assets/img/background_sidebar_md.png'

export default function MainArea() {
  return (
    <div className="flex h-dvh">
      <div className="bg-radial from-[#ffffff] to-[#e8e8e8] pt-14">
        <Sidebar />
      </div>
      <div className="">
        <Map />
      </div>
    </div>
  )
}
