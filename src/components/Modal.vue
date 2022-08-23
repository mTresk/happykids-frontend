<template>
	<teleport to="body">
		<div aria-hidden="true" class="popup">
			<transition name="overlay" mode="out-in">
				<div v-show="modalActive" @click="closeModal" class="popup__overlay"></div>
			</transition>
			<transition name="modal" mode="out-in">
				<div v-show="modalActive" class="popup__content">
					<div v-if="isLoading" class="popup__loading"></div>
					<button @click="closeModal" type="button" class="popup__close">X</button>
					<form @submit.prevent="contact" class="popup__form form">
						<div class="form__title title">Оставьте заявку на обучение в «Школе»</div>
						<div class="form__description">Мы свяжемся с вами и подберем удобное время встречи</div>
						<div class="form__input">
							<input v-model="name" autocomplete="off" type="text" name="name" placeholder="Ваше имя" class="input" />
							<div v-if="nameError" class="form__error">
								{{ nameError[0] }}
							</div>
						</div>
						<div class="form__input">
							<input v-maska="'+7 (###) ###-##-##'" v-model="phone" autocomplete="off" type="text" name="phone" placeholder="Ваш телефон" class="input" />
							<div v-if="phoneError" class="form__error">
								{{ phoneError[0] }}
							</div>
						</div>
						<div class="form__input">
							<input v-model="age" autocomplete="off" type="number" name="age" placeholder="Возраст ребенка" class="input" />
							<div v-if="ageError" class="form__error">
								{{ ageError[0] }}
							</div>
						</div>

						<button :class="{ loading: isLoading }" type="submit" class="form__btn btn">Оставить заявку</button>
						<p class="form__accept">
							Нажимая на кнопку я принимаю условия
							<router-link @click="closeModal" :to="{ name: 'policy' }">пользовательского соглашения </router-link>
							и даю согласие на обработку персональных данных
						</p>
					</form>
				</div>
			</transition>
		</div>
	</teleport>
	<teleport to="body">
		<div aria-hidden="true" class="popup">
			<transition name="overlay" mode="out-in">
				<div v-show="modalPaymentActive" @click="closePaymentModal" class="popup__overlay"></div>
			</transition>
			<transition name="modal" mode="out-in">
				<div v-show="modalPaymentActive" class="popup__content">
					<div v-if="isLoading" class="popup__loading"></div>
					<button @click="closePaymentModal" type="button" class="popup__close">X</button>
					<form @submit.prevent="payment" class="popup__form form">
						<div class="form__title title">Оплата за обучение в «Школе»</div>
						<div class="form__input">
							<input
								v-model="amount"
								autocomplete="off"
								type="number"
								name="amount"
								data-required
								data-error="Введите сумму"
								placeholder="Сумма платежа в рублях"
								class="input"
							/>
							<div v-if="amountError" class="form__error">
								{{ amountError[0] }}
							</div>
						</div>
						<div class="form__input">
							<input
								v-model="name"
								autocomplete="off"
								type="text"
								name="name"
								data-required
								data-error="Введите ФИО ребенка"
								placeholder="ФИО ребенка"
								class="input"
							/>
							<div v-if="nameError" class="form__error">
								{{ nameError[0] }}
							</div>
						</div>
						<div class="form__input">
							<input v-model="phone" autocomplete="off" type="text" name="phone" data-required data-error="Введите телефон" placeholder="Ваш телефон" class="input" />
							<div v-if="phoneError" class="form__error">
								{{ phoneError[0] }}
							</div>
						</div>
						<button :class="{ loading: isLoading }" type="submit" class="form__btn btn">Перейти к оплате</button>
						<p class="form__accept">
							Нажимая на кнопку я принимаю условия
							<router-link @click="closePaymentModal" :to="{ name: 'policy' }">пользовательского соглашения </router-link>
							и даю согласие на обработку персональных данных
						</p>
					</form>
				</div>
			</transition>
		</div>
	</teleport>
	<teleport to="body">
		<div class="popup" aria-hidden="true">
			<transition name="overlay" mode="out-in">
				<div v-show="modalThanksActive" @click="closeThanxModal" class="popup__overlay"></div>
			</transition>
			<transition name="modal" mode="out-in">
				<div v-show="modalThanksActive" class="popup__content">
					<div class="popup__body thanks">
						<div class="thanks__title title">Спасибо!</div>
						<div class="thanks__text">Скоро мы свяжемся с вами.</div>
						<button @click="closeThanxModal" type="button" class="popup__close">X</button>
					</div>
				</div>
			</transition>
		</div>
	</teleport>
</template>

<script setup>
import { toRefs, ref } from 'vue'
import axios from '@/axios'

const props = defineProps({
	toggleModal: Boolean,
	togglePaymentModal: Boolean,
})
const emit = defineEmits(['closeModal', 'closePaymentModal'])
const name = ref('')
const phone = ref('')
const age = ref('')
const amount = ref('')
const modalThanksActive = ref(false)
const modalActive = toRefs(props).toggleModal
const modalPaymentActive = toRefs(props).togglePaymentModal
const nameError = ref('')
const phoneError = ref('')
const ageError = ref('')
const amountError = ref('')
const isLoading = ref(false)

const closeModal = () => {
	emit('closeModal')
	nameError.value = ''
	phoneError.value = ''
	ageError.value = ''
	name.value = ''
	phone.value = ''
	age.value = ''
}

const closePaymentModal = () => {
	emit('closePaymentModal')
	nameError.value = ''
	phoneError.value = ''
	amountError.value = ''
	name.value = ''
	phone.value = ''
	amount.value = ''
}

const closeThanxModal = () => {
	modalThanksActive.value = false
}

const contact = () => {
	isLoading.value = true
	axios
		.post('http://happykids-backend.test/api/contact', {
			name: name.value,
			phone: phone.value,
			age: age.value,
		})
		.then((response) => {
			if (response.status == 200) {
				isLoading.value = false
				closeModal()
				modalThanksActive.value = true
				name.value = ''
				phone.value = ''
				age.value = ''
				nameError.value = ''
				phoneError.value = ''
				ageError.value = ''
			}
		})
		.catch((error) => {
			if (error.response.status === 422) {
				isLoading.value = false
				nameError.value = error.response.data.errors.name
				phoneError.value = error.response.data.errors.phone
				ageError.value = error.response.data.errors.age
			}
		})
}

const payment = () => {
	isLoading.value = true
	axios
		.post('http://happykids-backend.test/api/payments/create', {
			name: name.value,
			phone: phone.value,
			amount: amount.value,
		})
		.then((response) => {
			if (response.status == 200) {
				isLoading.value = false
				closePaymentModal()
				name.value = ''
				phone.value = ''
				amount.value = ''
				nameError.value = ''
				phoneError.value = ''
				amountError.value = ''
			}
		})
		.catch((error) => {
			if (error.response.status === 422) {
				isLoading.value = false
				nameError.value = error.response.data.errors.name
				phoneError.value = error.response.data.errors.phone
				amountError.value = error.response.data.errors.amount
			}
		})
}
</script>

<style lang="scss">
.loading {
	opacity: 0.7;
	cursor: not-allowed;
	pointer-events: none;
}

.popup {
	&__loading {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background: url('@/assets/img/spinner.svg') 50% 50% no-repeat;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 200;
	}
}
</style>
