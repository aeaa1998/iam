<template>
  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
      <div class="relative sm:max-w-sm w-full">
        <div class="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
        <div class="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
        <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
          <label for="" class="block mt-3 text-2xl text-gray-700 text-center font-semibold"> Login </label>
          <form method="#" action="#" class="mt-10">
            <div>
              <v-input v-model="email" type="email" placeholder="Correo electronico" />
            </div>

            <div class="mt-7">
              <v-input v-model="password" type="password" placeholder="Contraseña" />
            </div>

            <div class="mt-7 flex">
              <label for="remember_me" class="inline-flex items-center w-full cursor-pointer">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  name="remember"
                />
                <span class="ml-2 text-sm text-gray-600">Recuerdame</span>
              </label>

              <div class="w-full text-right">
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="#">¿Olvidó su contraseña?</a>
              </div>
            </div>

            <div class="mt-7">
              <v-rounded-btn class="bg-blue-500 w-full text-white"> Login </v-rounded-btn>
            </div>

            <div class="mt-7">
              <div class="flex justify-center items-center">
                <label class="mr-2">¿Eres nuevo?</label>
                <router-link to="/register" class="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"> Registrate </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: () => ({
    email: null,
    password: null,
  }),
};
</script>
