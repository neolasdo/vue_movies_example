<template>
    <article class="card" v-bind:data-item="movie.id">
        <header class="title-header">
            <h3>{{ movie.title }}</h3>
        </header>
        <div class="card-block">
            <div class="img-card">
                <b-img thumbnail fluid v-bind:src="movie.poster" v-bind:alt="movie.title"></b-img>
            </div>
            <p class="tagline card-text text-xs-center">{{ movie.description }}</p>
            <router-link :to="{ name: 'movies.view', params: {slug: movie.slug}}" class="btn btn-primary btn-block">
                <i class="fa fa-eye"></i> Watch No
            </router-link>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'movie-item',
        props: {
            movie: {
                type: Object,
            }
        }
    }
</script>
