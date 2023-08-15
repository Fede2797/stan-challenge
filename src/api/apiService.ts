
export interface Film {
    title: string;
    description: string;
    programType: string;
    images: Images;
    releaseYear: number;
}
export interface Images {
    "Poster Art": PosterArt;
}
export interface PosterArt {
    url: string;
    width: number;
    height: number;
}
  

export const getMovies = async() => {
    const results = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
    const res = await results.json();
    const filteredArray = res.entries.filter( (e: Film) => e.releaseYear > 2010 && e.programType === "movie")
                                     .splice(0,21)
                                     .sort( (a: Film, b: Film) => a.title.localeCompare(b.title));
    return filteredArray;
}

export const getSeries = async() => {
    const results = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
    const res = await results.json();
    const filteredArray = res.entries.filter( (e: Film) => e.releaseYear > 2010 && e.programType === "series")
                                     .splice(0,21)
                                     .sort( (a: Film, b: Film) => a.title.localeCompare(b.title));
    return filteredArray;
}
