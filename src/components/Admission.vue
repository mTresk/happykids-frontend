<template>
    <section class="admission pb pt" id="admission">
        <div class="admission__container">
            <h2
                v-animate-onscroll="'_fade-up'"
                class="admission__title title _fade-down"
            >
                Поступление в нашу школу происходит в 3 этапа.
                <span>Вот они:</span>
            </h2>
            <div class="admission__body">
                <article
                    v-for="(item, index) in admission"
                    :key="index"
                    v-animate-onscroll="'_fade-up'"
                    class="admission__item item-admission _fade-down"
                >
                    <div class="item-admission__digit">{{ index + 1 }}</div>
                    <div class="item-admission__info">
                        <h3 class="item-admission__title">{{ item.title }}</h3>
                        <p class="item-admission__text">
                            {{ item.text }}
                        </p>
                    </div>
                    <button
                        @click="emitOpen"
                        type="button"
                        class="item-admission__button btn btn_light"
                    >
                        Записаться
                    </button>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineEmits } from "vue";

const props = defineProps({
    admission: Object,
});

const emit = defineEmits(["toggleModal"]);

const emitOpen = () => {
    console.log("click");
    emit("toggleModal");
};
</script>
