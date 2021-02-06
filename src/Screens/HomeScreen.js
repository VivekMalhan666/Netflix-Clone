import React from "react";
import Row from "../Components/Row";
import requests from "../utils/requests";
import Banner from "../Components/Banner";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrends} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Anime" fetchUrl={requests.fetchAnime} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasy} />
      <Footer />
    </div>
  );
}

export default HomeScreen;
