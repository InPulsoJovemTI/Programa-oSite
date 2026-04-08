function trocarTela(tela) {
  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('active');
  });

  document.getElementById(tela).classList.add('active');
}

function entrar() {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!email || !senha) {
    alert('Por favor, preencha email e senha.');
    return;
  }

  // Aqui você pode adicionar validação real ou login no backend

  // Se passar, redireciona para a página de notícias
  window.location.href = 'noticias.html';
}