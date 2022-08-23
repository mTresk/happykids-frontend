<template>
    <Head>
        <title>{{ section.title + " — " + settings.site_name }}</title>
        <meta
            name="description"
            :content="section.title + ' — ' + settings.site_description"
        />
    </Head>
    <Header @toggleModal="toggleModal" />
    <main class="page">
        <section class="sections-block pt pb">
            <div class="sections-block__container">
                <h1 class="sections-block__title title">{{ section.title }}</h1>
                <p class="sections-block__info">{{ section.description }}</p>
                <div class="sections-block__body">
                    <div class="sections-block__wrapper">
                        <div v-html="section.sections_list"></div>
                        <button
                            @click="toggleModal"
                            type="button"
                            class="sections-block__button btn btn_light"
                        >
                            Записаться
                        </button>
                    </div>

                    <div
                        class="sections-block__image sections-block__image-ibg"
                    >
                        <picture>
                            <source
                                :srcset="image_full_webp"
                                type="image/webp" />
                            <img :src="image_full" :alt="section.title"
                        /></picture>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
    <Modal :toggleModal="modalActive" @closeModal="toggleModal" />
</template>

<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Modal from "../components/Modal.vue"
import { onMounted, ref, computed } from "vue"
import { Head } from "@vueuse/head"
import { useStore } from "vuex"

const store = useStore()
const section = ref("")
const image_full = ref("")
const image_full_webp = ref("")
const modalActive = ref(false)
const settings = computed(() => store.getters.settings)

const getSection = () => {
    axios.get("/api/section").then((response) => {
        section.value = response.data.data
        image_full.value = response.data.data.image.full
        image_full_webp.value = response.data.data.image.full_webp
    })
}

const toggleModal = () => {
    modalActive.value = !modalActive.value
    document.documentElement.classList.contains("lock")
        ? document.documentElement.classList.remove("lock")
        : document.documentElement.classList.add("lock")
}

onMounted(() => {
    getSection()
})
</script>
