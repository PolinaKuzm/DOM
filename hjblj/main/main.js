/*№1⊗
Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
*/
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
//     elem2.textContent+= elem.value;
// });

/*
№2⊗
Дано несколько инпутов, абзац и кнопка.
По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
*/
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let botton = document.querySelector('#button');
// button.addEventListener('click', ()  => {
// console.log(elem1.value);
// console.log(elem2.value);
// console.log(elem3.value);
// elem4.textContent = (Number(elem1.value)+Number(elem2.value)+Number(elem3.value));
// }); 

/*
№3
Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
*/
// let elem = document.querySelector('#num');
// elem.addEventListener('blur', () => {
//     let sum=0;
//     let str =elem.value;
//     let arr = str.split('');
//    for(let i=0; i<arr.length; i++){
//     sum+=+arr[i];
//    }
//    console.log(sum)
// });

/*
№4
Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел
(сумма делить на количество).
*/
// let elem = document.querySelector('#num');
// elem.addEventListener('blur', () => {
//     let sum=0;
//     let str =elem.value;
//     let arr = str.split(', ');
//     for(let i=0; i<arr.length; i++){
//         sum=+parseInt(arr[i]);
//     }
//     let res = sum/ arr.length;
//     console.log(res)
// });

/*
№5
Даны 4 инпута. В первый инпут вводится ФИО через пробел. 
По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
*/
// let elem = document.querySelector('#elem1');
// let name = document.querySelectorAll('#elem');
// elem.addEventListener('blur', () => {
//      let arr = elem.value.split(' ');
//      for(let i=0, j = 0; i<arr.length, j < name.length; i++, j++){
//         name[j].value = arr[i];
// }
// });

/*
№6
Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы.
Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
*/
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', () => {
//     let arr = elem.value.split(' ');
//     for(let i=0; i<arr.length; i++){
//             arr[i]=arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// elem.value = arr.join(' ');
// });

/*
№7
Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
*/
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', () => {
//     let num = 0;
//     let arr = elem.value.split(' ');
//     for(let i=0; i<arr.length; i++){
//         res= num++;
// }
// console.log(res)
// });      

/*
№8
Дан инпут. В него вводится дата в формате 31.12.2016.
По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
*/
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', () => {
//     let arr = elem.value.split('.');
//     arr2 = arr.reverse();
//     elem.value = arr2.join('-');
// }); 

/*
№9
Дан инпут. В него вводится слово.
По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
*/
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', () => {
//     let arr = elem.value.split('');
//     let arr2 = elem.value.split('').reverse();
//     for (let i = 0; i < arr.length; i++) {
//         res = arr[i] !== arr2[i]? 'false': 'true';
//     }
//     console.log(res);
// });   

/*
№10
Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
*/
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', () => {
//     let arr = elem.value.split('');
//     for (let i = 0; i < arr.length; i++) {
//         res = arr[i] === '3'? 'содержит 3': 'не содержит 3';
//     }
//     console.log(res); 
// });

/*
№11
Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
*/
// let elems_input_class = document.querySelectorAll('.elem');
// let button = document.querySelector('#button');
// let count=1;
// button.addEventListener('click', () => {
//     for (let elem of elems_input_class){
//           elem.textContent+= count;
//           count+=1;
// }
// });

/*
№12
Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
*/
// let elem = document.getElementsByTagName('a');
// function f() {
//   for (var i = 0; i < elem.length; i++) {
//     elem[i].innerHTML = elem[i].innerHTML + '(' +elem[i].href+')';
//   }
//  }
//  f();

/*
№13
Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
*/
// let a_ssylk=document.querySelectorAll('a');
// for (let elem of a_ssylk){
//     if(elem.href.includes('http://')){
//         console.log(elem.innerHTML= elem.href + ' &rarr;');
//     }
// }
/*
№14
Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
*/
// let elems_class_p  = document.querySelectorAll('.elem');
// for (let elem of elems_class_p){
//     elem.addEventListener('click', function(){
//         elem.textContent= Number(elem.textContent) **2;
//     })
// }

