var bairros = [
  'Aparecida', 'Águas Claras', 'Área Rural de Campo Largo', 'Bateias', 'Boa Vista',
  'Bom Jesus', 'Botiatuva', 'Caiva', 'Cambui', 'Campina', 'Campo do Meio',
  'Campo Largo', 'Centro', 'Cercadinho', 'Chacrinha Nossa Senhora do Rocio',
  'Colônia Antônio Rebouças', 'Colônia Balbino Cunha', 'Colônia Cristina',
  'Colônia Dom Pedro', 'Colônia Dom Pedro II', 'Colônia Mariana', 'Colônia Revier',
  'Conjunto Águas Claras', 'Conjunto Habitacional Joaquim Celestino Ferreira',
  'Conjunto Habitacional Monsenhor Francisco Gorski', 'Cristo Rei', 'Dom Rodrigo',
  'Fazendinha', 'Felpudo', 'Ferrari', 'Ferraria', 'Guabiroba', 'Itaqui',
  'Itaqui de Cima', 'Itambé', 'Itambezinho', 'Itaboa', 'Jardim Alvorada',
  'Jardim Bela Vista', 'Jardim Boa Vista', 'Jardim Busmayer', 'Jardim Carmela',
  'Jardim Céu Azul', 'Jardim das Acácias', 'Jardim das Américas', 'Jardim das Palmas',
  'Jardim das Palmeiras', 'Jardim Emília', 'Jardim Esmeralda', 'Jardim Florestal',
  'Jardim Guarany', 'Jardim Habitalar', 'Jardim Itaqui', 'Jardim Itália',
  'Jardim Iruama', 'Jardim Keli Cristina', 'Jardim Lise', 'Jardim Lorenzete',
  'Jardim Meliane', 'Jardim Melyane', 'Jardim Nossa Senhora do Perpétuo Socorro',
  'Jardim Padre José de Anchieta', 'Jardim Paraíso', 'Jardim Paraíso Mineral',
  'Jardim Rondinha', 'Jardim Santa Luzia', 'Jardim Santa Nely', 'Jardim São Vicente',
  'Jardim Serrinha', 'Jardim Social', 'Jardim Três Rios', 'Jardim Tropical', 'Lagoa',
  'Loteamento Bieda', 'Loteamento Helvidia', 'Loteamento Itaboa', 'Loteamento Leal',
  'Loteamento Miranda', 'Loteamento Ouro Verde II', 'Loteamento Santa Ana',
  'Loteamento Santa Rita', 'Loteamento Santo André', 'Loteamento São Francisco de Assis',
  'Loteamento São José', 'Loteamento São Jerônimo', 'Loteamento Vila Verde',
  'Loteamento Vista Alegre', 'Loteamento Yara', 'Miqueleto', 'Moradias Bom Jesus',
  'Nossa Senhora Aparecida', 'Nossa Senhora do Pilar', 'Nova Trento', 'Nova Trento II',
  'Núcleo Habitacional Doutor Abranches Guimarães', 'Núcleo Habitacional Mathias Batista',
  'Ouro Verde', 'Ouro Preto', 'Palmital de São Silvestre', 'Parque Bom Jesus',
  'Partênope', 'Passaúna', 'Passo Fundo', 'Popular Velha', 'Retiro', 'Retiro Grande',
  'Rivabem', 'Salgadinho', 'Santa Cruz', 'Santa Nely', 'Santa Rita', 'São Francisco',
  'São João do Povinho', 'São João I', 'São Marcos', 'São Silvestre', 'Sítio Santa Ana',
  'Timbotuva', 'Três Córregos', 'Vila Alzira', 'Vila Andreassa Miranda',
  'Vila Antônio Seguro', 'Vila Bancária', 'Vila Campesi', 'Vila Cilka',
  'Vila Conceição', 'Vila Dea', 'Vila de Lourdes', 'Vila de Lurdes', 'Vila Delurdes',
  'Vila David Antonio', 'Vila Dona Fina', 'Vila Dom Pedro', 'Vila Dom Pedro II',
  'Vila Elizabeth', 'Vila Ferrari', 'Vila Ferrari II', 'Vila Gilcy', 'Vila Glória',
  'Vila Kuster', 'Vila Mariano Torres', 'Vila Nossa Senhora do Carmo', 'Vila Nova',
  'Vila Operária', 'Vila Otto', 'Vila Pompéia', 'Vila Rivabem', 'Vila Santa Terezinha',
  'Vila São Luiz', 'Vila Solene', 'Vila Torres', 'Vila Torres I', 'Vila Verde',
  'Vila Vista Alegre', 'Zona Rural'
];

