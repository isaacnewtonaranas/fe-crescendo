<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-red-7">
      <q-toolbar>
        <q-toolbar-title>
          <a class="logo" href="/">Crescendo App</a>
        </q-toolbar-title>
        <div>Copyright 2020</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
<style>
.logo {
  color: white;
  text-decoration: none;
}
</style>
