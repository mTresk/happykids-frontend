<template>
    <div :id="index" :class="{ '_spoller-active': item.active }" class="spoilers__item">
        <div @click="toggle" class="spoilers__header">
            <h3 class="spoilers__title">{{ item.question }}</h3>
            <div class="spoilers__shevron">
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 12.5H25M13 25V0" stroke="#B85E65" stroke-width="2" />
                </svg>
            </div>
        </div>
        <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
            <p
                :class="{ '_spoller-active': item.active }"
                v-if="item.active"
                class="spoilers__body"
            >
                {{ item.answer }}
            </p>
        </transition>
    </div>
</template>

<script setup (props)>
import { getCurrentInstance, toRefs } from 'vue'

const props = defineProps({
    item: Object,
    index: Number,
    multiple: Boolean,
})

const item = toRefs(props).item
const index = toRefs(props).index
const multiple = toRefs(props).multiple
const instance = getCurrentInstance()

const toggle = (event) => {
    if (multiple.value) item.value.active = !item.value.active
    else {
        instance.parent.props.faqs.forEach((item) => {
            if (item.id === parseInt(event.target.parentElement.id)) {
                item.active = !item.active
            } else item.active = false
        })
    }
}

const afterEnter = (element) => {
    element.style.height = 'auto'
}

const enter = (element) => {
    element.style.width = getComputedStyle(element).width
    element.style.position = 'absolute'
    element.style.visibility = 'hidden'
    element.style.height = 'auto'
    const height = getComputedStyle(element).height

    element.style.width = null
    element.style.position = null
    element.style.visibility = null
    element.style.height = 0

    getComputedStyle(element).height

    requestAnimationFrame(() => {
        element.style.height = height
    })
}

const leave = (element) => {
    element.style.height = getComputedStyle(element).height
    getComputedStyle(element).height
    requestAnimationFrame(() => {
        element.style.height = 0
    })
}
</script>

<style lang="scss" scoped>
.spoilers__body {
    overflow-y: hidden;
    transition: all 0.4s ease-in-out;
}

.expand-enter-active,
.expand-leave-active {
    transition-property: opacity, height, margin-top;
}

.expand-enter,
.expand-leave-to {
    opacity: 0;
    margin-top: 0 !important;
}

.spoilers__title,
.spoilers__shevron {
    pointer-events: none;
}
</style>
