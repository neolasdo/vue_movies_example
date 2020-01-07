<template>
    <div>
        <b-navbar toggleable="sm" type="dark" variant="dark">
            <router-link :to="{ name: 'movies.home' }" class="navbar-brand">Home</router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link :to="{ name: 'movies.category', params: {slug: 'abc'}}" class="nav-link">Category
                    </router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar',
        props: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style>

</style>