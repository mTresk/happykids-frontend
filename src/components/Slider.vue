<template>
	<section id="photo" class="photo pt pb-s">
		<div class="photo__container">
			<h2 data-watch data-watch-once class="photo__title title">Наши будни</h2>
			<div class="photo__navigation">
				<div class="swiper-button-prev">
					<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.3684 20L12 18.3684L3.63158 10L12 1.63158L10.3684 4.76837e-07L0.421054 10L10.3684 20Z" fill="white" />
					</svg>
				</div>
				<div class="swiper-button-next">
					<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.63158 0L0 1.63158L8.36842 10L0 18.3684L1.63158 20L11.5789 10L1.63158 0Z" fill="#B85E65" />
					</svg>
				</div>
			</div>
			<vue-easy-lightbox loop moveDisabled :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
			<div v-animate-onscroll="'_fade-up'" class="photo__body _fade-down">
				<div class="photo__slider">
					<swiper
						:modules="modules"
						:slides-per-view="3"
						:space-between="30"
						loop
						:speed="800"
						:navigation="{
							prevEl: '.swiper-button-prev',
							nextEl: '.swiper-button-next',
						}"
						:pagination="{
							clickable: true,
							el: '.swiper-pagination',
						}"
						:autoplay="{
							delay: 5000,
							disableOnInteraction: false,
						}"
						effect="coverflow"
						:coverflowEffect="{
							rotate: 30,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}"
						:breakpoints="{
							375: {
								slidesPerView: 1,
								coverflowEffect: {
									depth: 0,
								},
							},
							768: {
								slidesPerView: 3,
								coverflowEffect: {
									depth: 50,
								},
							},
							992: {
								coverflowEffect: {
									depth: 100,
								},
							},
						}"
					>
						<swiper-slide @click="showMultiple(key)" v-for="(slide, key) in slides" :key="key">
							<div class="photo__image photo__image-ibg">
								<picture>
									<source :srcset="slide.cropped_webp" type="image/webp" />
									<img loading="lazy" :src="slide.cropped" alt=""
								/></picture>
							</div>
						</swiper-slide>
					</swiper>
					<div class="photo__pagination swiper-pagination"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup (props)>
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const props = defineProps({
	slides: Object,
})

const visibleRef = ref(false)
const indexRef = ref(0)
const imgsRef = ref([])

const onShow = () => {
	visibleRef.value = true
}

const showMultiple = (key) => {
	imgsRef.value = props.slides.map((image) => {
		return image.full
	})

	indexRef.value = key
	onShow()
}

const onHide = () => (visibleRef.value = false)

const modules = [Navigation, Pagination, EffectCoverflow, Autoplay]
</script>

<style>
.swiper-slide-next {
	transform: scale(1.4) !important;
	transition: transform 0.3s ease-in-out;
}

.vel-modal {
	background: rgba(0, 0, 0, 0.9) !important;
}

.photo__image {
	cursor: pointer;
}
</style>
