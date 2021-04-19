let search = document.querySelector('.search');
let p_search = document.querySelector('#search');

function showSearch() {
    search.style.display = 'block';
    p_search.style.color = '#2d87f3';


}

function closesearch() {
    search.style.display = 'none';
    p_search.style.color = 'initial';
}


let email = document.getElementById('email')


let underWeight_male_image = document.getElementById('underweight-male-image');
let healthy_male_image = document.getElementById('healthy-male-image');
let overWeight_male_image = document.getElementById('overweight-male-image');
let obeseType1_male_image = document.getElementById('obesetype1-male-image');
let obeseType2_male_image = document.getElementById('obesetype2-male-image');
let underWeight_text = document.getElementById('underweight-text');
let healthy_text = document.getElementById('healthy-text');
let overWeight_text = document.getElementById('overweight-text');
let obeseType1_text = document.getElementById('obesetype1-text');
let obeseType2_text = document.getElementById('obesetype2-text');
let display_text = document.getElementsByClassName('display_text');
let container_text = document.getElementById('container_text')
let question = document.getElementById('question')

let information = document.getElementById('information')

let male = document.getElementById('male')
let female = document.getElementById('female')
let span_bmi = document.getElementById('span_bmi')

let how_solution = document.getElementById('how_solution')
let status1 = document.getElementById('status1')
let risk = document.getElementById('risk')
let recommend= document.getElementById('recommend')
let solution_underweight = document.getElementById('solution_underweight')
let status_underweight = document.getElementById('status_underweight')
let risk_underweight = document.getElementById('risk_underweight')
let recommend_underweight = document.getElementById('recommend_underweight')

let solution_healthy = document.getElementById('solution_healthy')
let status_healthy = document.getElementById('status_healthy')
let risk_healthy = document.getElementById('risk_healthy')
let recommend_healthy = document.getElementById('recommend_healthy')

let solution_overweight = document.getElementById('solution_overweight')
let status_overweight = document.getElementById('status_overweight')
let risk_overweight = document.getElementById('risk_overweight')
let recommend_overweight = document.getElementById('recommend_overweight')

let solution_obese1 = document.getElementById('solution_obese1')
let status_obese1 = document.getElementById('status_obese1')
let risk_obese1 = document.getElementById('risk_obese1')
let recommend_obese1 = document.getElementById('recommend_obese1')

let solution_obese2 = document.getElementById('solution_obese2')
let status_obese2 = document.getElementById('status_obese2')
let risk_obese2 = document.getElementById('risk_obese2')
let recommend_obese2 = document.getElementById('recommend_obese2')

let status_text = document.getElementById('status_text')
let risk_text = document.getElementById('risk_text')
let recommend_text = document.getElementById('recommend_text')

let how = document.getElementById('how')
let container = document.getElementById('container')
status1.addEventListener('click',() => {
   status_underweight.style.display = 'block'
   risk_underweight.style.display = 'none'
   recommend_underweight.style.display = 'none'

   status_healthy.style.display = 'block'
   risk_healthy.style.display = 'none'
   recommend_healthy.style.display = 'none'
  
   status_overweight.style.display = 'block'
   risk_overweight.style.display = 'none'
   recommend_overweight.style.display = 'none'

   status_obese1.style.display = 'block'
   risk_obese1.style.display = 'none'
   recommend_obese1.style.display = 'none'

   status_obese2.style.display = 'block'
   risk_obese2.style.display = 'none'
   recommend_obese2.style.display = 'none'

   status1.classList.add('solution_color')
   risk.classList.remove('solution_color')
   recommend.classList.remove('solution_color')

   status_text.classList.add('solution_text_color')
   risk_text.classList.remove('solution_text_color')
   recommend_text.classList.remove('solution_text_color')
})

risk.addEventListener('click',() => {
    status_underweight.style.display = 'none'
    risk_underweight.style.display = 'block'
    recommend_underweight.style.display = 'none'

    status_healthy.style.display = 'none'
    risk_healthy.style.display = 'block'
    recommend_healthy.style.display = 'none'

    status_overweight.style.display = 'none'
    risk_overweight.style.display = 'block'
    recommend_overweight.style.display = 'none'

    status_obese1.style.display = 'none'
    risk_obese1.style.display = 'block'
    recommend_obese1.style.display = 'none'

    status_obese2.style.display = 'none'
    risk_obese2.style.display = 'block'
    recommend_obese2.style.display = 'none'

    status1.classList.remove('solution_color')
    risk.classList.add('solution_color')
    recommend.classList.remove('solution_color')

    status_text.classList.remove('solution_text_color')
    risk_text.classList.add('solution_text_color')
    recommend_text.classList.remove('solution_text_color')


 })
recommend.addEventListener('click',() => {
    status_underweight.style.display = 'none'
    risk_underweight.style.display = 'none'
    recommend_underweight.style.display = 'block'

    status_healthy.style.display = 'none'
    risk_healthy.style.display = 'none'
    recommend_healthy.style.display = 'block'

    status_overweight.style.display = 'none'
    risk_overweight.style.display = 'none'
    recommend_overweight.style.display = 'block'

    status_obese1.style.display = 'none'
    risk_obese1.style.display = 'none'
    recommend_obese1.style.display = 'block'

    status_obese2.style.display = 'none'
    risk_obese2.style.display = 'none'
    recommend_obese2.style.display = 'block'

    status1.classList.remove('solution_color')
    risk.classList.remove('solution_color')
    recommend.classList.add('solution_color')

    status_text.classList.remove('solution_text_color')
    risk_text.classList.remove('solution_text_color')
    recommend_text.classList.add('solution_text_color')
 })

let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')
let icon3 = document.getElementById('icon3')
let icon4 = document.getElementById('icon4')

let box_icon1 = document.getElementById('box_icon1')
let box_icon2 = document.getElementById('box_icon2')
let box_icon3 = document.getElementById('box_icon3')
let box_icon4 = document.getElementById('box_icon4')

let text_icon1 = document.getElementById('text_icon1')
let text_icon2 = document.getElementById('text_icon2')
let text_icon3 = document.getElementById('text_icon3')
let text_icon4 = document.getElementById('text_icon4')


icon1.addEventListener('click' ,()=>{
   if( box_icon1.style.display === 'none'){
    box_icon1.style.display = 'block'
    text_icon1.style.fontWeight = 'bold'
    icon1.setAttribute('class', 'fal fa-minus')
}  
else{
    box_icon1.style.display = 'none'
    text_icon1.style.fontWeight = '300'
    icon1.setAttribute('class', 'fal fa-plus')
}
}
)

icon2.addEventListener('click' ,()=>{
    if( box_icon2.style.display === 'none'){
     box_icon2.style.display = 'block'
     text_icon2.style.fontWeight = 'bold'
     icon2.setAttribute('class', 'fal fa-minus')
 }  
 else{
     box_icon2.style.display = 'none'
     text_icon2.style.fontWeight = '300'
     icon2.setAttribute('class', 'fal fa-plus')
 }
 }
 )

 icon3.addEventListener('click' ,()=>{
    if( box_icon3.style.display === 'none'){
     box_icon3.style.display = 'block'
     text_icon3.style.fontWeight = 'bold'
     icon3.setAttribute('class', 'fal fa-minus')
 }  
 else{
     box_icon3.style.display = 'none'
     text_icon3.style.fontWeight = '300'
     icon3.setAttribute('class', 'fal fa-plus')
 }
 }
 )

 icon4.addEventListener('click' ,()=>{
    if( box_icon4.style.display === 'none'){
     box_icon4.style.display = 'block'
     text_icon4.style.fontWeight = 'bold'
     icon4.setAttribute('class', 'fal fa-minus')
 }  
 else{
     box_icon4.style.display = 'none'
     text_icon4.style.fontWeight = '300'
     icon4.setAttribute('class', 'fal fa-plus')
 }
 }
 )

 let question_underweight = document.getElementById('question_underweight')
 let question_healthy = document.getElementById('question_healthy')
 let question_overweight = document.getElementById('question_overweight')
 let question_obese1 = document.getElementById('question_obese1')
 let question_obese2 = document.getElementById('question_obese2')

let text_content_icon1 = document.getElementById('text_content_icon1')
let text_content_icon2 = document.getElementById('text_content_icon2')
let text_content_icon3 = document.getElementById('text_content_icon3')
let text_content_icon4 = document.getElementById('text_content_icon4')


