import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h2>programmation 🌵 </h2>
      <Row title="NETFLIX orginals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TRENDIND NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="romance movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
