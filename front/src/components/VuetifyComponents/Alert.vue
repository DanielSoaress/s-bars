<template>
    <v-alert
      dismissible
      color="cyan"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-twitter"
      transition="scale-transition"
      class="alert"
    >
      You've got <strong>5</strong> new updates on your timeline!.
    </v-alert>
</template>

<style scoped>
.alert {
    position: absolute;
    z-index: 5;
    right: 30px;
    top: 20px;
    min-width: 400px;
}
</style>