# Avaliação de Ginástica Artística

Esta aplicação foi criada para calcular a média das notas dos atletas a partir de uma competição de ginástica artística.

## Sobre o Projeto

Em uma determinada competição de ginástica artística, vários atletas realizam apresentações para uma banca composta por cinco jurados. Cada jurado é responsável por avaliar um critério em específico, sendo eles o tempo de duração da apresentação, originalidade da coreografia, postura do atleta, dificuldade das acrobacias e sincronismo.

A competição em questão possui a seguinte regra de avaliação:

- Cada jurado pode fornecer uma nota de um (1) a dez (10);
- A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.

O organizador da competição contratou a nossa equipe para criar uma aplicação capaz de receber o nome e notas dos atletas e realizar o devido cálculo. Foi então criada uma solução utilizando a linguagem JavaScript.

## Especificações

Foi criada uma função capaz de receber uma matriz de objetos contendo o nome do atleta e as cinco notas atribuídas. A função realiza o cálculo da média das notas sem considerar a maior e menor nota do atleta. Por fim, apresenta ao usuário o nome de cada atleta, seguido das notas e da média calculada.

Utilize a seguinte entrada:

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

A saída deverá ser:

Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 8.766666666666666

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 8.333333333333334

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 8.166666666666666

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média a: 9.66666666666666

## Código-fonte

O código-fonte deste projeto pode ser encontrado no seguinte repositório: https://github.com/JosueRocha26/notas-atletas

## Licença

Este projeto está licenciado sob a licença MIT. Para obter mais informações, consulte o arquivo de licença.

https://github.com/JosueRocha26/notas-atletas/blob/main/LICENCE

## Autor

Josue Rocha Sampaio de Alencar

