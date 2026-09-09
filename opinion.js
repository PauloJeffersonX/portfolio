(() => {
  'use strict';
  const form = document.getElementById('opinion-form');
  if (!form) return;
  const fields = [...form.querySelectorAll('input, textarea')];
  const message = form.querySelector('textarea');
  const button = form.querySelector('button[type="submit"]');
  const status = document.getElementById('opinion-status');
  let ready = false;
  let sending = false;
  const announce = (state, text) => {
    status.dataset.state = state;
    status.textContent = text;
  };
  // Mantém edição, atalhos nativos e Tab; só impede a propagação ao jogo.
  fields.forEach(field => {
    ['keydown', 'keyup', 'keypress'].forEach(type => {
      field.addEventListener(type, event => event.stopPropagation());
    });
  });
  message.addEventListener('input', () => message.setCustomValidity(''));
  // Registrado antes do SDK: valida e evita navegação se o CDN falhar.
  form.addEventListener('submit', event => {
    message.setCustomValidity(message.value.trim() ? '' : 'Escreva sua opinião ou sugestão antes de enviar.');
    if (!form.reportValidity() || !ready || sending) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (!ready) announce('error', 'Não foi possível carregar o envio. Recarregue a página e tente novamente. Seu texto foi mantido.');
    }
  });
  window.formspree = window.formspree || function () {
    (window.formspree.q = window.formspree.q || []).push(arguments);
  };
  window.formspree('initForm', {
    formElement: '#opinion-form',
    formId: 'mrpgrlnw',
    useDefaultStyles: false,
    onInit: () => { ready = true; },
    onSubmit: () => announce('sending', 'Enviando sua opinião…'),
    disable: () => {
      sending = true;
      button.disabled = true;
      button.textContent = 'Enviando…';
      form.setAttribute('aria-busy', 'true');
      fields.forEach(field => { field.readOnly = true; });
    },
    enable: () => {
      sending = false;
      button.disabled = false;
      button.textContent = 'Enviar opinião';
      form.removeAttribute('aria-busy');
      fields.forEach(field => { field.readOnly = false; });
    },
    onSuccess: () => {
      form.reset();
      announce('success', 'Opinião enviada! Obrigado por contribuir com o portfólio.');
    },
    onError: () => announce('error', 'Não foi possível enviar sua opinião. Seu texto foi mantido. Tente novamente em alguns instantes.'),
    onFailure: () => announce('error', 'O envio falhou. Verifique sua conexão e tente novamente. Seu texto foi mantido.'),
    // Mensagens próprias em português, sem injetar estilos globais.
    renderSuccess: () => {},
    renderFormError: () => {},
    renderFieldErrors: () => {},
  });
})();
