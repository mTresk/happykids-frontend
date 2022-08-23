import axios from 'axios'

const state = {
	grade: {},
	image_full: '',
	image_full_webp: '',
}

const getters = {
	grade(state) {
		return state.grade
	},
	image_full(state) {
		return state.image_full
	},
	image_full_webp(state) {
		return state.image_full_webp
	},
}

const mutations = {
	setGrade(state, grade) {
		state.grade = grade
	},
	setImageFull(state, image_full) {
		state.image_full = image_full
	},
	setImageFullWebp(state, image_full_webp) {
		state.image_full_webp = image_full_webp
	},
}

const actions = {
	getGrade({ commit }, slug) {
		axios.get(`/grade/${slug}`).then((response) => {
			commit('setGrade', response.data.data)
			commit('setImageFull', response.data.data.image.full)
			commit('setImageFullWebp', response.data.data.image.full_webp)
		})
	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}
