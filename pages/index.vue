<template>
  <div>
    <h1>Hello World!</h1>

    <nav>
      <a v-for="n in 5" :href="`#section-${n}`" style="margin-right: 30px;">Go to {{ n }}</a>
    </nav>

    <section v-for="n in 5" :id="`section-${n}`" style="height: 100vh;">
      <h1>Section {{ n }}</h1>
    </section>

  </div>
</template>
