import Sidenav from "../components/Sidenav"

import CrudPollo from "../components/Tables/CrudPollo"

const Pollo = () => {
  return (
    <div>
       <div className="flex h-screen bg-gray-100 min-h-screen">
      <Sidenav />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col mb-6">
          <h2 className="text-3xl font-bold">Worker Page</h2>
          <p className="mt-4 text-gray-600">Here you can manage your workers.</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <CrudPollo />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Pollo;