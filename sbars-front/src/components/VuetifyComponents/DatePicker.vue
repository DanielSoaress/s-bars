<template>
    <v-col :cols="cols">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value='view_date'
              @input="model = $event"
              :label="label"
              :hint="format"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(model)"
              v-on="on"
              @keydown.native="$event.preventDefault()"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu = false"
            locale="pt-br"
          ></v-date-picker>
        </v-menu>
    </v-col>
</template>

<script>
export default {
    name: 'DatePicker',
    props: {
      label: String,
      cols: Number,
      rules: Array,
      id: String,
      format: String,
      name: {
        type: String,
      },
      value: {
        default: '',
      },
      error: {
        type: String,
        required: false,
      },
    },
    data() {
        return {
            model: '',
            menu: false,
            date: null,
            view_date: null,
        }
    },
    methods: {
      changeError() {
        this.$emit('changeError', this.name);
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      formatDateDayMonth (date) {
        if (!date) return null;

        const day_month = date.split('-');
        return `${day_month[2]}/${day_month[1]}`;
      },
    },
    watch: {
        value(value) {
          this.model = value;
          if(this.format == "DD/MM") {
              const [day, month] = this.value.split('/');
              this.date = `2021-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
          }
        },
        model(value) {
          this.$emit('input', value);
        },
        date () {
          this.model = this.formatDate(this.date);
          if(this.format == "DD/MM") {
              this.view_date = this.formatDateDayMonth(this.date);
          }
        },
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date);
      },
    },
    created() {
        this.model = this.value;
    },  
}
</script>
