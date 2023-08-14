
export const getMovies = async() => {
    const results = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
    const res = await results.json();
    console.log(res);
}