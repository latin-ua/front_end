// Utilities
import {defineStore} from 'pinia'
import {ref} from "vue";

export const useAppStore = defineStore('app', () => {
  const sourceText = ref("");
  const translatedText = ref("");

  async function translate() {
    translatedText.value = "Not implemented yet.";
  }

  return {sourceText, translatedText, translate};
})
