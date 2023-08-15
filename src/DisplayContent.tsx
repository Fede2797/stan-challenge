import { Film } from './api/apiService'
import { Poster } from './Poster'

interface DisplayContentProps {
    contentToDisplay: Film[],
}

export const DisplayContent = ({contentToDisplay} : DisplayContentProps) => {
  return (
    <div className='mx-auto max-w-[1300px] px-4 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {
            contentToDisplay.map( c => (
                <Poster key={c.title} content={c} />
            ))
        }        
    </div>
  )
}
