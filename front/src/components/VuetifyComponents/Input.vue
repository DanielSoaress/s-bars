<template>
    <v-col :cols="cols">
          <v-text-field
            v-if="type == 'default'"
            :id="id"
            :name="name"
            v-model="model"
            :label="label"
            :rules="rules"
            v-mask="mask"
            :error-messages="error"
            @input="changeError()"
        ></v-text-field> 
        <v-text-field
            v-if="type == 'text'"
            :id="id"
            :name="name"
            v-model="model"
            :label="label"
            :rules="rules"
            v-mask="mask"
            :error-messages="error"
            @input="changeError()"
        ></v-text-field> 
        <v-text-field
            v-if="type == 'number'"
            :id="id"
            :name="name"
            v-model="model"
            :label="label"
            :rules="rules"
            :error-messages="error"
            v-mask="mask"
            @input="changeError();"
            @keydown.native="changeNumber($event);"
        ></v-text-field>
        <v-text-field
            v-if="type == 'password'"
            :prepend-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
            @click:prepend="show_password = !show_password"
            :type="show_password ? 'text' : 'password'"            
            :id="id"
            :name="name"
            v-model="model"
            :label="label"
            :rules="rules"
            :error-messages="error"
            v-mask="mask"
            @input="changeError();"
        ></v-text-field>  
    </v-col>    
</template>

<script>
export default {
    name: 'Input',
    props: {
      label: String,
      cols: Number,
      rules: Array,
      id: String,
      mask: String,
      name: {
        type: String,
      },
      value: {
        default: '',
      },
      type: {
        type: String,
        default: 'default'
      },
      error: {
        type: String,
        required: false,
      },
    },
    data() {
        return {
            model: '',
            show_password: false,
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
          this.model = value;
        },
        model(value) {
          if(this.type == 'number') {
            value = this.onMask(value);
          }
          this.$emit('input', value);
        },
    },
    mounted() {
        this.model = this.value;
    },  
}
</script>

<style  scoped>

</style>