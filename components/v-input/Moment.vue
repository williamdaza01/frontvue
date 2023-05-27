<script lang="ts">
import moment, {Moment, MomentInput} from "moment/moment"
import 'moment/locale/pt';
import 'moment/locale/es';
import {h, defineProps, mergeProps} from "vue"
import {useI18n} from "vue-i18n";
import {forEach, get, set} from "lodash";
moment.locale(["en", "es", "pt"])
type MomentProps = Moment
export default {
  name: "VMoment",
  props: {
    tag: {
      type: String,
      default: "span",
    },
    value: {
      type: [String, Date, Number],
      default: moment()
    },
    formatValue: {
      type: String,
      default: "YYYY-MM-DD",
    },
    'format': undefined,
    'startOf': undefined,
    'endOf': undefined,
    'add': undefined,
    'subtract': undefined,
    'calendar': undefined,
    'clone': undefined,
    'valueOf': undefined,
    'local': undefined,
    'isLocal': undefined,
    'utc': undefined,
    'isUTC': undefined,
    'parseZone': undefined,
    'isValid': undefined,
    'invalidAt': undefined,
    'hasAlignedHourOffset': undefined,
    'creationData': undefined,
    'parsingFlags': undefined,
    'year': undefined,
    'years': undefined,
    'quarter': undefined,
    'quarters': undefined,
    'month': undefined,
    'day': undefined,
    'days': undefined,
    'date': undefined,
    'hour': undefined,
    'hours': undefined,
    'minute': undefined,
    'minutes': undefined,
    'second': undefined,
    'seconds': undefined,
    'millisecond': undefined,
    'milliseconds': undefined,
    'weekday': undefined,
    'isoWeekday': undefined,
    'weekYear': undefined,
    'isoWeekYear': undefined,
    'week': undefined,
    'weeks': undefined,
    'isoWeek': undefined,
    'isoWeeks': undefined,
    'weeksInYear': undefined,
    'weeksInWeekYear': undefined,
    'isoWeeksInYear': undefined,
    'isoWeeksInISOWeekYear': undefined,
    'dayOfYear': undefined,
    'from': undefined,
    'to': undefined,
    'fromNow': undefined,
    'toNow': undefined,
    'diff': undefined,
    'toArray': undefined,
    'toDate': undefined,
    'toISOString': undefined,
    'inspect': undefined,
    'toJSON': undefined,
    'unix': undefined,
    'isLeapYear': undefined,
    'utcOffset': undefined,
    'isUtcOffset': undefined,
    'daysInMonth': undefined,
    'isDST': undefined,
    'zoneAbbr': undefined,
    'zoneName': undefined,
    'isBefore': undefined,
    'isAfter': undefined,
    'isSame': undefined,
    'isSameOrAfter': undefined,
    'isSameOrBefore': undefined,
    'isBetween': undefined,
    'locale': undefined,
    'localeData': undefined,
    'isDSTShifted': undefined,
    'max': undefined,
    'min': undefined,
    'get': undefined,
    'set': undefined,
    'toObject': undefined
  },
  setup: function (props: MomentProps & { tag: string, value: string | number | Date | Moment, formatValue: string }) {
    const {locale} = useI18n()
    const {value: newDate} = computed(() => (
      moment(props.value).isValid()
        ? moment(props.value).locale(locale.value)
        : props.value
    ))
    let dt = newDate
    forEach(
      Object.keys(props)
        .filter(key => !['tag', 'value', 'formatValue'].includes(key))
        .filter((key) => !!get(props, key, undefined)),
      (key: string) => {
        console.log(key, dt)
        dt = moment.isMoment(dt) && typeof get(dt, key) === "function"
          // @ts-ignore
          ? dt[key](...get(props, key))
          : dt
    })
    dt = moment.isMoment(dt) ? dt.format(props.formatValue) : dt
    return () => {
      // @ts-ignore
      return h(props.tag, {}, dt)
    }
  }
}
</script>
