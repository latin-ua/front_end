<template>
  <v-textarea
    auto-grow
    counter
    variant="outlined"
    clearable
    clear-icon="mdi-delete-outline"
    :prepend-inner-icon=textIcon
    :append-inner-icon=copyIcon
    :model-value=modelValue
    @input="$emit('update:modelValue', $event.target.value)"
    @click:clear="$emit('update:modelValue', '')"
    @click:appendInner="copyContentToClipboard"
  >
  </v-textarea>
</template>

<script setup lang="ts">
import {computed} from "vue";

type TextKind = "latin" | "cyrillic";

defineEmits(["update:modelValue"]);

const props = defineProps<{
  kind: TextKind,
  modelValue: string,
}>();

const isLatin = computed(() => props.kind == "latin");
const textIcon = computed(() => isLatin.value ? "mdi-alphabet-latin" : "mdi-alphabet-cyrillic");
const copyIcon = computed(() => props.modelValue ?  "mdi-content-copy" : "")

function copyContentToClipboard() {
  navigator.clipboard.writeText(props.modelValue)
}
</script>

