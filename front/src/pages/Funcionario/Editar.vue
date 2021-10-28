<template>
    <Form
        :title="$route.name"
        type="form"
        @action="atualizar(model)"
        :loading="loading"
    >  
        <Input
            :cols="6"
            label="Nome"
            id="nom_func"
            name="nom_func"
            v-model="model.nom_func"
            :rules="nom_rules"
            :error="getError('nom_func')" 
            @changeError="removeError"                       
        />
        <Input
            :cols="2"
            id="tel_func"
            name="tel_func"
            label="Telefone"
            v-model="model.tel_func"
            :rules="tel_rules"
            :error="getError('tel_func')"
            @changeError="removeError"
            mask="(##) #####-####"
        />
        <DatePicker
            :cols="2"
            id="niver_func"
            name="niver_func" 
            label="Aniversário"
            format="DD/MM"
            v-model="model.niver_func"
            :rules="niver_rules"
            @changeError="removeError"
            :error="getError('niver_func')"        
        />        
        <Input
            :cols="12"
            id="end_func"
            name="end_func"           
            label="Endereço"
            v-model="model.end_func"
            :rules="end_rules"
            :error="getError('end_func')"
            @changeError="removeError"
        />
    </Form>
</template>

<script>
import FuncionarioMixin from './FuncionarioMixin';
import validator from '../../mixins/validator';

export default {
    mixins: [FuncionarioMixin, validator],
    data: () => ({
        nom_rules: [
            v => !!v || 'Nome é obrigatório',
        ],
        tel_rules: [
            v => !!v || 'Telefone é obrigatório',
        ],
        niver_rules: [
            v => !!v || 'Aniversário é obrigatório',
        ],
        end_rules: [
            v => !!v || 'Endereço é obrigatório',
        ],
    }),    
}
</script>