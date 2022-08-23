import axios from '@/axios/index'

const state = {
	settings: {},
	phone_digits: '',
}

const getters = {
	settings(state) {
		return state.settings
	},
	phone_digits(state) {
		return state.phone_digits
	},
}

const mutations = {
	setSettings(state, settings) {
		state.settings = settings
	},
	setPhone(state, phone_digits) {
		state.phone_digits = phone_digits
	},
}

const actions = {
	getSettings({ commit }) {
		return axios.get('http://happykids-backend.test/api/settings').then((response) => {
			const settings = response.data
			const phone_digits = settings.phone.replace(/[^\d]/g, '')
			commit('setSettings', settings)
			commit('setPhone', phone_digits)
		})
	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}
