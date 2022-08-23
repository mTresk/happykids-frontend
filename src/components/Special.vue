<template>
	<section class="special pb" id="special">
		<div class="special__container">
			<div class="special__kids">
				<div v-animate-onscroll="'_fade-up'" class="special__kid _fade-down">
					<picture>
						<source srcset="@/assets/img/kid-1.webp" type="image/webp" />
						<img loading="lazy" src="@/assets/img/kid-1.png" alt=""
					/></picture>
				</div>
				<div v-animate-onscroll="'_fade-up'" class="special__kid _fade-down">
					<picture>
						<source srcset="@/assets/img/kid-2.webp" type="image/webp" />
						<img loading="lazy" src="@/assets/img/kid-2.png" alt=""
					/></picture>
				</div>
			</div>
		</div>
		<div class="special__wrapper">
			<div class="special__container">
				<div class="special__body pt-s pb-s">
					<div class="special__column">
						<h2 v-animate-onscroll="'_fade-up'" class="special__title title _fade-down">Мы отказались от:</h2>
						<ul>
							<li v-animate-onscroll="'_fade-up'" class="_fade-down" v-for="(item, index) in we_abandoned" :key="index">
								{{ item.item }}
							</li>
						</ul>
					</div>
					<div class="special__column special__column_plus">
						<h2 v-animate-onscroll="'_fade-up'" class="special__title title _fade-down">Мы выбираем:</h2>
						<ul>
							<li v-animate-onscroll="'_fade-up'" class="_fade-down" v-for="(item, index) in we_choose" :key="index">
								{{ item.item }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	we_choose: Object,
	we_abandoned: Object,
})
</script>
