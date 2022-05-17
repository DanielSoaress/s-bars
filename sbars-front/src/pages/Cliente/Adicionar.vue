<template>
    <Form
        :title="$route.name"
        type="form"
        @action="cadastrar(model)"
        :loading="loading"
    >  
        <Input
            :cols="6"
            label="Nome"
            id="nom_cliente"
            name="nom_cliente"
            v-model="model.nom_cliente"
            :rules="nom_rules"
            :error="getError('nom_cliente')" 
            @changeError="removeError"                       
        />
        <Input
            :cols="2"
            id="tel_cliente"
            name="tel_cliente"
            label="Telefone"
            v-model="model.tel_cliente"
            :rules="tel_rules"
            :error="getError('tel_cliente')"
            @changeError="removeError"
            mask="(##) #####-####"
        />
        <DatePicker
            :cols="2"
            id="niver_cliente"
            name="niver_cliente" 
            label="Aniversário"
            format="DD/MM"
            v-model="model.niver_cliente"
            :rules="niver_rules"
            @changeError="removeError"
            :error="getError('niver_cliente')"        
        />        
        <Input
            :cols="12"
            id="end_cliente"
            name="end_cliente"           
            label="Endereço"
            v-model="model.end_cliente"
            :rules="end_rules"
            :error="getError('end_cliente')"
            @changeError="removeError"
        />
    </Form>
</template>

<script>
import ClienteMixin from './ClienteMixin';
import validator from '../../mixins/validator';

export default {
    mixins: [ClienteMixin, validator],
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