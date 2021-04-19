window.addEventListener("scroll", () => {
    let header = document.getElementById('header')
    header.classList.toggle("sticky", window.scrollY > 0);
  });

//   let max = 0
//   let a = [1,2,3,9.666666,5,6]
//   for(let i = 0; i<a.length; i++){
      
//     if(max<a[i]){
//         max = a[i]
        
        
//     }
//     else{
//         max = max
//     }
    
//   }
//   console.log(max)
let gender_male = document.getElementById('gender_male')
let gender_female = document.getElementById('gender_female')

gender_female.addEventListener('click',()=>{
  gender_female.classList.add('gender_color')
  gender_male.classList.remove('gender_color')
})
gender_male.addEventListener('click',()=>{
  gender_male.classList.add('gender_color')
  gender_female.classList.remove('gender_color')
})
let form = document.getElementById('form')
let hhr_min = document.getElementById('hhr_min')
let hhr_max = document.getElementById('hhr_max')
let heartbeat_max = document.getElementById('heartbeat_max')
let result = document.getElementById('result')

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log('aa')
  result.style.display = 'block'
  let age = form.age.value;
  heartbeat = 220 -age;
  heartbeat_max.innerHTML = heartbeat;
  HHR = heartbeat - 80;
  HHR_Max = HHR*0.5;
  HHR_Min = HHR*0.85;
  hhr_max.innerHTML = HHR_Max
  hhr_min.innerHTML = HHR_Min
  form.age.value = ''


})