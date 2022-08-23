<template>
	<header class="header">
		<div class="header__container">
			<div :class="{ 'menu-open': isMenuOpen }" class="header__body">
				<router-link :to="{ name: 'home' }" class="header__logo">
					<img src="@/assets/img/icons/logo.svg" alt="Логотип сайта" />
				</router-link>
				<div class="header__menu menu">
					<button @click="toggleMenu" type="button" class="menu__icon icon-menu">
						<span></span>
					</button>
					<nav v-if="$route.name === 'home'" class="menu__body">
						<ul class="menu__list">
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ hash: '#about' }" class="menu__link">О нас</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ hash: '#learning' }" class="menu__link">Обучение</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ hash: '#admission' }" class="menu__link">Поступление</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ hash: '#faq' }" class="menu__link">Ответы на вопросы</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ hash: '#photo' }" class="menu__link">Фото</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ hash: '#contacts' }" class="menu__link">Контакты</router-link>
							</li>
							<li class="menu__item">
								<a @click.prevent="emitPaymentOpen" href="#" class="menu__link">Оплата</a>
							</li>
						</ul>
					</nav>
					<nav v-else class="menu__body">
						<ul class="menu__list">
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ name: 'home', hash: '#about' }" class="menu__link">О нас</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ name: 'home', hash: '#learning' }" class="menu__link">Обучение</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ name: 'home', hash: '#admission' }" class="menu__link">Поступление</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ name: 'home', hash: '#faq' }" class="menu__link">Ответы на вопросы</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ name: 'home', hash: '#photo' }" class="menu__link">Фото</router-link>
							</li>
							<li class="menu__item">
								<router-link @click="toggleMenu" :to="{ name: 'home', hash: '#contacts' }" class="menu__link">Контакты</router-link>
							</li>
							<li class="menu__item">
								<a @click.prevent="emitPaymentOpen" href="#" class="menu__link">Оплата</a>
							</li>
						</ul>
					</nav>
				</div>
				<div class="header__socials">
					<a :href="`tel:+${phone_digits}`" class="header__social">
						<img src="@/assets/img/icons/phone.svg" alt="" />
					</a>
					<a :href="settings.telegram" class="header__social">
						<img src="@/assets/img/icons/tg.svg" alt="" />
					</a>
					<a :href="settings.whatsapp" class="header__social">
						<img src="@/assets/img/icons/wa.svg" alt="" />
					</a>
					<a :href="settings.vk" class="header__social">
						<img src="@/assets/img/icons/vk.svg" alt="" />
					</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { headerScroll } from '@/functions/headerScroll'
import * as flsFunctions from '@/files/functions'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const isMenuOpen = ref(false)
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
	if (window.innerWidth < 992) {
		document.documentElement.classList.toggle('lock')
	} else document.documentElement.classList.remove('lock')
}

const store = useStore()
const props = defineProps({
	recruiting: String,
})
const emit = defineEmits(['togglePaymentModal'])

const settings = computed(() => store.getters.settings)
const phone_digits = computed(() => store.getters.phone_digits)

onMounted(() => {
	headerScroll()
})

const emitPaymentOpen = () => {
	emit('togglePaymentModal')
}
</script>
