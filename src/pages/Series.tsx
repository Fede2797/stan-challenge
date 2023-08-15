import { Layout } from "../Layout"
import { Link } from 'react-router-dom';
import { Loading } from "../Loading";
import { sections } from "../constants";
import { useEffect } from 'react';
import { Film } from "../api/apiService";
import { DisplayContent } from "../DisplayContent";

interface SeriesProps {
  isLoading: boolean,
  contentToDisplay: Film[],
  setSection: ( s: string ) => void,
}

export const Series = ({ isLoading, setSection, contentToDisplay }: SeriesProps) => {

  useEffect(() => {
    setSection( sections.SERIES );
  }, [])

  return (
    <Layout>
      <div className="relative flex flex-col">
        <nav className="pt-4 px-4 flex justify-between items-center">
          <Link className="w-[70px]" to="/">
            <img className="w-8 h-8 stroke-[#ffffffb4] drop-shadow-[0px_0px_10px_#000]" src="arrow-back.svg" alt="" />
          </Link>
          <span className="text-2xl text-[#ffffffd3] drop-shadow-[0px_0px_10px_#000]">Span Streaming</span>
          <span className="w-[70px] text-md text-[#ffffffd3] drop-shadow-[0px_0px_10px_#000] text-right">Sign in</span>
        </nav>

        {
          isLoading 
            ? (<Loading />)
            : (
              <>
                  <h1 className="px-4 pt-14 pb-8 text-4xl drop-shadow-[0px_0px_10px_#000] text-center">Series</h1>
                  <div className="">
                  </div>
                </>
              )
        }

        <DisplayContent contentToDisplay={contentToDisplay} />

      </div>
    </Layout>
  )
}
