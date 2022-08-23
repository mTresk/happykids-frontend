import axios from 'axios'

const state = {
	grades: {},
}

const getters = {
	grades(state) {
		return state.grades
	},
}

const mutations = {
	setGrades(state, grades) {
		state.grades = grades
	},
}

const actions = {
	getGrades({ commit }) {
		return axios
			.get('/grade')
			.then((grades) => {
				commit('setGrades', grades.data.data)
			})
			.catch((errors) => {
				console.log(errors)
			})
	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}
