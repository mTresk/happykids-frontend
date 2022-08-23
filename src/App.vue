<template>
	<Head>
		<title>{{ settings.site_name }}</title>
		<meta name="description" :content="settings.site_description" />
		<link rel="manifest" href="/site.webmanifest" />
		<!-- Facebook Meta Tags -->
		<meta property="og:url" :content="origin" />
		<meta property="og:type" content="website" />
		<meta property="og:title" :content="settings.site_name" />
		<meta property="og:description" :content="settings.site_description" />
		<meta property="og:image" :content="`${origin}/${settings.og_image}`" />

		<!-- Twitter Meta Tags -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta property="twitter:domain" :content="origin" />
		<meta property="twitter:url" :content="origin" />
		<meta name="twitter:title" :content="settings.site_name" />
		<meta name="twitter:description" :content="settings.site_description" />
		<meta name="twitter:image" :content="`${origin}/${settings.og_image}`" />
	</Head>
	<Preloader />
	<div class="wrapper">
		<router-view />
	</div>
</template>

<script setup>
import Preloader from '@/components/Preloader.vue'
import { Head } from '@vueuse/head'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const origin = ref(window.location.origin)
const store = useStore()

const settings = computed(() => store.getters.settings)
</script>
