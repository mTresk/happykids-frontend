<template>
	<Header @togglePaymentModal="togglePaymentModal" />
	<main class="page">
		<Hero @toggleModal="toggleModal" :recruiting="recruiting" />
		<About :about_title="about_title" :about_text="about_text" />
		<Education :education="education" />
		<Advantages :advantages="advantages" />
		<Special :we_choose="we_choose" :we_abandoned="we_abandoned" />
		<Learning @toggleModal="toggleModal" :recruiting_full="recruiting_full" />
		<Admission @toggleModal="toggleModal" :admission="admission" />
		<Faq :faqs="faqs" />
		<Slider :slides="slides" />
		<Contacts :settings="settings" :phone_digits="phone_digits" />
	</main>
	<Footer />
	<Modal :toggleModal="modalActive" :togglePaymentModal="modalPaymentActive" @closeModal="toggleModal" @closePaymentModal="togglePaymentModal"></Modal>
</template>
<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Slider from '../components/Slider.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Education from '../components/Education.vue'
import Advantages from '../components/Advantages.vue'
import Special from '../components/Special.vue'
import Learning from '../components/Learning.vue'
import Admission from '../components/Admission.vue'
import Faq from '../components/Faq.vue'
import Contacts from '../components/Contacts.vue'
import Modal from '../components/Modal.vue'
import { ref, onMounted } from 'vue'
import axios from '@/axios'

const modalActive = ref(false)
const modalPaymentActive = ref(false)
const props = defineProps({
	settings: Object,
	phone_digits: String,
})

const about_title = ref('')
const about_text = ref('')
const admission = ref({})
const faqs = ref({})
const we_abandoned = ref({})
const we_choose = ref({})
const recruiting = ref('')
const recruiting_full = ref('')
const slides = ref({})
const education = ref({})
const advantages = ref({})

const toggleModal = () => {
	modalActive.value = !modalActive.value
	document.documentElement.classList.contains('lock') ? document.documentElement.classList.remove('lock') : document.documentElement.classList.add('lock')
}

const togglePaymentModal = () => {
	modalPaymentActive.value = !modalPaymentActive.value
	document.documentElement.classList.contains('lock') ? document.documentElement.classList.remove('lock') : document.documentElement.classList.add('lock')
}

const getHomePageData = () => {
	axios.get('/home').then((response) => {
		const data = response.data.data
		recruiting.value = data.recruiting
		recruiting_full.value = data.recruiting_full
		about_title.value = data.about_title
		about_text.value = data.about_text
		education.value = data.education
		advantages.value = data.advantages
		admission.value = data.admission
		we_choose.value = data.we_choose
		we_abandoned.value = data.we_abandoned
		faqs.value = data.faq.map((faq, index) => ({
			question: faq.question,
			answer: faq.answer,
			active: false,
			id: index,
		}))
		slides.value = data.slides.map((slide) => ({
			full: slide.full,
			cropped: slide.cropped,
			cropped_webp: slide.cropped_webp,
		}))
	})
}

onMounted(() => {
	getHomePageData()
})
</script>
