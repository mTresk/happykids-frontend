<template>
	<section id="advantages" class="advantages pt">
		<div class="advantages__container">
			<h2 v-animate-onscroll="'_fade-up'" class="advantages__title title _fade-down">
				Мы создаем среду для развития и становления уверенной, свободной, счастливой личности. <span>КАК?</span>
			</h2>
			<div class="advantages__body">
				<div v-for="(item, key) in advantages" :key="key" v-animate-onscroll="'_fade-up'" class="advantages__item item-advantages _fade-down">
					<div class="item-advantages__icon">
						<img :src="'http://happykids-backend.test/storage/' + item.advantages_image" alt="" />
					</div>
					<h3 class="item-advantages__text">{{ item.item }}</h3>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
	advantages: Object,
})

const origin = ref(window.location.origin)
</script>
