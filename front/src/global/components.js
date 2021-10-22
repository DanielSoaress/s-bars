import {
  NavigationDrawers,
  Form,
  DataTable,
  Input,
  InputMoney,
  Button
} from '../components';

/**
 * Você pode registrar componentes globais aqui e usá-los como um plugin na sua instância principal do Vue
 * Idealmente, apenas pequenos componentes que são reutilizados muitas vezes em seu aplicativo devem ser registrados aqui.
 * Para plug-ins e componentes maiores, o registro local é preferível porque permitirá que você faça a divisão de código mais facilmente :)
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component(NavigationDrawers.name, NavigationDrawers);
    Vue.component(Form.name, Form);
    Vue.component(DataTable.name, DataTable);
    Vue.component(Input.name, Input);
    Vue.component(InputMoney.name, InputMoney);
    Vue.component(Button.name, Button);

  }
};

export default GlobalComponents;
