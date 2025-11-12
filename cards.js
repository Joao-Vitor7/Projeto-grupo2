function fechar_cartao() {
    document.getElementById('cartao').style.display = 'none';

}

//Norte

function card1() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Ilha de Marajó - Luxo';
    document.getElementById('cartao_texto').innerHTML = '💰 Valor Sugerido: A partir de R$ 7.000 por pessoa.✈️ Aéreo: Passagens aéreas de ida e volta para Belém (BEL) - Aeroporto Internacional Val-de-Cans (custo estimado incluso no valor total).🏨 Hospedagem (6 noites): 3 Noites em Belém: Hotel Boutique de luxo, 3 Noites na Ilha do Marajó: Pousada de Charme.🚌 Transfer/Transporte: Traslados Privativos em Belém (Aeroporto/Hotel), Passagem em Catamarã/Ferry Confort (Belém ↔ Marajó)Traslados na Ilha (porto/pousada e passeios).🎟️ Roteiro e Diferenciais Inclusos: Belém: Visita guiada ao Mercado Ver-o-Peso, Estação das Docas, e outros pontos históricos/culturais, Marajó: Passeios com foco na cultura marajoara, fazendas de búfalos, praias e cerâmica.';
    document.getElementById('imagem').innerHTML = '';
}