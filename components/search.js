export default function Search() {
  return (
    <div className="w-3/4 shadow flex m-auto">
        <input className="w-full rounded p-2 leading-tight" type="text" placeholder="Search..." />
        <button className="bg-gray-100 w-auto flex justify-end items-center text-gray-700 p-2 hover:text-black">
            <i className="material-icons">search</i>
        </button>
    </div>
  )
}
