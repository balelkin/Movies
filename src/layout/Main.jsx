import React from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=883bd273&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    searchMovies = (str, type='all') => {
        fetch(`http://www.omdbapi.com/?apikey=883bd273&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))

    }
    render() {
        const { movies } = this.state

        return <main className="container content"> <Search searchMovies={this.searchMovies} />
            {movies.length ? (<Movies movies={movies} />) : <Preloader />}

        </main>
    }


}

export { Main }