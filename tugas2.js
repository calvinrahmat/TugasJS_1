const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69
let total = mtk + bahasaIndonesia + bahasaInggris + ipa
let average = total / 4

if( mtk == null || bahasaIndonesia == null || bahasaInggris == null || ipa == null)
{
    console.log("harap  isi nilai dengan lengkap !")
}else{

console.log(average)
if (average >= 90 && average <=100)
{
console.log("Grade = A")
}else if(average >= 80 && average <= 90)
{
    console.log("Grade = B")
}else if (average >= 70 && average <= 79 )
{
    console.log("Grade = C")
}else if (average >= 60 && average <= 69){
    console.log("Grade = D")
}else if(average >=0 && average <= 59){
    console.log("Grade = E")
}
}