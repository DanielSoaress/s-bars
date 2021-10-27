import { router } from './config';

function sidebar () {
  let sidenav = [];

 
  sidenav.push({
    name: 'Produto',
    icon: 'mdi-storefront-outline',
    fullPath: router.produto.fullPath,
  });

  sidenav.push({
    name: 'Cliente',
    icon: 'mdi-account',
    fullPath: router.cliente.fullPath,
  });

  sidenav.push({
    name: 'Funcionário',
    icon: 'mdi-account-supervisor',
    fullPath: router.funcionario.fullPath,
  });

  sidenav.push({
    name: 'Pedido',
    icon: 'mdi-ballot',
    fullPath: router.funcionario.fullPath,
  });

  sidenav.push({
    name: 'Dashboard',
    icon: 'mdi-chart-areaspline-variant ',
    fullPath: router.funcionario.fullPath,
  });

  sidenav.push({
    name: 'Caixa',
    icon: 'mdi-cash-register',
    fullPath: router.funcionario.fullPath,
  });

  sidenav.push({
    name: 'Mesas',
    icon: 'mdi-panorama-wide-angle ',
    fullPath: router.funcionario.fullPath,
  });

  sidenav.push({
    name: 'Suporte',
    icon: 'mdi-chat',
    fullPath: router.funcionario.fullPath,
  });

  return sidenav;
}

export default sidebar
