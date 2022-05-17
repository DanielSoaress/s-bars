import Vue from 'vue';

const $notify = (type, message, timeout) => {
  return Vue.prototype.$notify({ type: type, text: message, duration: timeout });
};

const notify = (type, message = null, timeout = 5000) => {
  if (message) {
    switch (type) {
      case 'success':
        $notify('success', message, timeout);
        break;
      case 'error':
        $notify('danger', message, timeout);
        break;
      case 'info':
        $notify('info', message, timeout);
        break;
      case 'warn':
        $notify('warn', message, timeout);
        break;
      default:
        break;
    }
  }
};

export default notify;
