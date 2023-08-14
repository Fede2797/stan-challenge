import { Layout } from "../Layout"
import { Link } from 'react-router-dom';

export const Movies = () => {
  return (
    <Layout>
      {/* <div className="relative flex flex-col">
        <div className="pt-4 px-4 flex">
          <Link to="/">
            <img className="relative w-8 h-8 stroke-[#ffffffb4] z-10" src="arrow-back.svg" alt="" />
          </Link>
          <span className="absolute left-0 w-screen text-center text-2xl text-[#ffffffd3]">Movies</span>
          <span className="absolute left-0 w-screen text-center text-2xl text-[#ffffffd3]">Sign in</span>
        </div>
      </div> */}
      <div className="relative flex flex-col">
        <div className="pt-4 px-4 flex justify-between items-end">
          <Link className="w-[70px]" to="/">
            <img className="w-8 h-8 stroke-[#ffffffb4]" src="arrow-back.svg" alt="" />
          </Link>
          <span className="text-2xl text-[#ffffffd3]">Movies</span>
          <span className="w-[70px] text-lg text-[#ffffffd3] text-right">Sign in</span>
        </div>
      </div>
    </Layout>
  )
}
