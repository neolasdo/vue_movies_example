<template>
    <section class="movies container" id="movies">
        <h2>Featured Movies</h2>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6" v-for="(movie, index) in movies" v-bind:key="index">
                <movie-item v-bind:movie="movie"></movie-item>
            </div>
        </div>
    </section>
</template>

<script>
    import MovieItem from '../components/MovieItem'
    import movies from '../movies';

    export default {
        name: 'home-page',
        components: {MovieItem},
        methods: {

        },
        data() {
            return {
                movies: []
            }
        },
        created() {
            this.movies = movies;
        }
    }
</script>

<style>
    #movies {
        margin-top: 20px;
    }
</style>
