import { Link } from "react-router-dom"
import { Layout } from "../Layout"

export const Home = () => {
  return (
    <Layout>
      <div className="w-full h-full flex items-center">
        <div className="w-full flex flex-col gap-14">
          <h1 className='text-4xl font-bold font-[Raleway] text-center drop-shadow-[0px_0px_10px_#000]'>Span Streaming</h1>
          <div className="mx-auto flex flex-col gap-4 text-2xl">
            <Link 
              to="/series"
              type="button" 
              className="border focus:outline-none font-medium rounded-full px-10 py-3.5 mr-2 mb-2 border-gray-600 hover:bg-slate-500 hover:border-gray-600 focus:ring-gray-700"
            >
              Series
            </Link>
            <Link 
              to="/movies"
              type="button" 
              className="border focus:outline-none font-medium rounded-full px-10 py-3.5 mr-2 mb-2 border-gray-600 hover:bg-slate-500 hover:border-gray-600 focus:ring-gray-700"
            >
              Movies
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
