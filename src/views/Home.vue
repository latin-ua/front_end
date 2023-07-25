<template>
  <v-container>
    <v-row>
      <v-col>
        <TextArea kind="cyrillic" autofocus v-model="appStore.sourceText"/>
      </v-col>
      <v-col>
        <TextArea kind="latin" v-model="appStore.translatedText"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          block
          color="primary"
          prepend-icon="mdi-translate"
          @click="appStore.translate()"
        >
          <strong>Перекласти</strong>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {useAppStore} from "@/store/app";
import TextArea from "@/components/TextArea.vue";

const appStore = useAppStore();
</script>
