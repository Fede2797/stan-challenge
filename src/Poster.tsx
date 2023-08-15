import { Film } from './api/apiService';

interface PosterProps {
    content: Film
}

export const Poster = ({content}: PosterProps) => {
  return (
    <div className='w-full flex justify-center'>
        <div className='relative max-w-[200px] max-h-[300px]'>
            <img src={content.images["Poster Art"].url} alt="" />
            <div className='absolute bottom-0 left-0 w-full min-h-[30px] flex items-center text-center bg-[#202020ea]'>
                <h1 className='w-full'>{content.title}</h1>
            </div>
        </div>
    </div>
  )
}
