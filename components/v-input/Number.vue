<script lang="ts">
import {h, mergeProps, resolveDirective} from "vue"
import {VTextField} from "vuetify/components/VTextField";
type VNumberField = InstanceType<typeof VTextField>['$props']
export default {
  name: "VNumberField",
  setup(props: VNumberField) {
    const vNumeric = resolveDirective("number-only")
    return () => {
      return withDirectives(h(VTextField,
        mergeProps(props, {
          color: 'primary',
          variant: 'underlined',
          clearable: true,
          prependInnerIcon: "$numeric",
          inputmode: "numeric",
          type: "text"
        })
      ), [[vNumeric]])
    }
  },
}
</script>