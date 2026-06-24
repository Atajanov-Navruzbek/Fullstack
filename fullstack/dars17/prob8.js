// 8. Takrorlanmas elementlar
// Topshiriq:
// Sonlar massivi qabul qilib, har bir element faqat bir marta uchraydigan yangi massiv
// qaytaruvchi noyob funksiyasini yozing. Tartib saqlanishi kerak.
// Misollar:
// noyob([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
// noyob([5, 5, 5]) // [5]
// noyob([1, 2, 3]) // [1, 2, 3]

function dontRepeat(arr){

const arr1 = new Set(arr)
    console.log(arr1)
};
dontRepeat([1, 2, 2, 3, 3, 3])
dontRepeat([1, 2, 3])
dontRepeat([5, 5, 5])


