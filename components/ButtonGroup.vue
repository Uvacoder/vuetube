<template>
  <section>
    <form>
      <label for="vue">
        <input type="radio" name="vueOrNuxt" id="vue" checked value="Vue" />VUE
      </label>
      <label for="nuxt">
        <input type="radio" name="vueOrNuxt" id="nuxt" value="Nuxt" />NUXT
      </label>
    </form>
  </section>
</template>

<style scoped>
form {
  @apply flex pt-8 pb-5;
}
label {
  @apply font-black text-five text-lg mx-auto bg-green-700 px-5 py-2 rounded-3xl;
}
input {
  @apply bg-green-700 text-green-700 p-4 mr-1 focus:outline-none border-0 outline-none;
}
input:checked:focus {
  @apply border-0 outline-none ring-0 text-ten;
}
</style>