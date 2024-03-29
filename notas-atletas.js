let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   // Função para calcular a média
   let calcularMedia = notas => {
     // Ordena as notas em ordem crescente
     notas.sort((a, b) => a - b);
   
     // Descarta a primeira e a última nota
     notas.shift();
     notas.pop();
   
     // Calcula a média
     let media = 0;
     notas.forEach(function(nota) {
       media += nota;
     })
     media /= notas.length;
   
     return media;
   };
   
   // Percorre os atletas
   atletas.forEach(function(atleta) {
     // Calcula a média do atleta
     let media = calcularMedia(atleta.notas);
   
     // Apresenta o resultado
     console.log(`
   Atleta: ${atleta.nome}
   Notas Obtidas: ${atleta.notas.join(', ')}
   Média Válida: ${media}
     `);
   })
    