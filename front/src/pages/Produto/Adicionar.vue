<template>
    <Form
        :title="$route.name"
        type="form"
        @cadastrar="cadastrar(model)"
        :loading="loading"
    >  
        <Input
            :cols="2"
            label="Código"
            id="cod_produto"
            name="cod_produto"
            v-model="model.cod_produto"
            :rules="cod_rules"
            :error="getError('cod_produto')" 
            @changeError="removeError"                       
        />
        <Input
            :cols="4"
            id="nom_produto"
            name="nom_produto"
            label="Nome"
            v-model="model.nom_produto"
            :rules="nom_rules"
            :error="getError('nom_produto')"
            @changeError="removeError"
        />
        <Input
            :cols="2"
            id="val_produto"
            name="val_produto"           
            label="Valor"
            v-model="model.val_produto"
            :rules="val_rules"
            :error="getError('val_produto')"
            @changeError="removeError"
        />
        <Input
            :cols="12"
            id="des_produto"
            name="des_produto"            
            label="Descrição"
            v-model="model.des_produto"
            :rules="des_rules"
            :error="getError('des_produto')"
            @changeError="removeError"
        />
    </Form>
</template>

<script>
import ProdutoMixin from './ProdutoMixin';
import validator from '../../mixins/validator';

export default {
    mixins: [ProdutoMixin, validator],
    data: () => ({
        cod_rules: [
            v => !!v || 'Código é obrigatório',
        ],
        nom_rules: [
            v => !!v || 'Nome é obrigatório',
        ],
        val_rules: [
            v => !!v || 'Valor é obrigatório',
        ],
        des_rules: [
            v => !!v || 'Descrição é obrigatório',
        ],
    }),    
}
</script>