// Utilities
import {defineStore} from 'pinia'
import {ref} from "vue";
import axios from "axios";

export const useAppStore = defineStore('app', () => {
  const sourceText = ref("");
  const translatedText = ref("");

  async function translate() {
    const config = {
      method: 'post',
      url: 'http://latin.com.ua/',
      data : {
        'translationMethod': 'DSTU_A',
        'text': sourceText.value,
      },
      headers: {
        'Content-Type': 'application/json'
      },
    };

    const response = await axios.request(config);
    translatedText.value = response.data;
  }

  return {sourceText, translatedText, translate};
})