/*
№15
Дан инпут. В него вводится дата в формате 31.12.2016.
По потери фокуса узнайте день недели (словом), который приходится на эту дату.
*/
// task 11
// let elem_input_id  = document.querySelector('#elem');
// let week = [
//       'Вс',
//       'Пн',
//       'Вт',
//       'Ср',
//       'Чт',
//       'Пт',
//       'Сб'
//     ];
// elem_input_id.addEventListener('blur', function(){
//     let data = elem.value.split('.').reverse().join(',');
//     let day = new Date(data).getDay();
//     elem.value = week[day]
// });

/*
№16
Дан инпут.
Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута.
Сделайте так, чтобы это значение не могло стать меньше нуля.
*/
// let elem_input_id = document.querySelector('#elem');
// let button1 = document.querySelector("#button1");
// let  button2 = document.querySelector("#button2");
// button1.addEventListener('click', function(){
//      elem_input_id.value = +elem_input_id.value+1;
// })
// button2.addEventListener('click', function(){
//     if(elem_input_id.value>0) elem_input_id.value = +elem_input_id.value-1;
// });

/*
№17
Дан инпут. Даны абзацы.
Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
*/
// let elem_input_id = document.querySelector('#elem');
// let elems_p_class = document.querySelectorAll('.elem1');
//   for (let elem of elems_p_class){
//       elem.addEventListener('click', function(){
//           elem_input_id.value = +elem_input_id.value+1;
//   });
//   };

/*
№18
На странице есть дивы.
В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов.
И добавьте троеточие в конец обрезанного текста
*/
// let divs = document.querySelectorAll("div");
// for(let elem of divs){
// if(elem.textContent.length>10){
// elem.textContent=elem.textContent.slice(0, 10)+'...'
// };
// };

/*
№19
Дан инпут и кнопка.
По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
*/
// let button= document.querySelector("#button");
// let elem_input_id = document.querySelector('#elem');
// let sym='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// let str=''
// button.addEventListener('click', () =>{
//     for(let i = 0; i < 8; i++){
//         str += sym.charAt(Math.floor(Math.random() * sym.length));
//         elem.value = str;
// };
// });
/*

№20
Дан инпут и кнопка.
Пользователь вводит в инпут какую-то строку.
По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
*/
// let button= document.querySelector("#button");
// let elem_input_id = document.querySelector('#input');
// let k, temp;
// button.addEventListener('click', function(){
//     let arr=elem_input_id.value.split('');
// 	for(let i = arr.length - 1; i > 0; i--){ 
// 		k = Math.floor(Math.random()*(i + 1));
// 		temp = arr[k];
// 		arr[k] = arr[i];
// 		arr[i] = temp;
// 	}
//     elem_input_id.value=arr.join('')
// })

/*
№21
Дан инпут, кнопка и абзац.
В инпут вводится температура в градусах Фаренгейта.
По клику на кнопку выведите в абзац температуру в градусах Цельсия.
*/
// let but= document.querySelector("#button");
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let elem1_p_id=document.querySelector('#elem1_p');
// but.addEventListener('click', function(){
//     elem1_p_id.textContent=(Number(elem1_input_id.value)-32)*5/9;
// })
/*
№22
Дан инпут, кнопка и абзац.
В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
*/
// let button= document.querySelector("#button");
// let elem_id = document.querySelector('#elem');
// let elem_p_id=document.querySelector('#elem_p');
// button.addEventListener('click', () => {
//     let F=1;
// for(let i=1; i<=Number(elem.value); i++){
//     F*=i;
// }
// elem_p.textContent=F;
// });

/*
№23
Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения.
По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
*/
// let elem_input_id = document.querySelector('#elem');
// let elem2_input_id = document.querySelector('#elem');
// let elem3_input_id = document.querySelector('#elem');
// let button= document.querySelector("#button");
// let elem_p_id=document.querySelector('#elem_p');
// button.addEventListener('click', function(){
// let D=Number(elem2_input_id.value)**2-4*+elem_input_id.value*+elem3_input_id.value;
// let x1, x2;
// if(D>0){
//     elem_p_id.innerHTML=`${(-Number(elem2_input_id.value)-Math.sqrt(D))/(2*+elem_input_id.value)}-корень1 
//      ${(-Number(elem2_input_id.value)+Math.sqrt(D))/(2*+elem_input_id.value)}-корень2`
// }else if(D==0){
//         elem_p_id.innerHTML=`${-Number(elem2_input_id.value)/(2*+elem_input_id.value)}-корень`
//      }else{
//         elem_p_id.innerHTML="-0 корней"
//     }
// })