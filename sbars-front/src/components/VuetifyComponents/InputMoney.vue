<template>
    <v-col :cols="cols">
        <v-text-field
            :id="id"
            :name="name"
            :value="mask"
            :label="label"
            :rules="rules"
            :error-messages="error"
            @input="changeError(); model = $event"
            @keydown.native="changeNumber($event);"
        ></v-text-field> 
    </v-col>    
</template>

<script>
export default {
    name: 'InputMoney',
    props: {
      label: String,
      cols: Number,
      rules: Array,
      id: String,
      name: {
        type: String,
      },
      value: {
        default: '',
      },
      type: {
        type: String,
        default: 'text'
      },
      error: {
        type: String,
        required: false,
      },
    },
    data() {
        return {
            model: '',
            mask: '',
        };
    },
    methods: {
      changeError() {
        this.$emit('changeError', this.name);
      },
      changeNumber(event) {
        if((event.keyCode >= 96 && event.keyCode <= 105)
        || (event.keyCode >= 48 && event.keyCode <= 57)
        || (event.keyCode == 8)){
            return
        } else {
            event.preventDefault();
        }
      },
      toDouble(value) {
        if(value) {
          value = value.replaceAll('.', '');
          value = value.replaceAll(',', '');
          value =`${value.slice(0, -2)}.${value.slice(-2)}`
        }
        return value;
      },
      removeMask(value) {
        if(!value) {
          return false;
        }
        value = value + '';
        return `${parseInt(value.replace(',', '').replaceAll('.', ''))}`;
      },
      onMask(value) {
        value = this.removeMask(value);
        if(value == false) return 
        if(value.length == 3){
          value = `${value.slice(0, -2)},${value.slice(-2)}`
        } else if(value.length == 2) {
          value = `0,${value.slice(-2)}`
        } else if(value.length == 1) {
          value = `0,0${value.slice(-1)}`
        } else {
          for(let i = 1; i <= parseInt((value.length-2)/4) ;i++){
            if(i == 1) {
              value = `${value.slice(0, -5)}.${value.slice(-5)}`
            } else {
              let n = -(2+3+(4*(i-1)))
              value = `${value.slice(0, n)}.${value.slice(n)}`
            }
          }
          value = `${value.slice(0, -2)},${value.slice(-2)}`
        }
        return value;
      }
    },
    watch: {
        value(value) {
          if(value != null){
            this.mask = value.toLocaleString('pt-br', {minimumFractionDigits: 2})
            this.mask = this.onMask(this.mask)
          } else {
            this.mask = null
          }
        },
        model(value) {
          if(this.toDouble(value) == '.00' ||
             this.toDouble(value) == '.0'  ||
             this.toDouble(value) == '.' ) {
            this.$emit('input', null);
          } else {
            this.$emit('input', this.toDouble(value));
          }
          
        },
    },
}
</script>

<style  scoped>

</style>