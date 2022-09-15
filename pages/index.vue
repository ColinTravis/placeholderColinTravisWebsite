<template>
  <div class="h-screen bg-grey-lighter font-stolzl">
    <div class="container flex items-center justify-center h-full mx-auto">
      <div class="w-auto px-4 sm:w-auto lg:w-1/3">
        <div
          class="flex flex-col p-4 mb-6 bg-white rounded-lg shadow-xl border-teal border-t-12"
        >
          <logo class="block w-1/2 mx-auto" />
          <h1 class="mb-5 text-center">ColinTravis.com</h1>
          <p class="mb-5 text-center">🤷‍♂️ ⏳</p>
          <a class="mx-auto" href="https://github.com/ColinTravis">
            <IconGithub class="w-8 h-8 hover:text-ct-blue git-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import IconGithub from '~/components/icons/Icon-Github.vue'

export default {
  components: {
    Logo,
    IconGithub
  }
}
</script>

<style>
.git-icon {
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>