var selectBairro = document.getElementById('bairro');
for (var i = 0; i < bairros.length; i++) {
  var opcao = document.createElement('option');
  opcao.value = bairros[i];
  opcao.textContent = bairros[i];
  selectBairro.appendChild(opcao);
}

var copos = document.getElementsByName('copo');
var adicionais = document.getElementsByName('adicional');
var alerta = document.getElementById('alerta');

function pegarCopo() {
  for (var i = 0; i < copos.length; i++) {
    if (copos[i].checked) {
      return Number(copos[i].value);
    }
  }
}

function pegarLimite() {
  if (pegarCopo() == 300) {
    return 2;
  } else {
    return 4;
  }
}

function contarAdicionais() {
  var total = 0;
  for (var i = 0; i < adicionais.length; i++) {
    if (adicionais[i].checked) {
      total++;
    }
  }
  return total;
}

function calcularEntrega() {
  var bairro = selectBairro.value;
  if (bairro == '') {
    return 0;
  } else if (bairro == 'Centro') {
    return 5;
  } else {
    return 10;
  }
}

function dinheiro(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

function atualizar() {
  var preco = 14;
  if (pegarCopo() == 500) {
    preco = 20;
  }

  var valorAcai = preco;
  var escolhidos = [];
  for (var i = 0; i < adicionais.length; i++) {
    if (adicionais[i].checked) {
      valorAcai = valorAcai + Number(adicionais[i].dataset.preco);
      escolhidos.push(adicionais[i].value);
    }
  }

  var entrega = calcularEntrega();

  document.getElementById('contador').textContent = escolhidos.length + '/' + pegarLimite();
  document.getElementById('valorCopo').textContent = pegarCopo() + 'ml';
  document.getElementById('listaAdicionais').textContent = escolhidos.length > 0 ? escolhidos.join(', ') : 'nenhum';
  document.getElementById('valorAcai').textContent = dinheiro(valorAcai);
  document.getElementById('valorEntrega').textContent = dinheiro(entrega);
  document.getElementById('valorTotal').textContent = dinheiro(valorAcai + entrega);
}

for (var i = 0; i < adicionais.length; i++) {
  adicionais[i].onclick = function () {
    if (contarAdicionais() > pegarLimite()) {
      this.checked = false;
      alerta.textContent = 'Limite de ' + pegarLimite() + ' adicionais para o copo de ' + pegarCopo() + 'ml!';
    } else {
      alerta.textContent = '';
    }
    atualizar();
  };
}

for (var i = 0; i < copos.length; i++) {
  copos[i].onclick = function () {
    if (contarAdicionais() > pegarLimite()) {
      for (var j = 0; j < adicionais.length; j++) {
        adicionais[j].checked = false;
      }
      alerta.textContent = 'Os adicionais foram limpos. Limite de ' + pegarLimite() + ' para este copo.';
    } else {
      alerta.textContent = '';
    }
    atualizar();
  };
}

selectBairro.onchange = atualizar;

document.getElementById('botao').onclick = function () {
  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('telefone').value;
  var bairro = selectBairro.value;
  var mensagem = document.getElementById('mensagem');

  if (nome == '' || telefone == '' || bairro == '') {
    mensagem.style.color = 'red';
    mensagem.textContent = 'Preencha nome, telefone com DDD e bairro!';
    return;
  }

  if (telefone.length < 10) {
    mensagem.style.color = 'red';
    mensagem.textContent = 'Telefone inválido. Digite o DDD + número.';
    return;
  }

  mensagem.style.color = 'green';
  mensagem.textContent = 'Pedido confirmado, ' + nome + '!\n' +
    'Copo: ' + document.getElementById('valorCopo').textContent + '\n' +
    'Adicionais: ' + document.getElementById('listaAdicionais').textContent + '\n' +
    'Entrega: ' + document.getElementById('valorEntrega').textContent + '\n' +
    'Total: ' + document.getElementById('valorTotal').textContent;
};

atualizar();