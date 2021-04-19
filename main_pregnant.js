let form = document.getElementById('form');
let data = [{
    dataValue: 3,
    weightValue: 2
  },

  {
    dataValue: 4,
    weightValue: 4.5
  },

  {
    dataValue: 5,
    weightValue: 7.5
  },

  {
    dataValue: 6,
    weightValue: 12
  },

  {
    dataValue: 7,
    weightValue: 21
  },

  {
    dataValue: 8,
    weightValue: 21.3
  },

  {
    dataValue: 9,
    weightValue: 21.4
  },
]


let select = document.getElementById('select')
let caculator_result = document.getElementById('caculator_result')
let container_recommend = document.getElementById('container_recommend')
form.onsubmit = (e) => {
  e.preventDefault();
  let weight = form.weight.value;
  
  document.getElementById('result_text').innerHTML = 'Trong 11 tuần đầu tiên, tức 3 tháng đầu thai kỳ, cân nặng của Mom không ổn định, có thể tăng nhưng không nhiều do tác động của ốm nghén kéo dài. Từ tuần thứ 12 của thai kỳ, cân nặng sẽ lên đều.'
  
caculator_result.style.display = 'block';
container_recommend.style.display = 'none'
document.getElementById('weight_span').innerHTML = Number(weight) + Number(data[0].weightValue)




}

function getValueSelected(){
  let valueSelected = select.value;
 for(let i = 0 ;i<data.length;i++){
   if(valueSelected == data[i].dataValue){
   document.getElementById('weight_span').innerHTML= Number(data[i].weightValue)+Number(document.getElementById("weight").value)
   }
 }
}