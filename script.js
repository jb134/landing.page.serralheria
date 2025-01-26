// script.js

console.log("Olá, visitante!");

// Função para mostrar uma mensagem de boas-vindas
function mostrarBoasVindas() {
  alert("Bem-vindo ao site da JB Serralheria!");
}

// Chamar a função quando a página for carregada
window.onload = mostrarBoasVindas;

// Função para mostrar um popup com informações de contato
function mostrarContato() {
  alert("Entre em contato conosco:\nTelefone: +55(62)985412296\nE-mail: jb.serralheria@gmail.com");
}

// Adicionar um evento de clique ao botão de contato
document.getElementById("botao-contato").addEventListener("click", mostrarContato);


const whatsappBtn = document.querySelector('.whatsapp-btn');

whatsappBtn.addEventListener('click', () => {
  const mensagem = 'Olá! Como posso ajudar hoje?';
  const numero = '985412296'; // seu número de WhatsApp
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
});
