<template>
  <v-container>
    <v-row>
      <v-select
        label="Метод транслітерації"
        density="compact"
        :items="appStore.allTranslationMethods"
        :loading="isTranslationMethodsLoading"
        item-title="title"
        item-value="code"
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
import {computed, onMounted} from "vue";

const isTranslationMethodsLoading = computed(() => appStore.allTranslationMethods.length == 0);

onMounted(() => appStore.getTranslationMethods());


const appStore = useAppStore();
</script>
