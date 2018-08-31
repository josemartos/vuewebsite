<template>
    <article class="home">
        <nav class="nav">
            <div class="page-container">
                <ul class="nav_list">
                    <li><a href="https://www.flickr.com/photos/martosjose/" target="_blank" title="flickr profile">photography</a></li>
                    <li><a title="resume" href="/assets/pdf/CV_JoseMartos.pdf" download>resume</a></li>
                    <li><a href="http://www.eldivandesigmund.com/" target="_blank" title="El diván de Sigmund">writings</a></li>
                </ul>
            </div>
        </nav>

        <div class="greetings">
            <a href="mailto:martosjosele@gmail.com?subject=Hello%20Jos%C3%A9%20M.%20Martos" title="Hi Jose">s@y hello</a>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style lang="scss" scoped>
    @import "~styles/core/core";

    .nav {
        background-color: $c-grey200;
        text-align: center;
    }

    .nav_list {
        display: flex;
        flex-wrap: wrap;
        transition: all .2s;

        li {
            flex: 1;
        }

        a {
            color: $c-grey300;
            display: inline-block;
            font-size: 24px;
            font-weight: 300;
            padding-bottom: 5px;
            text-align: center;
            transition: all .2s;

            &:hover {
                color: $c-grey400;
            }
        }

        li:nth-child(2) a {
            color: $c-grey400;

            &:hover {
                color: $c-black;
            }
        }

        @media screen and (max-width: $phone) {
            a {
                font-size: 20px;
                padding: 8px 0 11px;
                width: 100%;
            }

            li:nth-child(2) a {
                background-color: $c-grey100;
            }

            li {
                flex: 100% 1;
            }
        }
    }

    .greetings {
        padding-top: 20px;
        text-align: center;

        a {
            color: $c-grey300;
            font-size: 20px;
            transition: all .2s;

            &:hover {
                color: $c-grey400;
            }
        }
    }
</style>
