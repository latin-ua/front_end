<template>
  <v-container>
    <v-row>
      <v-select
        label="Метод транслітерації"
        density="compact"
        :items="translationMethods"
        item-title="title"
        item-value="method"
        v-model="appStore.translationMethod"
      />
    </v-row>
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
import { ref } from "vue";

const translationMethods = ref([
  {
    method: "DSTU_A",
    title: "ДСТУ - Система А"
  },
  {
    method: "KMU",
    title: "Постанова КМУ"
  },
])


const appStore = useAppStore();
</script>
