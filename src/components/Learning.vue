<template>
	<section id="learning" class="learning pt-s">
		<div class="learning__container">
			<h2 v-animate-onscroll="'_fade-up'" class="learning__title title _fade-down">
				{{ recruiting_full }}
			</h2>
			<button @click="emitOpen" v-animate-onscroll="'_fade-up'" type="button" class="learning__button btn _fade-down">Присоединяйтесь к нам</button>
			<div class="learning__body">
				<template v-for="(grade, key) in grades" :key="key">
					<router-link :to="{ name: 'grade', params: { slug: grade.slug } }" v-animate-onscroll="'_fade-up'" class="learning__item item-learning _fade-down">
						<div v-if="grade.badge" class="item-learning__bage">
							{{ grade.badge }}
						</div>
						<div class="item-learning__image item-learning__image-ibg">
							<picture>
								<source :srcset="grade.image.cropped_webp" type="image/webp" />
								<img loading="lazy" :src="grade.image.cropped" :alt="grade.title"
							/></picture>
						</div>
						<h3 class="item-learning__subtitle">
							{{ grade.title }}
						</h3>
					</router-link>
				</template>
			</div>
			<router-link :to="{ name: 'section' }" v-animate-onscroll="'_fade-up'" class="learning__extra title pt-s _fade-down">+ продленка и секции </router-link>
		</div>
	</section>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const props = defineProps({
	recruiting_full: String,
})

const store = useStore()

const getGrades = store.dispatch('getGrades')
const grades = computed(() => store.getters.grades)
const emit = defineEmits(['toggleModal'])

const emitOpen = () => {
	emit('toggleModal')
}
</script>
