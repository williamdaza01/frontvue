<script lang="ts">
import {h, mergeProps} from "vue"
import {VTextField} from "vuetify/components/VTextField";
type VPasswordField = InstanceType<typeof VTextField>['$props']
export default {
  name: "VPassswordField",
  setup(props: VPasswordField) {
    const show = ref(false)
    return () => {
      return h(VTextField,
        mergeProps(props, {
          color: 'primary',
          variant: 'underlined',
          clearable: true,
          counter: true,
          prependInnerIcon: "$dots",
          type: show.value ? 'text' : 'password',
          appendInnerIcon: show.value ? '$eye-off' : '$eye',
          "onClick:appendInner": () => show.value = !show.value
        })
      )
    }
  },
}
</script>