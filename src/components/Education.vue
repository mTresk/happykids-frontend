<template>
	<section id="education" class="education pt-s pb-s">
		<div class="education__container">
			<div class="education__body">
				<div class="education__info">
					<h2 v-animate-onscroll="'_fade-up'" class="education__title title _fade-down">Большое внимание мы уделяем развитию:</h2>
					<ul class="education__list">
						<li v-for="(item, key) in education" :key="key" v-animate-onscroll="'_fade-up'" class="education__item _fade-down">
							{{ item.item }}
						</li>
					</ul>
				</div>
				<div class="education__image">
					<picture>
						<source srcset="@/assets/img/kid-3.webp" type="image/webp" />
						<img src="@/assets/img/kid-3.png" alt="Девочка в очках"
					/></picture>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Education',
	props: {
		education: Object,
	},
}
</script>
