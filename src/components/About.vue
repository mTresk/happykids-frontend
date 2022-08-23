<template>
    <section id="about" class="about pt">
        <div class="about__container">
            <h2 v-animate-onscroll="'_fade-up'" class="about__title title _fade-down">
                {{ about_title }}
            </h2>
            <p v-animate-onscroll="'_fade-up'" class="about__text _fade-down">
                {{ about_text }}
            </p>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    about_title: String,
    about_text: String
})
</script>
