export function exibirMensagemToast(text, icon) {
  
  Toastify({
    text: text,
    duration: 5000,
    gravity: 'top',
    position: 'right',
    close: true,
    avatar: icon,
    style: {
      background: 'var(--background-tertiary)',
      borderRadius: '10px',
      alignItems: 'center',
      display: 'flex',
      gap: '5px',
      maxWidth: '50%',
      minHeight: '4rem',
    },
    ariaLive: 'polite',
    stopOnFocus: true,
    onClick: function () {},
  }).showToast();
}
