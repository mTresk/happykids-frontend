<template>
    <section id="faq" class="faq pt-s pb-s">
        <div class="faq__container">
            <h2 v-animate-onscroll="'_fade-up'" class="faq__title title _fade-down">
                Ответы на ваши вопросы
            </h2>
            <div v-animate-onscroll="'_fade-up'" class="faq__body _fade-down">
                <div class="faq__spoilers spoilers">
                    <spoiler-item
                        v-for="(item, index) in faqs"
                        :key="index"
                        :item="item"
                        :index="index"
                        :multiple="multiple"
                    >
                    </spoiler-item>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SpoilerItem from './SpoilerItem.vue'

const props = defineProps({
    faqs: Object,
    multiple: {
        type: Boolean,
        default: false,
    },
})
</script>
