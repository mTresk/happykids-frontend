<template>
    <Head>
        <title>{{ policy.title + " — " + settings.site_name }}</title>
        <meta
            name="description"
            :content="policy.title + ' — ' + settings.site_description"
        />
    </Head>
    <Header @toggleModal="toggleModal" />
    <main class="page">
        <section class="policy pt pb">
            <div class="policy__container">
                <h1 class="policy__title title">{{ policy.title }}</h1>
                <div v-html="policy.text" class="policy__body"></div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { ref, onMounted, computed } from "vue"
import { useStore } from "vuex"
import { Head } from "@vueuse/head"

const policy = ref("")
const store = useStore()
const settings = computed(() => store.getters.settings)

const getPolicy = () => {
    axios.get("/api/policy").then((response) => {
        policy.value = response.data
    })
}

onMounted(() => {
    getPolicy()
})
</script>