function checkMale() {
   
    male.classList.add('color')
    female.classList.remove('color')
   
    select.onsubmit = (e) => {
        e.preventDefault()
        console.log('aaaaa')
        container.style.display = 'block'
       how.style.display = 'block'
       how_solution.style.display = 'block'
        let age = select.age.value
        let height = select.height.value
        let weight = select.weight.value
        information.style.display = 'none'
        status1.classList.add('solution_color')
        status_text.classList.add('solution_text_color')
        select.age.value = ''
        select.height.value = ''
        select.weight.value = ''
        email.style.display = 'block'
        bmi = weight / ((height * 0.01) * (height * 0.01))
        // console.log(Math.floor(bmi))
    
        container_text.style.display = 'block';
        question_underweight.style.display = 'block'
       
         span_bmi.innerHTML = Math.floor(bmi)
        question.style.display = 'block'
        
      
         if (bmi < 18.5) {
            underWeight_male_image.src = 'image/underweight-male-blue.png';
            healthy_male_image.src = 'image/healthy-male-gray.png';
            overWeight_male_image.src = 'image/overweight-male-gray.png';
            obeseType1_male_image.src = 'image/obese-type1-male-gray.png';
            obeseType2_male_image.src = 'image/obese-type2-male-gray.png';
            underWeight_text.style.fontWeight = 'bold';
            healthy_text.style.display = 'block';
            overWeight_text.style.display = 'block';
            obeseType1_text.style.display = 'block';
            obeseType2_text.style.display = 'block';
            underWeight_text.style.display = 'block';
            healthy_text.style.fontWeight = '200';
            overWeight_text.style.fontWeight = '200';
            obeseType1_text.style.fontWeight = '200';
            obeseType2_text.style.fontWeight = '200';
          
            solution_underweight.style.display = "block";
            solution_healthy.style.display = "none";
            solution_overweight.style.display = "none";
            solution_obese1.style.display = "none";
            solution_obese2.style.display = "none";

            text_icon1.innerHTML =
              "Làm thế nào để tôi có thể tăng cân một cách an toàn?";
            text_icon2.innerHTML =
              "Nguyên nhân nào gây ra tình trạng thiếu cân hay giảm cân đột ngột?";
            text_icon3.innerHTML = "Bị thiếu cân có thể có những rủi ro gì?";
            text_icon4.innerHTML = "Những hạn chế của BMI";

            text_content_icon1.innerHTML =
              "Thay đổi chế độ ăn uống lành mạnh, cân bằng, cung cấp đủ lượng chất dinh dưỡng và calo có thể giúp bạn đạt được mức cân nặng hợp lý. Hãy đặt mục tiêu tăng cân dần dần. Ăn đồ ăn vặt có thể làm tăng cân nhưng lại không cung cấp dinh dưỡng cho cơ thể nếu bạn chọn không đúng loại thực phẩm. Một số điểm quan trọng của chế độ ăn uống giúp tăng cân an toàn thường gồm: - Chia nhỏ bữa ăn thành nhiều lần (có thể ăn nhiều bữa nhỏ trong ngày) - Ăn thực phẩm giàu chất dinh dưỡng như ngũ cốc nguyên hạt, rau, trái cây, các sản phẩm từ sữa, hạt, quả hạch và protein. - Ăn vặt bằng các món chứa nhiều protein và carbohydrate tốt, bạn có thể cân nhắc lựa chọn các loại hạt hỗn hợp, thanh protein, bánh quy bơ đậu phộng hay bánh hạnh nhân. - Bắt đầu tập luyện thể thao vì bạn có thể tăng cân từ từ bằng cách tăng lượng cơ bắp cho cơ thể.";
            text_content_icon2.innerHTML =
              "Có nhiều nguyên nhân khiến một người bị thiếu cân. Một số người có chỉ số BMI tự nhiên thấp hơn so với những người khác là do di truyền trong gia đình. Khi được sinh ra, họ có thể đã có khả năng trao đổi chất cao hoặc ít thèm ăn. Các vận động viên và những người tham gia vào các hoạt động thể chất ở mức độ cao có thể đốt cháy nhiều calo hơn những người ít hoạt động. Việc mắc một số bệnh có thể gây buồn nôn, tiêu chảy và nôn mửa khiến bạn khó tăng cân. Còn các tình trạng khác như ung thư, tiểu đường, rối loạn tuyến giáp có thể làm giảm cảm giác thèm ăn. Sức khỏe tâm thần kém như trầm cảm, rối loạn ăn uống (chứng ăn vô độ và chứng thiếu máu) sẽ ảnh hưởng đến thói quen ăn uống lành mạnh.";
            text_content_icon3.innerHTML =
              "Có nhiều rủi ro về sức khoẻ liên quan tới tình trạng thiếu cân nặng. Nếu bạn bị thiếu cân nặng, bạn có thể ăn không đủ các loại thực phẩm lành mạnh chứa những thành phần dinh dưỡng cần thiết cho cơ thể, dẫn đến tình trạng suy dinh dưỡng. Suy dinh dưỡng thường có thể dẫn đến thiếu máu hoặc thiếu hụt một số loại vitamin. Các triệu chứng của suy dinh dưỡng bao gồm chóng mặt, cạn kiệt năng lượng, cảm thấy ốm yếu thường xuyên, mắc các vấn đề về da, tóc và răng. Thiếu cân có thể làm tăng nguy cơ loãng xương, do đó xương dễ bị giòn và dễ gãy hơn. Phụ nữ bị thiếu cân có thể có kinh nguyệt không đều và bị vô sinh. Những người trẻ thiếu cân có thể bị chậm hoặc suy giảm tốc độ tăng trưởng do thiếu chất dinh dưỡng và không nạp đủ calo.";
            text_content_icon4.innerHTML =
              '- Chỉ số BMI có thể cho bạn biết khi thừa cân quá nhiều nhưng không xác định được bạn có nhiều mỡ thừa hay không. - Chỉ số BMI không thể phân biệt được sự khác biệt giữa mỡ thừa, cơ hay xương. - Chỉ số BMI của người trưởng thành không tính đến tuổi, giới tính hoặc khối lượng cơ. Điều này có nghĩa là: - Người lớn và vận động viên có nhiều cơ bắp có thể bị phân loại là "thừa cân" hoặc "béo phì" mặc dù lượng mỡ trong cơ thể của họ thấp. - Người lớn bị mất đi cơ bắp khi lớn tuổi có thể được đánh giá là "cân nặng hợp lý" mặc dù có thể họ đang mang mỡ thừa. - Mang thai cũng sẽ ảnh hưởng đến kết quả BMI của phụ nữ. Chỉ số BMI của bạn sẽ tăng lên khi cân nặng của bạn tăng lên. Nên sử dụng số đo cân nặng trước khi mang thai để tính chỉ số BMI. Ngoài những hạn chế này, đo chỉ số BMI là một cách tương đối đơn giản và thuận tiện để đánh giá cân nặng của một người.';
            
            
           
          

        } else if (bmi < 24.9) {
            underWeight_male_image.src = 'image/underweight-male-gray.png'
            healthy_male_image.src = 'image/healthy-male-blue.png'
            overWeight_male_image.src = 'image/overweight-male-gray.png'
            obeseType1_male_image.src = 'image/obese-type1-male-gray.png'
            obeseType2_male_image.src = 'image/obese-type2-male-gray.png'
            healthy_text.style.fontWeight = 'bold'
            healthy_text.style.display = 'block'
            overWeight_text.style.display = 'block'
            obeseType1_text.style.display = 'block'
            obeseType2_text.style.display = 'block'
            underWeight_text.style.display = 'block'
            underWeight_text.style.fontWeight = '200'
            overWeight_text.style.fontWeight = '200'
            obeseType1_text.style.fontWeight = '200'
            obeseType2_text.style.fontWeight = '200'

            solution_underweight.style.display ='none'
            solution_healthy.style.display = 'block'
            solution_overweight.style.display = 'none'
            solution_obese1.style.display = 'none'
            solution_obese2.style.display = 'none'

            text_icon1.innerHTML = 'Làm thế nào để tôi có thể duy trì cân nặng hiện tại?'
            text_icon2.innerHTML = 'Những hạn chế của BMI'
            text_icon3.innerHTML = 'Chỉ số BMI ở trẻ em'
            text_icon4.innerHTML = 'Ngủ bao nhiêu tiếng một ngày là đủ?'

            text_content_icon1.innerHTML = 'Cũng giống như tầm quan trọng của việc giảm cân và giữ cân nặng ổn định để có một cơ thể khoẻ mạnh, việc duy trì cân nặng cũng quan trọng không kém. Bạn cần phải đảm bảo thói quen sinh hoạt lành mạnh để cân nặng được duy trì ổn định. Không có bí quyết gì để giảm hay tăng cân nhưng có nhiều thứ bạn có thể làm để duy trì cân nặng hiện tại: - Ăn uống lành mạnh bằng cách bổ sung những thực phẩm giàu dinh dưỡng như ngũ cốc nguyên hạt, trái cây, rau củ, protein, các sản phẩm từ sữa, hạt và các loại đậu có thể giúp duy trì cân nặng của bạn lâu dài. - Uống đủ nước từ 10~12 ly/ngày giúp ngăn ngừa tình trạng tích tụ chất độc và chất béo trong cơ thể. - Ngủ đủ giấc sẽ đảm bảo cơ thể phục hồi năng lượng để làm việc và hoạt động bình thường. Nó sẽ giúp thúc đẩy sự trao đổi chất và ngăn ngừa sự tích tụ của lượng calo đã hấp thụ. Nên ngủ khoảng 8 đến 9 tiếng vào ban đêm. - Đảm bảo thực hiện các hoạt động thể chất ít nhất 30 phút hàng ngày. Điều này sẽ giữ cho lượng calo được đốt cháy một cách thường xuyên.'
            text_content_icon2.innerHTML = '- Chỉ số BMI có thể cho bạn biết khi thừa cân quá nhiều nhưng không xác định được bạn có nhiều mỡ thừa hay không. - Chỉ số BMI không thể phân biệt được sự khác biệt giữa mỡ thừa, cơ hay xương. - Chỉ số BMI của người trưởng thành không tính đến tuổi, giới tính hoặc khối lượng cơ. Điều này có nghĩa là: - Người lớn và vận động viên có nhiều cơ bắp có thể bị phân loại là "thừa cân" hoặc "béo phì" mặc dù lượng mỡ trong cơ thể của họ thấp. - Người lớn bị mất đi cơ bắp khi lớn tuổi có thể được đánh giá là "cân nặng hợp lý" mặc dù có thể họ đang mang mỡ thừa. - Mang thai cũng sẽ ảnh hưởng đến kết quả BMI của phụ nữ. Chỉ số BMI của bạn sẽ tăng lên khi cân nặng của bạn tăng lên. Nên sử dụng số đo cân nặng trước khi mang thai để tính chỉ số BMI. Ngoài những hạn chế này, đo chỉ số BMI là một cách tương đối đơn giản và thuận tiện để đánh giá cân nặng của một người.'
            text_content_icon3.innerHTML = 'Đối với trẻ em và người nhỏ tuổi từ 2-18 tuổi, chỉ số BMI sẽ tính đến yếu tố tuổi tác và giới tính cũng như chiều cao và cân nặng. Trẻ em thừa cân được cho là có nguy cơ cao mắc nhiều bệnh và cũng sẽ bị thừa cân khi trưởng thành. Hệ thống tính chỉ số BMI ở trẻ sẽ phân chia như sau: - Thiếu cân: trong hoặc dưới mức bách phân vị thứ 2 - Cân nặng hợp lý: giữa bách phân vị từ 2 đến 91 - Thừa cân: trong hoặc trên bách phân vị 91 - Thừa cân trầm trọng: trong hoặc trên bách phân vị 98'
            text_content_icon4.innerHTML = 'Nhiều người nghĩ rằng ngủ 8h/ngày tức là ngủ đủ giấc, tuy nhiên mỗi ngày ngủ bao nhiêu giờ là đủ thực tế có thể thay đổi theo từng người. Lượng thời gian ngủ của hầu hết mọi người khoảng từ 7 đến 9 giờ. Tuy nhiên, khi bạn già đi, số giờ ngủ trung bình của giấc ngủ giảm còn 7 đến 8 giờ, với một số người thậm chí ngủ ít giờ hơn.'
           
          

        } else if (bmi < 29.9) {
            underWeight_male_image.src = 'image/underweight-male-gray.png'
            healthy_male_image.src = 'image/healthy-male-gray.png'
            overWeight_male_image.src = 'image/overweight-male-blue.png'
            obeseType1_male_image.src = 'image/obese-type1-male-gray.png'
            obeseType2_male_image.src = 'image/obese-type2-male-gray.png'
            overWeight_text.style.fontWeight = 'bold'
            healthy_text.style.display = 'block'
            overWeight_text.style.display = 'block'
            obeseType1_text.style.display = 'block'
            obeseType2_text.style.display = 'block'
            underWeight_text.style.display = 'block'
            underWeight_text.style.fontWeight = '200'
            healthy_text.style.fontWeight = '200'
            obeseType1_text.style.fontWeight = '200'
            obeseType2_text.style.fontWeight = '200'

            solution_underweight.style.display = 'none'
            solution_healthy.style.display = 'none'
            solution_overweight.style.display = 'block'
            solution_obese1.style.display = 'none'
            solution_obese2.style.display = 'none'

            text_icon1.innerHTML = 'Làm thế nào để tôi có thể giảm cân một cách an toàn?'
            text_icon2.innerHTML = 'Nguyên nhân nào khiến một người thừa cân hay tăng cân đột ngột?'
            text_icon3.innerHTML = 'Bị thừa cân có những nguy cơ gì?'
            text_icon4.innerHTML = 'Chỉ số BMI ở trẻ em'

            text_content_icon1 = 'Giảm cân lành mạnh có thể giúp bạn tránh gặp phải những khó khăn khi thực hiện chế độ ăn kiêng cũng như duy trì được kết quả về lâu dài. Lời khuyên từ chuyên gia: đặt mục tiêu giảm từ 1 đến 2Ib (tương đương khoảng 0,5 đến 1 kg) mỗi tuần và tránh thực hiện những chế độ ăn kiêng "lỗi thời" hay những sản phẩm hứa hẹn mang lại hiệu quả giảm cân. Cách tốt nhất để giảm cân là làm những việc mà bạn có thể thực hiện được trong thời gian dài. Luôn nhớ rằng không có giải pháp chung nào để giảm cân lành mạnh cho tất cả mọi người. Một phương pháp có thể hiệu quả với người này nhưng lại không có tác dụng với người kia vì cơ thể của chúng ta có những phản hồi khác nhau về loại thực phẩm khác nhau, ngoài việc phụ thuộc vào yếu tố di truyền và các yếu tố sức khoẻ khác. Khi cố giảm cân, một chế độ ăn uống và kế hoạch tập luyện hợp lý nhằm nâng cao sức khoẻ sẽ giúp bạn giảm cân đều đặn. mục tiêu là để ăn thực phẩm chất lượng, bổ dưỡng, chủ yếu là thực vâth (trái cây và rau quả) và tránh bột, đường, chất béo chuyển hoá và thực phẩm chế biến sẵn (thực phẩm đóng hộp). Tập thể dục cũng đóng vai trò quan trọng vì nó làm tăng tốc độ trao đổi chất và tạo ra nhiều cơ bắp, cho phép bạn tiếp đốt cháy calo sau mỗi bài tập.'
            text_content_icon2 = 'Đa số các trường hợp tăng cân là do lượng calo tiêu thụ nhiều hơn là calo đốt cháy thông qua các hoạt động thường ngày. Tình trạng tăng cân ngoài ý muốn xảy ra khi cân nặng vẫn tăng lên dù lượng thức ăn tiêu thụ không tăng cũng như cường độ hoạt động thể chất không giảm đi. Một số phụ nữ gặp phải tình trạng tăng cân ngoài ý muốn trong chu kỳ kinh nguyệt. Nếu một người tăng cân trong một thời gian ngắn mà không có lý do rõ ràng, đây có thể là biểu hiện của bệnh lý hoặc vấn đề sức khoẻ. Những nguyên nhân phổ biến khác có thể là do tiền mãn kinh và mãn kinh, quá trình trao đổi chất chậm lại theo tuổi tác, quá trình giữ nước do mất nước hoặc thừa muối, căng thẳng, trầm cảm hoặc lo lắng, thiếu ngủ.'
            text_content_icon3 = 'Một vài kilogram mỡ thừa không phải là rủi ro lớn về sức khoẻ với đại đa số chúng ta. Tuy nhiên, khi bạn giữ thói quen nạp vào nhiều hơn là đốt cháy calo thì càng có nhiều tế bào mỡ thừa được tạo ra trong cơ thể. Cuối cùng, cơ thể sẽ bị nguy hại do lượng mỡ thừa gây ra. Thừa cân thực sự có thể là vấn đề y khoa đáng quan tâm vì khả năng ảnh hưởng nghiêm trọng đến sức khoẻ con người. Thừa cân có thể làm tăng nguy cơ mắc nhiều vấn đề về sức khoẻ, bao gồm tiểu đường, bệnh gan nhiễm mỡ, bệnh tim mạch và đột quỵ cũng như một số bệnh ung thư khác. Nếu đang mang thai, thừa cân có thể dẫn đến những vấn đề sức khoẻ tạm thời và lâu dài cho cả mẹ và bé. Trẻ nhỏ và thiếu niên thừa cân có thể bị tiểu đường và các tình trạng sức khoẻ khác.'
            text_content_icon4 = 'Đối với trẻ em và người nhỏ tuổi từ 2-18 tuổi, chỉ số BMI sẽ tính đến yếu tố tuổi tác và giới tính cũng như chiều cao và cân nặng. Trẻ em thừa cân được cho là có nguy cơ cao mắc nhiều bệnh và cũng sẽ bị thừa cân khi trưởng thành. Hệ thống tính chỉ số BMI ở trẻ sẽ phân chia như sau: - Thiếu cân: trong hoặc dưới mức bách phân vị thứ 2 - Cân nặng hợp lý: giữa bách phân vị từ 2 đến 91 - Thừa cân: trong hoặc trên bách phân vị 91 - Thừa cân trầm trọng: trong hoặc trên bách phân vị 98'

           
        } else if (bmi < 34.9) {
            underWeight_male_image.src = 'image/underweight-male-gray.png'
            healthy_male_image.src = 'image/healthy-male-gray.png'
            overWeight_male_image.src = 'image/overweight-male-gray.png'
            obeseType1_male_image.src = 'image/obese-type1-male-blue.png'
            obeseType2_male_image.src = 'image/obese-type2-male-gray.png'
            obeseType1_text.style.fontWeight = 'bold'
            healthy_text.style.display = 'block'
            overWeight_text.style.display = 'block'
            obeseType1_text.style.display = 'block'
            obeseType2_text.style.display = 'block'
            underWeight_text.style.display = 'block'

            underWeight_text.style.fontWeight = '200'
            overWeight_text.style.fontWeight = '200'
            healthy_text.style.fontWeight = '200'
            obeseType2_text.style.fontWeight = '200'

            solution_underweight.style.display = 'none'
            solution_healthy.style.display = 'none'
            solution_overweight.style.display = 'block'
            solution_obese1.style.display = 'none'
            solution_obese2.style.display = 'none'

            text_icon1.innerHTML = 'Làm thế nào để tôi có thể giảm cân một cách an toàn?'
            text_icon2.innerHTML = 'Nguyên nhân nào khiến một người thừa cân hay tăng cân đột ngột?'
            text_icon3.innerHTML = 'Bị thừa cân có những nguy cơ gì?'
            text_icon4.innerHTML = 'Những hạn chế của BMI'

            text_content_icon1.innerHTML = 'Giảm cân lành mạnh có thể giúp bạn tránh gặp phải những khó khăn khi thực hiện chế độ ăn kiêng cũng như duy trì được kết quả về lâu dài. Lời khuyên từ chuyên gia: đặt mục tiêu giảm từ 1 đến 2Ib (tương đương khoảng 0,5 đến 1 kg) mỗi tuần và tránh thực hiện những chế độ ăn kiêng "lỗi thời" hay những sản phẩm hứa hẹn mang lại hiệu quả giảm cân. Cách tốt nhất để giảm cân là làm những việc mà bạn có thể thực hiện được trong thời gian dài. Luôn nhớ rằng không có giải pháp chung nào để giảm cân lành mạnh cho tất cả mọi người. Một phương pháp có thể hiệu quả với người này nhưng lại không có tác dụng với người kia vì cơ thể của chúng ta có những phản hồi khác nhau về loại thực phẩm khác nhau, ngoài việc phụ thuộc vào yếu tố di truyền và các yếu tố sức khoẻ khác. Khi cố giảm cân, một chế độ ăn uống và kế hoạch tập luyện hợp lý nhằm nâng cao sức khoẻ sẽ giúp bạn giảm cân đều đặn. mục tiêu là để ăn thực phẩm chất lượng, bổ dưỡng, chủ yếu là thực vâth (trái cây và rau quả) và tránh bột, đường, chất béo chuyển hoá và thực phẩm chế biến sẵn (thực phẩm đóng hộp). Tập thể dục cũng đóng vai trò quan trọng vì nó làm tăng tốc độ trao đổi chất và tạo ra nhiều cơ bắp, cho phép bạn tiếp đốt cháy calo sau mỗi bài tập.'
            text_content_icon2.innerHTML = 'Đa số các trường hợp tăng cân là do lượng calo tiêu thụ nhiều hơn là calo đốt cháy thông qua các hoạt động thường ngày. Tình trạng tăng cân ngoài ý muốn xảy ra khi cân nặng vẫn tăng lên dù lượng thức ăn tiêu thụ không tăng cũng như cường độ hoạt động thể chất không giảm đi. Một số phụ nữ gặp phải tình trạng tăng cân ngoài ý muốn trong chu kỳ kinh nguyệt. Nếu một người tăng cân trong một thời gian ngắn mà không có lý do rõ ràng, đây có thể là biểu hiện của bệnh lý hoặc vấn đề sức khoẻ. Những nguyên nhân phổ biến khác có thể là do tiền mãn kinh và mãn kinh, quá trình trao đổi chất chậm lại theo tuổi tác, quá trình giữ nước do mất nước hoặc thừa muối, căng thẳng, trầm cảm hoặc lo lắng, thiếu ngủ.'
            text_content_icon3.innerHTML = 'Một vài kilogram mỡ thừa không phải là rủi ro lớn về sức khoẻ với đại đa số chúng ta. Tuy nhiên, khi bạn giữ thói quen nạp vào nhiều hơn là đốt cháy calo thì càng có nhiều tế bào mỡ thừa được tạo ra trong cơ thể. Cuối cùng, cơ thể sẽ bị nguy hại do lượng mỡ thừa gây ra. Thừa cân thực sự có thể là vấn đề y khoa đáng quan tâm vì khả năng ảnh hưởng nghiêm trọng đến sức khoẻ con người. Thừa cân có thể làm tăng nguy cơ mắc nhiều vấn đề về sức khoẻ, bao gồm tiểu đường, bệnh gan nhiễm mỡ, bệnh tim mạch và đột quỵ cũng như một số bệnh ung thư khác. Nếu đang mang thai, thừa cân có thể dẫn đến những vấn đề sức khoẻ tạm thời và lâu dài cho cả mẹ và bé. Trẻ nhỏ và thiếu niên thừa cân có thể bị tiểu đường và các tình trạng sức khoẻ khác.'
            text_content_icon4.innerHTML = '- Chỉ số BMI có thể cho bạn biết khi thừa cân quá nhiều nhưng không xác định được bạn có nhiều mỡ thừa hay không. - Chỉ số BMI không thể phân biệt được sự khác biệt giữa mỡ thừa, cơ hay xương. - Chỉ số BMI của người trưởng thành không tính đến tuổi, giới tính hoặc khối lượng cơ. Điều này có nghĩa là: - Người lớn và vận động viên có nhiều cơ bắp có thể bị phân loại là "thừa cân" hoặc "béo phì" mặc dù lượng mỡ trong cơ thể của họ thấp. - Người lớn bị mất đi cơ bắp khi lớn tuổi có thể được đánh giá là "cân nặng hợp lý" mặc dù có thể họ đang mang mỡ thừa. - Mang thai cũng sẽ ảnh hưởng đến kết quả BMI của phụ nữ. Chỉ số BMI của bạn sẽ tăng lên khi cân nặng của bạn tăng lên. Nên sử dụng số đo cân nặng trước khi mang thai để tính chỉ số BMI. Ngoài những hạn chế này, đo chỉ số BMI là một cách tương đối đơn giản và thuận tiện để đánh giá cân nặng của một người'

           
           
        } else {
            underWeight_male_image.src = 'image/underweight-male-gray.png'
            healthy_male_image.src = 'image/healthy-male-gray.png'
            overWeight_male_image.src = 'image/overweight-male-gray.png'
            obeseType1_male_image.src = 'image/obese-type1-male-gray.png'
            obeseType2_male_image.src = 'image/obese-type2-male-blue.png'
            obeseType2_text.fontWeight = 'bold'
            healthy_text.style.display = 'block'
            overWeight_text.style.display = 'block'
            obeseType1_text.style.display = 'block'
            obeseType2_text.style.display = 'block'
            underWeight_text.style.display = 'block'

            underWeight_text.style.fontWeight = '200'
            overWeight_text.style.fontWeight = '200'
            obeseType1_text.style.fontWeight = '200'
            healthy_text.style.fontWeight = '200'

            solution_underweight.style.display = 'none'
            solution_healthy.style.display = 'none'
            solution_overweight.style.display = 'none'
            solution_obese1.style.display = 'none'
            solution_obese2.style.display = 'block'

            text_icon1='Làm thế nào để tôi có thể giảm cân một cách an toàn?'
            text_icon2='Nguyên nhân nào khiến một người thừa cân hay tăng cân đột ngột?'
            text_icon3='Bị thừa cân có những nguy cơ gì?'
            text_icon4='Những hạn chế của BMI'

           text_content_icon1 = 'Giảm cân lành mạnh có thể giúp bạn tránh gặp phải những khó khăn khi thực hiện chế độ ăn kiêng cũng như duy trì được kết quả về lâu dài. Lời khuyên từ chuyên gia: đặt mục tiêu giảm từ 1 đến 2Ib (tương đương khoảng 0,5 đến 1 kg) mỗi tuần và tránh thực hiện những chế độ ăn kiêng "lỗi thời" hay những sản phẩm hứa hẹn mang lại hiệu quả giảm cân. Cách tốt nhất để giảm cân là làm những việc mà bạn có thể thực hiện được trong thời gian dài. Luôn nhớ rằng không có giải pháp chung nào để giảm cân lành mạnh cho tất cả mọi người. Một phương pháp có thể hiệu quả với người này nhưng lại không có tác dụng với người kia vì cơ thể của chúng ta có những phản hồi khác nhau về loại thực phẩm khác nhau, ngoài việc phụ thuộc vào yếu tố di truyền và các yếu tố sức khoẻ khác. Khi cố giảm cân, một chế độ ăn uống và kế hoạch tập luyện hợp lý nhằm nâng cao sức khoẻ sẽ giúp bạn giảm cân đều đặn. mục tiêu là để ăn thực phẩm chất lượng, bổ dưỡng, chủ yếu là thực vâth (trái cây và rau quả) và tránh bột, đường, chất béo chuyển hoá và thực phẩm chế biến sẵn (thực phẩm đóng hộp). Tập thể dục cũng đóng vai trò quan trọng vì nó làm tăng tốc độ trao đổi chất và tạo ra nhiều cơ bắp, cho phép bạn tiếp đốt cháy calo sau mỗi bài tập.'
           text_content_icon2 = 'Đa số các trường hợp tăng cân là do lượng calo tiêu thụ nhiều hơn là calo đốt cháy thông qua các hoạt động thường ngày. Tình trạng tăng cân ngoài ý muốn xảy ra khi cân nặng vẫn tăng lên dù lượng thức ăn tiêu thụ không tăng cũng như cường độ hoạt động thể chất không giảm đi. Một số phụ nữ gặp phải tình trạng tăng cân ngoài ý muốn trong chu kỳ kinh nguyệt. Nếu một người tăng cân trong một thời gian ngắn mà không có lý do rõ ràng, đây có thể là biểu hiện của bệnh lý hoặc vấn đề sức khoẻ. Những nguyên nhân phổ biến khác có thể là do tiền mãn kinh và mãn kinh, quá trình trao đổi chất chậm lại theo tuổi tác, quá trình giữ nước do mất nước hoặc thừa muối, căng thẳng, trầm cảm hoặc lo lắng, thiếu ngủ.'
           text_content_icon3 = 'Một vài kilogram mỡ thừa không phải là rủi ro lớn về sức khoẻ với đại đa số chúng ta. Tuy nhiên, khi bạn giữ thói quen nạp vào nhiều hơn là đốt cháy calo thì càng có nhiều tế bào mỡ thừa được tạo ra trong cơ thể. Cuối cùng, cơ thể sẽ bị nguy hại do lượng mỡ thừa gây ra. Thừa cân thực sự có thể là vấn đề y khoa đáng quan tâm vì khả năng ảnh hưởng nghiêm trọng đến sức khoẻ con người. Thừa cân có thể làm tăng nguy cơ mắc nhiều vấn đề về sức khoẻ, bao gồm tiểu đường, bệnh gan nhiễm mỡ, bệnh tim mạch và đột quỵ cũng như một số bệnh ung thư khác. Nếu đang mang thai, thừa cân có thể dẫn đến những vấn đề sức khoẻ tạm thời và lâu dài cho cả mẹ và bé. Trẻ nhỏ và thiếu niên thừa cân có thể bị tiểu đường và các tình trạng sức khoẻ khác.'
           text_content_icon4 = '- Chỉ số BMI có thể cho bạn biết khi thừa cân quá nhiều nhưng không xác định được bạn có nhiều mỡ thừa hay không. - Chỉ số BMI không thể phân biệt được sự khác biệt giữa mỡ thừa, cơ hay xương. - Chỉ số BMI của người trưởng thành không tính đến tuổi, giới tính hoặc khối lượng cơ. Điều này có nghĩa là: - Người lớn và vận động viên có nhiều cơ bắp có thể bị phân loại là "thừa cân" hoặc "béo phì" mặc dù lượng mỡ trong cơ thể của họ thấp. - Người lớn bị mất đi cơ bắp khi lớn tuổi có thể được đánh giá là "cân nặng hợp lý" mặc dù có thể họ đang mang mỡ thừa. - Mang thai cũng sẽ ảnh hưởng đến kết quả BMI của phụ nữ. Chỉ số BMI của bạn sẽ tăng lên khi cân nặng của bạn tăng lên. Nên sử dụng số đo cân nặng trước khi mang thai để tính chỉ số BMI. Ngoài những hạn chế này, đo chỉ số BMI là một cách tương đối đơn giản và thuận tiện để đánh giá cân nặng của một người.'
        }
        
    }


}

