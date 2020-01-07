<template>
    <div class="container" id="player">
        <h3 v-if="link === undefined">Can't get link</h3>
        <vue-plyr v-show="link !== undefined">
            <video
                    allowfullscreen allowtransparency
                    v-bind:poster="this.movie.poster"
                    v-bind:src="link"
            >
                <source
                        size="576"
                        v-bind:src="link"
                        type="video/mp4"
                >
                <track
                        default
                        kind="captions"
                        label="English"
                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
                        srclang="en"
                >
                <track
                        kind="captions"
                        label="Français"
                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
                        srclang="fr"
                >
                <a
                        download=""
                        href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                >
                    Download
                </a>

            </video>
        </vue-plyr>
    </div>
</template>

<script>
    import MovieService from '../services/MovieService';

    export default {
        name: 'view-page',
        data() {
            return {
                movie: {},
                link: undefined
            }
        },
        methods: {
            changeLink(link) {
                this.link = link;
            }
        },
        created() {
            this.movie = MovieService.findMovieBySlug(this.$route.params.slug)
            if (this.movie.links.length === 0) {
                this.link = undefined;
            } else {
                this.link = this.movie.links[0]
            }
        },
    }
</script>

<style>
    #player {
        margin-top: 20px;
    }
</style>
