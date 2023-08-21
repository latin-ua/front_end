// Utilities
import {defineStore} from 'pinia'
import {ref} from "vue";
import axios from "axios";

interface TranslationMethod {
  code: string,
  title: string,
}


export const useAppStore = defineStore('app', () => {
  const sourceText = ref("");
  const translatedText = ref("");
  const allTranslationMethods = ref<TranslationMethod[]>([])
  const translationMethod = ref("");

  async function translate() {
    const config = {
      method: 'post',
      url: '/api/translate',
      data : {
        'translationMethod': translationMethod.value,
        'text': sourceText.value,
      },
      headers: {
        'Content-Type': 'application/json'
      },
    };

    const response = await axios.request(config);
    translatedText.value = response.data;
  }

  async function getTranslationMethods() {
    const config = {
      method: 'get',
      url: '/api/translation-methods',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    const response = await axios.request<TranslationMethod[]>(config);
    allTranslationMethods.value = response.data;
    translationMethod.value = response.data[0].code;
  }


  return {
    allTranslationMethods,
    sourceText,
    translatedText,
    translationMethod,
    translate,
    getTranslationMethods,
  };
})
