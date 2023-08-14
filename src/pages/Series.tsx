import { Layout } from "../Layout"
import { Link } from 'react-router-dom';

export const Series = () => {
  return (
    <Layout>
      <div className="relative flex flex-col">
        <div className="pt-4 px-4 flex justify-between items-end">
          <Link className="w-[70px]" to="/">
            <img className="w-8 h-8 stroke-[#ffffffb4]" src="arrow-back.svg" alt="" />
          </Link>
          <span className="text-2xl text-[#ffffffd3]">Series</span>
          <span className="w-[70px] text-md text-[#ffffffd3] text-right">Sign in</span>
        </div>
      </div>
    </Layout>
  )
}
