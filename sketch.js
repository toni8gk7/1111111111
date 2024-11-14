let campoIdade;
let campoHalloween;
let campoAssassinato;
let campoPalhaço;
let campoTerrorPsicologico;
let campoSuspense;

function setup() {
  createCanvas(1400, 400);
 
  // Criando título e campo de idade
  createElement("h1", "Recomendador de Filmes de Terror");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
 
  // Criando checkboxes para preferências
  campoHalloween = createCheckbox("Gosta de Halloween?");
  campoAssassinato = createCheckbox("Gosta de Assassinato?");
  campoPalhaço = createCheckbox("Gosta de Palhaço?");
  campoTerrorPsicologico = createCheckbox("Gosta de Terror Psicológico?");
  campoSuspense = createCheckbox("Gosta de Suspense?");
 
  // Posicionando os campos na tela
  campoIdade.position(20, 100);
  campoHalloween.position(20, 140);
  campoAssassinato.position(20, 170);
  campoPalhaço.position(20, 200);
  campoTerrorPsicologico.position(20, 230);
  campoSuspense.position(20, 260);
}

function draw() {
  background(255); // Cor de fundo branca
 
  // Pegando o valor da idade e dos checkboxes
  let idade = int(campoIdade.value());
  let gostadeHalloween = campoHalloween.checked();
  let gostadeAssassinato = campoAssassinato.checked();
  let gostadePalhaço = campoPalhaço.checked();
  let gostadeTerrorPsicologico = campoTerrorPsicologico.checked();
  let gostadeSuspense = campoSuspense.checked();
 
  // Gerando a recomendação
  let recomendacao = geraRecomendacao(idade, gostadeHalloween, gostadeAssassinato, gostadePalhaço, gostadeTerrorPsicologico, gostadeSuspense);
 
  // Exibindo a recomendação
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

// Função para gerar recomendação baseada em idade e preferências
function geraRecomendacao(idade, gostadeHalloween, gostadeAssassinato, gostadePalhaço, gostadeTerrorPsicologico, gostadeSuspense) {
  if (idade >= 18) {
    // Para maiores de 18 anos
    return "It - A Coisa"; // Exemplo de recomendação para maiores de 18
  } else if (idade >= 16) {
    if (gostadeHalloween || gostadeAssassinato) {
      return "Chucky";
    } else {
      return "Ladrões de Bicicleta";
    }
  } else if (idade >= 14) {
    if (gostadePalhaço) {
      return "It - A Coisa, Terrifier";
    } else {
      return "Depois da Chuva";
    }
  } else {
    // Menores de 14 anos
    if (gostadeTerrorPsicologico) {
      return "A Viagem de Chihiro"; // Exemplo de filme com elementos de terror psicológico
    } else {
      return "O Feitiço do Tempo"; // Exemplo de filme mais leve
    }
  }
}