<template>
    <Form
        :title="$route.name"
        type="form"
        @cadastrar="cadastrar(model)">  
        <Input
            :cols="2"
            label="Código"
            v-model="model.cod_produto"             
        />
        <Input
            :cols="4"
            label="Nome"
            v-model="model.nom_produto"
        />
        <Input
            :cols="2"
            label="Valor"
            v-model="model.val_produto"
        />
        <Input
            :cols="12"
            label="Descrição"
            v-model="model.des_produto"
        />
        </Form>
</template>

<script>
import ProdutoMixin from './ProdutoMixin';

export default {
    mixins: [ProdutoMixin],
    data: () => ({
    }),    
}
</script>