function checkFemale() {
    female.classList.add('color')
    male.classList.remove('color')
    select.onsubmit = (e) => {
        information.style.display = 'none'
        e.preventDefault()
        console.log('bbbbbb')
        container.style.display = 'block'
        how.style.display = 'block'
        status1.classList.add('solution_color')
        status_text.classList.add('solution_text_color')
        let age = select.age.value
        let height = select.height.value
        let weight = select.weight.value
        email.style.display = 'block'
        select.age.value = ''
        select.height.value = ''
        select.weight.value = ''
        how_solution.style.display = 'block'
        bmi = weight / ((height * 0.01) * (height * 0.01))
        console.log(Math.floor(bmi))
        container_text.style.display = 'block';
        span_bmi.innerHTML = Math.floor(bmi)
        question.style.display = 'block'
        if (bmi < 18.5) {
            underWeight_male_image.src = 'image1/underweight-blue.png';
            healthy_male_image.src = 'image1/healthy-gray.png';
            overWeight_male_image.src = 'image1/overweight-gray.png';
            obeseType1_male_image.src = 'image1/obese1-gray.png';
            obeseType2_male_image.src = 'image1/obese2-gray.png';
            underWeight_text.style.fontWeight = 'bold';
            healthy_text.style.display = 'block';
            overWeight_text.style.display = 'block';
            obeseType1_text.style.display = 'block';
            obeseType2_text.style.display = 'block';
            underWeight_text.style.display = 'block';
            healthy_text.style.fontWeight = '200';
            overWeight_text.style.fontWeight = '200';
            obeseType1_text.style.fontWeight = '200';
            obeseType2_text.style.fontWeight = '200';

            solution_underweight.style.display = 'block'
            solution_healthy.style.display = 'none'
            solution_overweight.style.display = 'none'
            solution_obese1.style.display = 'none'
            solution_obese2.style.display = 'none'

            text_icon1.innerHTML = 'Làm thế nào để tôi có thể tăng cân một cách an toàn?'
            text_icon2.innerHTML = 'Nguyên nhân nào gây ra tình trạng thiếu cân hay giảm cân đột ngột?'
            text_icon3.innerHTML = 'Bị thiếu cân có thể có những rủi ro gì?'
            text_icon4.innerHTML = 'Những hạn chế của BMI'

            text_content_icon1.innerHTML = 'Thay đổi chế độ ăn uống lành mạnh, cân bằng, cung cấp đủ lượng chất dinh dưỡng và calo có thể giúp bạn đạt được mức cân nặng hợp lý. Hãy đặt mục tiêu tăng cân dần dần. Ăn đồ ăn vặt có thể làm tăng cân nhưng lại không cung cấp dinh dưỡng cho cơ thể nếu bạn chọn không đúng loại thực phẩm. Một số điểm quan trọng của chế độ ăn uống giúp tăng cân an toàn thường gồm: - Chia nhỏ bữa ăn thành nhiều lần (có thể ăn nhiều bữa nhỏ trong ngày) - Ăn thực phẩm giàu chất dinh dưỡng như ngũ cốc nguyên hạt, rau, trái cây, các sản phẩm từ sữa, hạt, quả hạch và protein. - Ăn vặt bằng các món chứa nhiều protein và carbohydrate tốt, bạn có thể cân nhắc lựa chọn các loại hạt hỗn hợp, thanh protein, bánh quy bơ đậu phộng hay bánh hạnh nhân. - Bắt đầu tập luyện thể thao vì bạn có thể tăng cân từ từ bằng cách tăng lượng cơ bắp cho cơ thể.'
          text_content_icon2.innerHTML = 'Có nhiều nguyên nhân khiến một người bị thiếu cân. Một số người có chỉ số BMI tự nhiên thấp hơn so với những người khác là do di truyền trong gia đình. Khi được sinh ra, họ có thể đã có khả năng trao đổi chất cao hoặc ít thèm ăn. Các vận động viên và những người tham gia vào các hoạt động thể chất ở mức độ cao có thể đốt cháy nhiều calo hơn những người ít hoạt động. Việc mắc một số bệnh có thể gây buồn nôn, tiêu chảy và nôn mửa khiến bạn khó tăng cân. Còn các tình trạng khác như ung thư, tiểu đường, rối loạn tuyến giáp có thể làm giảm cảm giác thèm ăn. Sức khỏe tâm thần kém như trầm cảm, rối loạn ăn uống (chứng ăn vô độ và chứng thiếu máu) sẽ ảnh hưởng đến thói quen ăn uống lành mạnh.'
          text_content_icon3.innerHTML = 'Có nhiều rủi ro về sức khoẻ liên quan tới tình trạng thiếu cân nặng. Nếu bạn bị thiếu cân nặng, bạn có thể ăn không đủ các loại thực phẩm lành mạnh chứa những thành phần dinh dưỡng cần thiết cho cơ thể, dẫn đến tình trạng suy dinh dưỡng. Suy dinh dưỡng thường có thể dẫn đến thiếu máu hoặc thiếu hụt một số loại vitamin. Các triệu chứng của suy dinh dưỡng bao gồm chóng mặt, cạn kiệt năng lượng, cảm thấy ốm yếu thường xuyên, mắc các vấn đề về da, tóc và răng. Thiếu cân có thể làm tăng nguy cơ loãng xương, do đó xương dễ bị giòn và dễ gãy hơn. Phụ nữ bị thiếu cân có thể có kinh nguyệt không đều và bị vô sinh. Những người trẻ thiếu cân có thể bị chậm hoặc suy giảm tốc độ tăng trưởng do thiếu chất dinh dưỡng và không nạp đủ calo.'
          text_content_icon4.innerHTML = '- Chỉ số BMI có thể cho bạn biết khi thừa cân quá nhiều nhưng không xác định được bạn có nhiều mỡ thừa hay không. - Chỉ số BMI không thể phân biệt được sự khác biệt giữa mỡ thừa, cơ hay xương. - Chỉ số BMI của người trưởng thành không tính đến tuổi, giới tính hoặc khối lượng cơ. Điều này có nghĩa là: - Người lớn và vận động viên có nhiều cơ bắp có thể bị phân loại là "thừa cân" hoặc "béo phì" mặc dù lượng mỡ trong cơ thể của họ thấp. - Người lớn bị mất đi cơ bắp khi lớn tuổi có thể được đánh giá là "cân nặng hợp lý" mặc dù có thể họ đang mang mỡ thừa. - Mang thai cũng sẽ ảnh hưởng đến kết quả BMI của phụ nữ. Chỉ số BMI của bạn sẽ tăng lên khi cân nặng của bạn tăng lên. Nên sử dụng số đo cân nặng trước khi mang thai để tính chỉ số BMI. Ngoài những hạn chế này, đo chỉ số BMI là một cách tương đối đơn giản và thuận tiện để đánh giá cân nặng của một người.'
            

        } else if (bmi < 24.9) {
            underWeight_male_image.src = 'image1/underweight-gray.png';
            healthy_male_image.src = 'image1/healthy-blue.png';
            overWeight_male_image.src = 'image1/overweight-gray.png';
            obeseType1_male_image.src = 'image1/obese1-gray.png';
            obeseType2_male_image.src = 'image1/obese2-gray.png';
            healthy_text.style.fontWeight = 'bold'
            healthy_text.style.display = 'block'
            overWeight_text.style.display = 'block'
            obeseType1_text.style.display = 'block'
            obeseType2_text.style.display = 'block'
            underWeight_text.style.display = 'block'
            underWeight_text.style.fontWeight = '200'
            overWeight_text.style.fontWeight = '200'
            obeseType1_text.style.fontWeight = '200'
            obeseType2_text.style.fontWeight = '200'

            solution_underweight.style.display = 'none'
            solution_healthy.style.display = 'block'
            solution_overweight.style.display = 'none'
            solution_obese1.style.display = 'none'
            solution_obese2.style.display = 'none'

            text_icon1.innerHTML = 'Làm thế nào để tôi có thể duy trì cân nặng hiện tại?'
            text_icon2.innerHTML = 'Những hạn chế của BMI'
            text_icon3.innerHTML = 'Chỉ số BMI ở trẻ em'
            text_icon4.innerHTML = 'Ngủ bao nhiêu tiếng một ngày là đủ?'

            text_content_icon1.innerHTML = 'Cũng giống như tầm quan trọng của việc giảm cân và giữ cân nặng ổn định để có một cơ thể khoẻ mạnh, việc duy trì cân nặng cũng quan trọng không kém. Bạn cần phải đảm bảo thói quen sinh hoạt lành mạnh để cân nặng được duy trì ổn định. Không có bí quyết gì để giảm hay tăng cân nhưng có nhiều thứ bạn có thể làm để duy trì cân nặng hiện tại: - Ăn uống lành mạnh bằng cách bổ sung những thực phẩm giàu dinh dưỡng như ngũ cốc nguyên hạt, trái cây, rau củ, protein, các sản phẩm từ sữa, hạt và các loại đậu có thể giúp duy trì cân nặng của bạn lâu dài. - Uống đủ nước từ 10~12 ly/ngày giúp ngăn ngừa tình trạng tích tụ chất độc và chất béo trong cơ thể. - Ngủ đủ giấc sẽ đảm bảo cơ thể phục hồi năng lượng để làm việc và hoạt động bình thường. Nó sẽ giúp thúc đẩy sự trao đổi chất và ngăn ngừa sự tích tụ của lượng calo đã hấp thụ. Nên ngủ khoảng 8 đến 9 tiếng vào ban đêm. - Đảm bảo thực hiện các hoạt động thể chất ít nhất 30 phút hàng ngày. Điều này sẽ giữ cho lượng calo được đốt cháy một cách thường xuyên.'
            text_content_icon2.innerHTML = '- Chỉ số BMI có thể cho bạn biết khi thừa cân quá nhiều nhưng không xác định được bạn có nhiều mỡ thừa hay không. - Chỉ số BMI không thể phân biệt được sự khác biệt giữa mỡ thừa, cơ hay xương. - Chỉ số BMI của người trưởng thành không tính đến tuổi, giới tính hoặc khối lượng cơ. Điều này có nghĩa là: - Người lớn và vận động viên có nhiều cơ bắp có thể bị phân loại là "thừa cân" hoặc "béo phì" mặc dù lượng mỡ trong cơ thể của họ thấp. - Người lớn bị mất đi cơ bắp khi lớn tuổi có thể được đánh giá là "cân nặng hợp lý" mặc dù có thể họ đang mang mỡ thừa. - Mang thai cũng sẽ ảnh hưởng đến kết quả BMI của phụ nữ. Chỉ số BMI của bạn sẽ tăng lên khi cân nặng của bạn tăng lên. Nên sử dụng số đo cân nặng trước khi mang thai để tính chỉ số BMI. Ngoài những hạn chế này, đo chỉ số BMI là một cách tương đối đơn giản và thuận tiện để đánh giá cân nặng của một người.'
            text_content_icon3.innerHTML = 'Đối với trẻ em và người nhỏ tuổi từ 2-18 tuổi, chỉ số BMI sẽ tính đến yếu tố tuổi tác và giới tính cũng như chiều cao và cân nặng. Trẻ em thừa cân được cho là có nguy cơ cao mắc nhiều bệnh và cũng sẽ bị thừa cân khi trưởng thành. Hệ thống tính chỉ số BMI ở trẻ sẽ phân chia như sau: - Thiếu cân: trong hoặc dưới mức bách phân vị thứ 2 - Cân nặng hợp lý: giữa bách phân vị từ 2 đến 91 - Thừa cân: trong hoặc trên bách phân vị 91 - Thừa cân trầm trọng: trong hoặc trên bách phân vị 98'
            text_content_icon4.innerHTML = 'Nhiều người nghĩ rằng ngủ 8h/ngày tức là ngủ đủ giấc, tuy nhiên mỗi ngày ngủ bao nhiêu giờ là đủ thực tế có thể thay đổi theo từng người. Lượng thời gian ngủ của hầu hết mọi người khoảng từ 7 đến 9 giờ. Tuy nhiên, khi bạn già đi, số giờ ngủ trung bình của giấc ngủ giảm còn 7 đến 8 giờ, với một số người thậm chí ngủ ít giờ hơn.'
        } else if (bmi < 29.9) {
            underWeight_male_image.src = 'image1/underweight-gray.png';
            healthy_male_image.src = 'image1/healthy-gray.png';
            overWeight_male_image.src = 'image1/overweight-blue.png';
            obeseType1_male_image.src = 'image1/obese1-gray.png';
            obeseType2_male_image.src = 'image1/obese2-gray.png';
            overWeight_text.style.fontWeight = 'bold'
            healthy_text.style.display = 'block'
            overWeight_text.style.display = 'block'
            obeseType1_text.style.display = 'block'
            obeseType2_text.style.display = 'block'
            underWeight_text.style.display = 'block'
            underWeight_text.style.fontWeight = '200'
            healthy_text.style.fontWeight = '200'
            obeseType1_text.style.fontWeight = '200'
            obeseType2_text.style.fontWeight = '200'


            solution_underweight.style.display = 'none'
            solution_healthy.style.display = 'none'
            solution_overweight.style.display = 'block'
            solution_obese1.style.display = 'none'
            solution_obese2.style.display = 'none'

            text_icon1.innerHTML = 'Làm thế nào để tôi có thể duy trì cân nặng hiện tại?'
            text_icon2.innerHTML = 'Những hạn chế của BMI'
            text_icon3.innerHTML = 'Chỉ số BMI ở trẻ em'
            text_icon4.innerHTML = 'Ngủ bao nhiêu tiếng một ngày là đủ?'

            text_content_icon1.innerHTML = 'Cũng giống như tầm quan trọng của việc giảm cân và giữ cân nặng ổn định để có một cơ thể khoẻ mạnh, việc duy trì cân nặng cũng quan trọng không kém. Bạn cần phải đảm bảo thói quen sinh hoạt lành mạnh để cân nặng được duy trì ổn định. Không có bí quyết gì để giảm hay tăng cân nhưng có nhiều thứ bạn có thể làm để duy trì cân nặng hiện tại: - Ăn uống lành mạnh bằng cách bổ sung những thực phẩm giàu dinh dưỡng như ngũ cốc nguyên hạt, trái cây, rau củ, protein, các sản phẩm từ sữa, hạt và các loại đậu có thể giúp duy trì cân nặng của bạn lâu dài. - Uống đủ nước từ 10~12 ly/ngày giúp ngăn ngừa tình trạng tích tụ chất độc và chất béo trong cơ thể. - Ngủ đủ giấc sẽ đảm bảo cơ thể phục hồi năng lượng để làm việc và hoạt động bình thường. Nó sẽ giúp thúc đẩy sự trao đổi chất và ngăn ngừa sự tích tụ của lượng calo đã hấp thụ. Nên ngủ khoảng 8 đến 9 tiếng vào ban đêm. - Đảm bảo thực hiện các hoạt động thể chất ít nhất 30 phút hàng ngày. Điều này sẽ giữ cho lượng calo được đốt cháy một cách thường xuyên.'
            text_content_icon2.innerHTML = '- Chỉ số BMI có thể cho bạn biết khi thừa cân quá nhiều nhưng không xác định được bạn có nhiều mỡ thừa hay không. - Chỉ số BMI không thể phân biệt được sự khác biệt giữa mỡ thừa, cơ hay xương. - Chỉ số BMI của người trưởng thành không tính đến tuổi, giới tính hoặc khối lượng cơ. Điều này có nghĩa là: - Người lớn và vận động viên có nhiều cơ bắp có thể bị phân loại là "thừa cân" hoặc "béo phì" mặc dù lượng mỡ trong cơ thể của họ thấp. - Người lớn bị mất đi cơ bắp khi lớn tuổi có thể được đánh giá là "cân nặng hợp lý" mặc dù có thể họ đang mang mỡ thừa. - Mang thai cũng sẽ ảnh hưởng đến kết quả BMI của phụ nữ. Chỉ số BMI của bạn sẽ tăng lên khi cân nặng của bạn tăng lên. Nên sử dụng số đo cân nặng trước khi mang thai để tính chỉ số BMI. Ngoài những hạn chế này, đo chỉ số BMI là một cách tương đối đơn giản và thuận tiện để đánh giá cân nặng của một người.'
            text_content_icon3.innerHTML = 'Đối với trẻ em và người nhỏ tuổi từ 2-18 tuổi, chỉ số BMI sẽ tính đến yếu tố tuổi tác và giới tính cũng như chiều cao và cân nặng. Trẻ em thừa cân được cho là có nguy cơ cao mắc nhiều bệnh và cũng sẽ bị thừa cân khi trưởng thành. Hệ thống tính chỉ số BMI ở trẻ sẽ phân chia như sau: - Thiếu cân: trong hoặc dưới mức bách phân vị thứ 2 - Cân nặng hợp lý: giữa bách phân vị từ 2 đến 91 - Thừa cân: trong hoặc trên bách phân vị 91 - Thừa cân trầm trọng: trong hoặc trên bách phân vị 98'
            text_content_icon4.innerHTML = 'Nhiều người nghĩ rằng ngủ 8h/ngày tức là ngủ đủ giấc, tuy nhiên mỗi ngày ngủ bao nhiêu giờ là đủ thực tế có thể thay đổi theo từng người. Lượng thời gian ngủ của hầu hết mọi người khoảng từ 7 đến 9 giờ. Tuy nhiên, khi bạn già đi, số giờ ngủ trung bình của giấc ngủ giảm còn 7 đến 8 giờ, với một số người thậm chí ngủ ít giờ hơn.'
        } else if (bmi < 34.9) {
            underWeight_male_image.src = 'image1/underweight-gray.png';
            healthy_male_image.src = 'image1/healthy-gray.png';
            overWeight_male_image.src = 'image1/overweight-gray.png';
            obeseType1_male_image.src = 'image1/obese1-blue.png';
            obeseType2_male_image.src = 'image1/obese2-gray.png';
            obeseType1_text.style.fontWeight = 'bold'
            healthy_text.style.display = 'block'
            overWeight_text.style.display = 'block'
            obeseType1_text.style.display = 'block'
            obeseType2_text.style.display = 'block'
            underWeight_text.style.display = 'block'

            underWeight_text.style.fontWeight = '200'
            overWeight_text.style.fontWeight = '200'
            healthy_text.style.fontWeight = '200'
            obeseType2_text.style.fontWeight = '200'

            solution_underweight.style.display = 'none'
            solution_healthy.style.display = 'none'
            solution_overweight.style.display = 'none'
            solution_obese1.style.display = 'block'
            solution_obese2.style.display = 'none'

            text_icon1.innerHTML = 'Làm thế nào để tôi có thể giảm cân một cách an toàn?'
            text_icon2.innerHTML = 'Nguyên nhân nào khiến một người thừa cân hay tăng cân đột ngột?'
            text_icon3.innerHTML = 'Bị thừa cân có những nguy cơ gì?'
            text_icon4.innerHTML = 'Những hạn chế của BMI'

            text_content_icon1.innerHTML = 'Giảm cân lành mạnh có thể giúp bạn tránh gặp phải những khó khăn khi thực hiện chế độ ăn kiêng cũng như duy trì được kết quả về lâu dài. Lời khuyên từ chuyên gia: đặt mục tiêu giảm từ 1 đến 2Ib (tương đương khoảng 0,5 đến 1 kg) mỗi tuần và tránh thực hiện những chế độ ăn kiêng "lỗi thời" hay những sản phẩm hứa hẹn mang lại hiệu quả giảm cân. Cách tốt nhất để giảm cân là làm những việc mà bạn có thể thực hiện được trong thời gian dài. Luôn nhớ rằng không có giải pháp chung nào để giảm cân lành mạnh cho tất cả mọi người. Một phương pháp có thể hiệu quả với người này nhưng lại không có tác dụng với người kia vì cơ thể của chúng ta có những phản hồi khác nhau về loại thực phẩm khác nhau, ngoài việc phụ thuộc vào yếu tố di truyền và các yếu tố sức khoẻ khác. Khi cố giảm cân, một chế độ ăn uống và kế hoạch tập luyện hợp lý nhằm nâng cao sức khoẻ sẽ giúp bạn giảm cân đều đặn. mục tiêu là để ăn thực phẩm chất lượng, bổ dưỡng, chủ yếu là thực vâth (trái cây và rau quả) và tránh bột, đường, chất béo chuyển hoá và thực phẩm chế biến sẵn (thực phẩm đóng hộp). Tập thể dục cũng đóng vai trò quan trọng vì nó làm tăng tốc độ trao đổi chất và tạo ra nhiều cơ bắp, cho phép bạn tiếp đốt cháy calo sau mỗi bài tập.'
            text_content_icon2.innerHTML = 'Đa số các trường hợp tăng cân là do lượng calo tiêu thụ nhiều hơn là calo đốt cháy thông qua các hoạt động thường ngày. Tình trạng tăng cân ngoài ý muốn xảy ra khi cân nặng vẫn tăng lên dù lượng thức ăn tiêu thụ không tăng cũng như cường độ hoạt động thể chất không giảm đi. Một số phụ nữ gặp phải tình trạng tăng cân ngoài ý muốn trong chu kỳ kinh nguyệt. Nếu một người tăng cân trong một thời gian ngắn mà không có lý do rõ ràng, đây có thể là biểu hiện của bệnh lý hoặc vấn đề sức khoẻ. Những nguyên nhân phổ biến khác có thể là do tiền mãn kinh và mãn kinh, quá trình trao đổi chất chậm lại theo tuổi tác, quá trình giữ nước do mất nước hoặc thừa muối, căng thẳng, trầm cảm hoặc lo lắng, thiếu ngủ.'
            text_content_icon3.innerHTML = 'Một vài kilogram mỡ thừa không phải là rủi ro lớn về sức khoẻ với đại đa số chúng ta. Tuy nhiên, khi bạn giữ thói quen nạp vào nhiều hơn là đốt cháy calo thì càng có nhiều tế bào mỡ thừa được tạo ra trong cơ thể. Cuối cùng, cơ thể sẽ bị nguy hại do lượng mỡ thừa gây ra. Thừa cân thực sự có thể là vấn đề y khoa đáng quan tâm vì khả năng ảnh hưởng nghiêm trọng đến sức khoẻ con người. Thừa cân có thể làm tăng nguy cơ mắc nhiều vấn đề về sức khoẻ, bao gồm tiểu đường, bệnh gan nhiễm mỡ, bệnh tim mạch và đột quỵ cũng như một số bệnh ung thư khác. Nếu đang mang thai, thừa cân có thể dẫn đến những vấn đề sức khoẻ tạm thời và lâu dài cho cả mẹ và bé. Trẻ nhỏ và thiếu niên thừa cân có thể bị tiểu đường và các tình trạng sức khoẻ khác.'
            text_content_icon4.innerHTML = '- Chỉ số BMI có thể cho bạn biết khi thừa cân quá nhiều nhưng không xác định được bạn có nhiều mỡ thừa hay không. - Chỉ số BMI không thể phân biệt được sự khác biệt giữa mỡ thừa, cơ hay xương. - Chỉ số BMI của người trưởng thành không tính đến tuổi, giới tính hoặc khối lượng cơ. Điều này có nghĩa là: - Người lớn và vận động viên có nhiều cơ bắp có thể bị phân loại là "thừa cân" hoặc "béo phì" mặc dù lượng mỡ trong cơ thể của họ thấp. - Người lớn bị mất đi cơ bắp khi lớn tuổi có thể được đánh giá là "cân nặng hợp lý" mặc dù có thể họ đang mang mỡ thừa. - Mang thai cũng sẽ ảnh hưởng đến kết quả BMI của phụ nữ. Chỉ số BMI của bạn sẽ tăng lên khi cân nặng của bạn tăng lên. Nên sử dụng số đo cân nặng trước khi mang thai để tính chỉ số BMI. Ngoài những hạn chế này, đo chỉ số BMI là một cách tương đối đơn giản và thuận tiện để đánh giá cân nặng của một người'
        } else {
            underWeight_male_image.src = 'image1/underweight-gray.png';
            healthy_male_image.src = 'image1/healthy-gray.png';
            overWeight_male_image.src = 'image1/overweight-gray.png';
            obeseType1_male_image.src = 'image1/obese1-gray.png';
            obeseType2_male_image.src = 'image1/obese2-blue.png';
            obeseType2_text.fontWeight = 'bold'
            healthy_text.style.display = 'block'
            overWeight_text.style.display = 'block'
            obeseType1_text.style.display = 'block'
            obeseType2_text.style.display = 'block'
            underWeight_text.style.display = 'block'

            underWeight_text.style.fontWeight = '200'
            overWeight_text.style.fontWeight = '200'
            obeseType1_text.style.fontWeight = '200'
            healthy_text.style.fontWeight = '200'

            solution_underweight.style.display = 'none'
            solution_healthy.style.display = 'none'
            solution_overweight.style.display = 'none'
            solution_obese1.style.display = 'none'
            solution_obese2.style.display = 'block'

            text_icon1='Làm thế nào để tôi có thể giảm cân một cách an toàn?'
            text_icon2='Nguyên nhân nào khiến một người thừa cân hay tăng cân đột ngột?'
            text_icon3='Bị thừa cân có những nguy cơ gì?'
            text_icon4='Những hạn chế của BMI'

           text_content_icon1 = 'Giảm cân lành mạnh có thể giúp bạn tránh gặp phải những khó khăn khi thực hiện chế độ ăn kiêng cũng như duy trì được kết quả về lâu dài. Lời khuyên từ chuyên gia: đặt mục tiêu giảm từ 1 đến 2Ib (tương đương khoảng 0,5 đến 1 kg) mỗi tuần và tránh thực hiện những chế độ ăn kiêng "lỗi thời" hay những sản phẩm hứa hẹn mang lại hiệu quả giảm cân. Cách tốt nhất để giảm cân là làm những việc mà bạn có thể thực hiện được trong thời gian dài. Luôn nhớ rằng không có giải pháp chung nào để giảm cân lành mạnh cho tất cả mọi người. Một phương pháp có thể hiệu quả với người này nhưng lại không có tác dụng với người kia vì cơ thể của chúng ta có những phản hồi khác nhau về loại thực phẩm khác nhau, ngoài việc phụ thuộc vào yếu tố di truyền và các yếu tố sức khoẻ khác. Khi cố giảm cân, một chế độ ăn uống và kế hoạch tập luyện hợp lý nhằm nâng cao sức khoẻ sẽ giúp bạn giảm cân đều đặn. mục tiêu là để ăn thực phẩm chất lượng, bổ dưỡng, chủ yếu là thực vâth (trái cây và rau quả) và tránh bột, đường, chất béo chuyển hoá và thực phẩm chế biến sẵn (thực phẩm đóng hộp). Tập thể dục cũng đóng vai trò quan trọng vì nó làm tăng tốc độ trao đổi chất và tạo ra nhiều cơ bắp, cho phép bạn tiếp đốt cháy calo sau mỗi bài tập.'
           text_content_icon2 = 'Đa số các trường hợp tăng cân là do lượng calo tiêu thụ nhiều hơn là calo đốt cháy thông qua các hoạt động thường ngày. Tình trạng tăng cân ngoài ý muốn xảy ra khi cân nặng vẫn tăng lên dù lượng thức ăn tiêu thụ không tăng cũng như cường độ hoạt động thể chất không giảm đi. Một số phụ nữ gặp phải tình trạng tăng cân ngoài ý muốn trong chu kỳ kinh nguyệt. Nếu một người tăng cân trong một thời gian ngắn mà không có lý do rõ ràng, đây có thể là biểu hiện của bệnh lý hoặc vấn đề sức khoẻ. Những nguyên nhân phổ biến khác có thể là do tiền mãn kinh và mãn kinh, quá trình trao đổi chất chậm lại theo tuổi tác, quá trình giữ nước do mất nước hoặc thừa muối, căng thẳng, trầm cảm hoặc lo lắng, thiếu ngủ.'
           text_content_icon3 = 'Một vài kilogram mỡ thừa không phải là rủi ro lớn về sức khoẻ với đại đa số chúng ta. Tuy nhiên, khi bạn giữ thói quen nạp vào nhiều hơn là đốt cháy calo thì càng có nhiều tế bào mỡ thừa được tạo ra trong cơ thể. Cuối cùng, cơ thể sẽ bị nguy hại do lượng mỡ thừa gây ra. Thừa cân thực sự có thể là vấn đề y khoa đáng quan tâm vì khả năng ảnh hưởng nghiêm trọng đến sức khoẻ con người. Thừa cân có thể làm tăng nguy cơ mắc nhiều vấn đề về sức khoẻ, bao gồm tiểu đường, bệnh gan nhiễm mỡ, bệnh tim mạch và đột quỵ cũng như một số bệnh ung thư khác. Nếu đang mang thai, thừa cân có thể dẫn đến những vấn đề sức khoẻ tạm thời và lâu dài cho cả mẹ và bé. Trẻ nhỏ và thiếu niên thừa cân có thể bị tiểu đường và các tình trạng sức khoẻ khác.'
           text_content_icon4 = '- Chỉ số BMI có thể cho bạn biết khi thừa cân quá nhiều nhưng không xác định được bạn có nhiều mỡ thừa hay không. - Chỉ số BMI không thể phân biệt được sự khác biệt giữa mỡ thừa, cơ hay xương. - Chỉ số BMI của người trưởng thành không tính đến tuổi, giới tính hoặc khối lượng cơ. Điều này có nghĩa là: - Người lớn và vận động viên có nhiều cơ bắp có thể bị phân loại là "thừa cân" hoặc "béo phì" mặc dù lượng mỡ trong cơ thể của họ thấp. - Người lớn bị mất đi cơ bắp khi lớn tuổi có thể được đánh giá là "cân nặng hợp lý" mặc dù có thể họ đang mang mỡ thừa. - Mang thai cũng sẽ ảnh hưởng đến kết quả BMI của phụ nữ. Chỉ số BMI của bạn sẽ tăng lên khi cân nặng của bạn tăng lên. Nên sử dụng số đo cân nặng trước khi mang thai để tính chỉ số BMI. Ngoài những hạn chế này, đo chỉ số BMI là một cách tương đối đơn giản và thuận tiện để đánh giá cân nặng của một người.'
        }
    }

}

let explain = document.getElementById('explain')
let define = document.getElementById('define')
let bmi_explain = document.getElementById('bmi_explain')
let bmi_define = document.getElementById('bmi_define')
explain.addEventListener('click',() =>{
   if(bmi_explain.style.display === 'none'){
    bmi_explain.style.display = 'block'
    
    explain.setAttribute('class',"fal fa-minus")
    text_explain.style.fontWeight = 'bold'
   }
   else{
    bmi_explain.style.display = 'none'
    explain.setAttribute('class',"fal fa-plus")
    text_explain.style.fontWeight = '300'
   }
})

define.addEventListener('click',() =>{
    if(bmi_define.style.display === 'none'){
     bmi_define.style.display = 'block'
     
     define.setAttribute('class',"fal fa-minus")
     text_define.style.fontWeight = 'bold'
    }
    else{
     bmi_define.style.display = 'none'
     define.setAttribute('class',"fal fa-plus")
     text_define.style.fontWeight = '200'
    }
 })

 let text_define = document.getElementById('text_define')
let text_explain = document.getElementById('text_explain')













