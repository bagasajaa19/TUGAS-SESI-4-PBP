let studentScores = [
    {name : "Andi",score : 90},
    {name : "Rudi",score : 80},
    {name : "Dira",score : 100},
];
let nilaiTertinggi = studentScores.reduce((max, student) =>
    student.score > max.score ? student : max
);
console.log(`Siswa dengan nilai tertinggi adalah ${nilaiTertinggi.name} dengan nilai ${nilaiTertinggi.score}`);