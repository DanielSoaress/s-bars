import { router } from '../config';
import Inicio from '../pages/Inicio/Inicio';
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";


const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");


const routes = [
   /********************************************************
     * INICIO
     ********************************************************/
    {
      path: '/teste',
      name: `Home`,
      component: Inicio
    },  
   /********************************************************
     * LISTAR PRODUTOS
     ********************************************************/
    {
      path: `${router.produto.path}`,
      name: `Pesquisar ${router.produto.name}`,
      component: () => import('../pages/Produto/Listar')
    },
    /********************************************************
     * ADICIONAR PRODUTOS
     ********************************************************/
     {
      path: `${router.produto.path}/adicionar`,
      name: `Incluir ${router.produto.name}`,
      component: () => import('../pages/Produto/Adicionar')
    },
    /********************************************************
     * EDITAR PRODUTOS
     ********************************************************/
     {
      path: `${router.produto.path}/editar/:id`,
      name: `Editar ${router.produto.name}`,
      component: () => import('../pages/Produto/Editar')
    },
    /********************************************************
     * LISTAR CLIENTES
     ********************************************************/
    {
      path: `${router.cliente.path}`,
      name: `Pesquisar ${router.cliente.name}`,
      component: () => import('../pages/Cliente/Listar')
    },
    /********************************************************
     * ADICIONAR CLIENTES
     ********************************************************/
     {
      path: `${router.cliente.path}/adicionar`,
      name: `Incluir ${router.cliente.name}`,
      component: () => import('../pages/Cliente/Adicionar')
    },
    /********************************************************
     * EDITAR CLIENTES
     ********************************************************/
     {
      path: `${router.cliente.path}/editar/:id`,
      name: `Editar ${router.cliente.name}`,
      component: () => import('../pages/Cliente/Editar')
    }, 
    /********************************************************
     * LISTAR FUNCIONÁRIOS
     ********************************************************/
     {
      path: `${router.funcionario.path}`,
      name: `Pesquisar ${router.funcionario.name}`,
      component: () => import('../pages/Funcionario/Listar')
    },
    /********************************************************
     * ADICIONAR FUNCIONÁRIOS
     ********************************************************/
     {
      path: `${router.funcionario.path}/adicionar`,
      name: `Incluir ${router.funcionario.name}`,
      component: () => import('../pages/Funcionario/Adicionar')
    },
    /********************************************************
     * EDITAR FUNCIONÁRIOS
     ********************************************************/
     {
      path: `${router.funcionario.path}/editar/:id`,
      name: `Editar ${router.funcionario.name}`,
      component: () => import('../pages/Funcionario/Editar')
    },
    {
      path: "/",
      component: DashboardLayout,
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
      ]
    },
    { path: "*", component: NotFound },
];

export default routes;