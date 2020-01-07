import movies from '../movies';

export default {
    getAll() {
        return movies;
    },
    findMovieBySlug(slug) {
        let movie = movies.find(function (item) {
            return item.slug === slug;
        })
        return movie;
    },
    findMovieById(id) {
        return id;
    }
}