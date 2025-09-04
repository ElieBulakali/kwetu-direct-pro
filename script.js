document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const cta = document.getElementById('cta');
  const orderNow = document.getElementById('orderNow');
  const startOrder = () => {
    alert('🚚 KWETU DIRECT: Dites-nous quoi livrer et où — (démo).');
  };
  if (cta) cta.addEventListener('click', startOrder);
  if (orderNow) orderNow.addEventListener('click', startOrder);

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !phone) {
        alert('Veuillez renseigner votre nom et votre téléphone.');
        return;
      }
      const payload = { name, phone, message, createdAt: new Date().toISOString() };
      console.log('Demande de contact:', payload);
      alert('Merci! Nous vous recontactons très vite. (démo)');
      form.reset();
    });
  }
});
