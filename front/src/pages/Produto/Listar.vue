<template>
    <div>
        <Form title="Listar Produtos">
            <v-col cols='6'>
                <v-text-field
                    :counter="10"
                    label="Código do Produto"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    :counter="10"
                    label="Nome do Produto"
                    required
                ></v-text-field>   
            </v-col>
        </Form>
        <v-row class="mt-4">
            <v-col cols="12">
                <DataTable />
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    
}
</script>