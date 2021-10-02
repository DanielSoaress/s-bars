import { router } from './config';

export default sidebar => {
  let sidenav = [];

 /********************************************************
   * Produtos
   ********************************************************/
  sidenav.push({
    name: 'Produtos',
    icon: 'mdi-storefront-outline',
    fullPath: router.produto.fullPath,
  });

  return sidenav;
};
