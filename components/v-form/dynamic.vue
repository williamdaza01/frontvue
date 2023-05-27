<template>
  <Form as="v-form" @submit="onSubmit">
    <v-card flat color="tranparent">
      <v-card-item>
        <v-row dense>
          <v-col v-for="(input, i) in schema" :key="i" cols="12" sm="12" :md="input.flex || 6">
            <Field
              :name="input.name"
              :rules="input.rules"
              v-slot="{ errors, handleChange, value }"
            >
              <Component
                v-bind="mergeProps(input.props || {})"
                :model-value="value"
                @update:modelValue="handleChange"
                :error-messages="errors"
                :loading="isSubmitting"
                :disabled="isSubmitting"
                :label="$t(`inputs.${input.name}`) || input.props.label"
                :placeholder="$t(`inputs.${input.name}`)"
                :is="getInputComponent(input.as || 'text')"
              />
            </Field>
          </v-col>
        </v-row>
      </v-card-item>
      <v-card-actions>
        <v-btn
          v-if="!hideResetButton"
          color="error"
          variant="outlined"
          :loading="isSubmitting"
          :disabled="isSubmitting"
          type="reset"
          @click="handleReset"
          :aria-label="$t(buttonResetText)"
          :title="$t(buttonResetText)"
        >
          {{ $t(buttonResetText) }}
        </v-btn>
        <v-btn
          v-bind="buttonSubmitProps"
          type="submit"
          variant="elevated"
          :loading="isSubmitting"
          :disabled="isSubmitting"
          :aria-label="$t(buttonSubmitText)"
          :title="$t(buttonSubmitText)"
        >
          {{$t(buttonSubmitText)}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </Form>
</template>

<script setup lang="ts">
import {FormSchema} from "@/types/dashboard"
import {VBtn} from "vuetify/components";
import {mergeProps, PropType} from 'vue'
const props = defineProps({
  hideResetButton: {
    type: Boolean,
    default: false,
  },
  buttonResetText: {
    type: String,
    default: "buttons.reset"
  },
  buttonSubmitText: {
    type: String,
    default: "buttons.submit"
  },
  buttonSubmitProps: {
    type: Object as PropType<InstanceType<typeof VBtn>['$props']>,
    default: () => ({})
  },
  schema: {
    type: Array as PropType<FormSchema[]>,
    required: true,
  }
})
import { useForm, Field, Form } from 'vee-validate'
import {setLocale} from "@vee-validate/i18n";
import {useI18n} from "vue-i18n";

const { useFieldModel, handleReset, isSubmitting } = useForm()
const { locale } = useI18n()
const fields: string[] = props.schema?.map((sch) => {
  return sch.name
})

const form = useFieldModel(fields)

const getInputComponent = (input: string) => {
  if (input == "text") return "VTextField";
  if (input == "email") return "VEmailField";
  if (input == "password") return "VInputPassword";
  if (input == "number") return "VInputNumber";
  if (input == "select") return "VSelect";
  if (input == "checkbox") return "VCheckbox";
  if (input == "slider") return "v-slider";
  if (input == "range-slider") return "VRangeSlider";
  if (input == "switch") return "VSwitch";
  if (input == "textarea") return "VTextarea";
  if (input == "radio") return "VRadio";
};

const lang = computed(() => {
  return locale.value
})

onMounted(() => {
  setLocale(lang.value)
})

const emits = defineEmits(['onSubmit'])

const onSubmit = (values: Object, form: any) => {  
  isSubmitting.value = true;
  emits('onSubmit', values, isSubmitting, form)
}
</script>
