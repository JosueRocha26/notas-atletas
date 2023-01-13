# Assessment of Artistic Gymnastics

This application was created to calculate the average of the athletes' grades from an artistic gymnastics competition.

## About the project

In a certain artistic gymnastics competition, several athletes perform presentations to a panel composed of five judges. Each juror is responsible for evaluating a specific criterion, namely the duration of the presentation, originality of the choreography, athlete's posture, difficulty of the acrobatics and timing.

The competition in question has the following evaluation rule:

- Each judge can provide a score from one (1) to ten (10);
- The average is calculated based on the three middle grades, disregarding the highest and lowest grade.

The competition organizer hired our team to create an application capable of receiving the name and scores of the athletes and performing the appropriate calculation. A solution was then created using the JavaScript language.

## Specifications

A function capable of receiving an array of objects containing the athlete's name and the five assigned scores was created. The function calculates the average of the scores without considering the highest and lowest score of the athlete. Finally, it presents the user with the name of each athlete, followed by the grades and calculated average.

Use the following input:

let athletes = [
 {
   name: "Cesar Abascal",
   notes: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   name: "Fernando Puntel",
   notes: [8, 10, 10, 7, 9.33]
 },
 {
   name: "Daiane Jelinsky",
   notes: [7, 10, 9.5, 9.5, 8]
 },
 {
   name: "Bruno Castro",
   grades: [10, 10, 10, 9, 9.5]
 }
];

The output should be:

Athlete: Cesar Abascal
Grades Obtained: 10,10,7,88,8,42,9,34
Valid Average: 8.766666666666666

Athlete: Fernando Puntel
Grades Obtained: 10,10,7,8,9.33
Valid Average: 8.333333333333334

Athlete: Daiane Jelinsky
Grades Obtained: 10,7,8,9.5,9.5
Valid Average: 8.166666666666666

Athlete: Bruno Castro
Grades Obtained: 10,10,10,9,9.5
Average to: 9.66666666666666

## Source code

The source code for this project can be found in the following repository: https://github.com/JosueRocha26/notas-atletas

## License

This project is licensed under the MIT license. For more information, see the license file.

https://github.com/JosueRocha26/notas-atletas/blob/main/LICENCE

## Author

Josue Rocha Sampaio de Alencar

josuesampaio.alencar@gmail.com

