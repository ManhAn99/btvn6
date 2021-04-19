let search = document.querySelector(".search");
let p_search = document.querySelector("#search");
//MENU
function showSearch() {
  search.style.display = "block";
  p_search.style.color = "#2d87f3";
}
function closeSearch() {
  search.style.display = "none";
  p_search.style.color = "initial";
}

//STYLE IMAGE
let form = document.getElementById("input1");
let maleimg = document.getElementById("male-img");
let femaleimg = document.getElementById("female-img");
maleimg.onclick = function () {
  maleimg.style.border = "1px solid blue";
  femaleimg.style.border = "none";
};
femaleimg.onclick = function () {
  femaleimg.style.border = "1px solid blue";
  maleimg.style.border = "none";
};

//CACULATE
let underWeight_text = document.getElementById("underweight-text");
let healthy_text = document.getElementById("underweight-text");
let overweight_text = document.getElementById("underweight-text");
let obesetype1_text = document.getElementById("underweight-text");
let obesetype2_text = document.getElementById("underweight-text");

let underweight_image = document.getElementById("underweight-image");
let healthy_image = document.getElementById("healthy-image");
let overweight_image = document.getElementById("overweight-image");
let obese_type1_image = document.getElementById("obesetype1-image");
let obese_type2_image = document.getElementById("obesetype2-image");

let solution = document.getElementById("solution");
let status = document.getElementById("status");
let risk = document.getElementById("risk");
let recommend = document.getElementById("recommend");

let getData = [
  {
    gender: "male",
    bmi_min: 1,
    bmi_max: 18.4,
    under_weight: "./underweight-male-blue.png",
    healthy: "./healthy-male-gray.png",
    overweight: "./overweight-male-gray.png",
    obese_type1: "./obese-type1-male-gray.png",
    obese_type2: "./obese-type2-male-gray.png",
    solution: "",
    status: "Bạn được xem là thiếu cân nếu có chỉ số BMI dưới 18,5.",
    risk:
      "Các nghiên cứu chỉ ra rằng nững người bị thiếu cân nặng có nguy cơ bị suy dinh dưỡng cao hơn, khả năng miễn dịch giảm, bị vô sinh,loãng xương, vết thương lâu lành và dễ gặp các biến chứng sau phẫu thuật.",
    recommend: `Nếu bạn muốn tăng cân, điều quan trọng trước tiên là phải xác định bạn cần bao nhiêu calo mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể.
    <br />Tiếp theo, hãy chọn các loại thức ăn và đồ uống có thể cung cấp lượng calo cao hơn mức tiêu thụ của bạn – lên đến 300-500 kcal mỗi ngày. Ví dụ, nếu nhu cầu calo hàng ngày của bạn là 1700 kcal, bạn cần tiêu thụ tổng cộng 2000-2200 kcal mỗi ngày để tăng cân.`,
  },
  {
    gender: "male",
    bmi_min: 18.5,
    bmi_max: 24.9,
    under_weight: "./underweight-male-gray.png",
    healthy: "./healthy-male-blue.png",
    overweight: "./overweight-male-gray.png",
    obese_type1: "./obese-type1-male-gray.png",
    obese_type2: "./obese-type2-male-gray.png",
    solution: "",
    status:
      "Bạn được coi là có trọng lượng cơ thể lý tưởng nếu chỉ số BMI rơi vào khoảng 18,5 đến 24,9.",
    risk:
      "Ngay cả những người có chỉ số BMI khỏe mạnh cũng có thể đứng trước nguy cơ mắc một số tình trạng sức khoẻ. Vì vậy, điều quan trọng là cần xây dựng một lối sống lành mạnh thông qua chế độ ăn uống thích hợp, vận động hợp lý và khám sức khỏe định kỳ để duy trì sức khỏe tốt nhất có thể.",
    recommend:
      "Nếu bạn muốn duy trì trọng lượng cơ thể, đầu tiên hãy xác định bạn cần bao nhiêu calo mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể. Chọn các thực phẩm và đồ uống cung cấp một lượng calo tương đương với nhu cầu calo hàng ngày của bạn. Ví dụ: Nếu nhu cầu calo hàng ngày của bạn là 1950 kcal, bạn cần tiêu thụ tổng cộng 1950 kcal mỗi ngày để duy trì cân nặng của mình.",
  },
  {
    gender: "male",
    bmi_min: 25,
    bmi_max: 29.9,
    under_weight: "./underweight-male-gray.png",
    healthy: "./healthy-male-gray.png",
    overweight: "./overweight-male-blue.png",
    obese_type1: "./obese-type1-male-gray.png",
    obese_type2: "./obese-type2-male-gray.png",
    solution: "",
    status:
      "Bạn được xem là thừa cân nếu có chỉ số BMI nằm trong khoảng từ 25 đến 30.",
    risk:
      "Thừa cân có thể làm tăng nguy cơ tiến triển bệnh tiểu đường týp 2, tăng huyết áp, bệnh tim mạch, đột quỵ, viêm xương khớp, bệnh gan nhiễm mỡ, bệnh thận và một số bệnh ung thư.",
    recommend: `Nếu bạn muốn giảm cân, trước tiên bạn phải xác định lượng calo cần nạp mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể. Tiếp theo, hãy chọn những loại thức ăn và đồ uống cung cấp ít calo hơn nhu cầu hàng ngày của bạn. Ví dụ, nếu nhu cầu calo tiêu thụ hàng ngày của bạn là 2100 kcal, hãy cố gắng giảm tổng lượng calo đó xuống 300-500 kcal. Giảm tới 500 kcal mỗi ngày sẽ giúp bạn giảm tới 0,5-1 kg cân nặng mỗi tuần.
    <br><strong>Nhu cầu calo tối thiểu của mỗi người là bao nhiêu?</strong> <br>Trung bình, nữ giới cần khoảng 2000 kcal mỗi ngày, trong khi nam giới cần tới 2500 kcal mỗi ngày. Tuy nhiên, mỗi người cần tối thiểu 1200 kcal mỗi ngày để duy trì các chức năng chính của cơ thể. Tiêu thụ ít hơn 1200 kcal mỗi ngày sẽ có tác động xấu đến cơ thể của bạn.`,
  },
  {
    gender: "male",
    bmi_min: 30,
    bmi_max: 35,
    under_weight: "./underweight-male-gray.png",
    healthy: "./healthy-male-gray.png",
    overweight: "./overweight-male-gray.png",
    obese_type1: "./obese-type1-male-blue.png",
    obese_type2: "./obese-type2-male-gray.png",
    solution: "",
    status:
      "Bạn được xem là thừa cân nếu có chỉ số BMI nằm trong khoảng từ 25 đến 30.",
    risk:
      "Thừa cân có thể làm tăng nguy cơ tiến triển bệnh tiểu đường týp 2, tăng huyết áp, bệnh tim mạch, đột quỵ, viêm xương khớp, bệnh gan nhiễm mỡ, bệnh thận và một số bệnh ung thư.",
    recommend: `Nếu bạn muốn giảm cân, trước tiên bạn phải xác định lượng calo cần nạp mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể. Tiếp theo, hãy chọn những loại thức ăn và đồ uống cung cấp ít calo hơn nhu cầu hàng ngày của bạn. Ví dụ, nếu nhu cầu calo tiêu thụ hàng ngày của bạn là 2100 kcal, hãy cố gắng giảm tổng lượng calo đó xuống 300-500 kcal. Giảm tới 500 kcal mỗi ngày sẽ giúp bạn giảm tới 0,5-1 kg cân nặng mỗi tuần.
    <br><strong>Nhu cầu calo tối thiểu của mỗi người là bao nhiêu?</strong> <br>Trung bình, nữ giới cần khoảng 2000 kcal mỗi ngày, trong khi nam giới cần tới 2500 kcal mỗi ngày. Tuy nhiên, mỗi người cần tối thiểu 1200 kcal mỗi ngày để duy trì các chức năng chính của cơ thể. Tiêu thụ ít hơn 1200 kcal mỗi ngày sẽ có tác động xấu đến cơ thể của bạn.`,
  },
  {
    gender: "male",
    bmi_min: 35,
    bmi_max: 100,
    under_weight: "./underweight-male-gray.png",
    healthy: "./healthy-male-gray.png",
    overweight: "./overweight-male-gray.png",
    obese_type1: "./obese-type1-male-gray.png",
    obese_type2: "./obese-type2-male-blue.png",
    solution: "",
    status: "Bạn được coi là béo phì cấp độ 2 nếu có chỉ số BMI trên 30.",
    risk:
      "Béo phì có thể làm tăng nguy cơ tiến triển bệnh tiểu đường týp 2, tăng huyết áp, bệnh tim mạch, đột quỵ, viêm xương khớp, bệnh gan nhiễm mỡ, bệnh thận và một số bệnh ung thư.",
    recommend: `Nếu bạn muốn giảm cân, trước tiên bạn phải xác định lượng calo cần nạp mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể. Tiếp theo, hãy chọn những loại thức ăn và đồ uống cung cấp ít calo hơn nhu cầu hàng ngày của bạn. Ví dụ, nếu nhu cầu calo tiêu thụ hàng ngày của bạn là 2100 kcal, hãy cố gắng giảm tổng lượng calo đó xuống 300-500 kcal. Giảm tới 500 kcal mỗi ngày sẽ giúp bạn giảm tới 0,5-1 kg cân nặng mỗi tuần.
    <br><strong>Nhu cầu calo tối thiểu của mỗi người là bao nhiêu?</strong> <br>Trung bình, nữ giới cần khoảng 2000 kcal mỗi ngày, trong khi nam giới cần tới 2500 kcal mỗi ngày. Tuy nhiên, mỗi người cần tối thiểu 1200 kcal mỗi ngày để duy trì các chức năng chính của cơ thể. Tiêu thụ ít hơn 1200 kcal mỗi ngày sẽ có tác động xấu đến cơ thể của bạn.`,
  },
  {
    gender: "female",
    bmi_min: 1,
    bmi_max: 18.4,
    under_weight: "./underweight-female-blue.png",
    healthy: "./healthy-female-gray.png",
    overweight: "./overweight-female-gray.png",
    obese_type1: "./obese-type1-female-gray.png",
    obese_type2: "./obese-type2-female-gray.png",
    solution: "",
    status: "Bạn được xem là thiếu cân nếu có chỉ số BMI dưới 18,5.",
    risk:
      "Các nghiên cứu chỉ ra rằng nững người bị thiếu cân nặng có nguy cơ bị suy dinh dưỡng cao hơn, khả năng miễn dịch giảm, bị vô sinh,loãng xương, vết thương lâu lành và dễ gặp các biến chứng sau phẫu thuật.",
    recommend: `Nếu bạn muốn tăng cân, điều quan trọng trước tiên là phải xác định bạn cần bao nhiêu calo mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể.
    <br />Tiếp theo, hãy chọn các loại thức ăn và đồ uống có thể cung cấp lượng calo cao hơn mức tiêu thụ của bạn – lên đến 300-500 kcal mỗi ngày. Ví dụ, nếu nhu cầu calo hàng ngày của bạn là 1700 kcal, bạn cần tiêu thụ tổng cộng 2000-2200 kcal mỗi ngày để tăng cân.`,
  },
  {
    gender: "female",
    bmi_min: 18.5,
    bmi_max: 24.9,
    under_weight: "./underweight-female-gray.png",
    healthy: "./healthy-female-blue.png",
    overweight: "./overweight-female-gray.png",
    obese_type1: "./obese-type1-female-gray.png",
    obese_type2: "./obese-type2-female-gray.png",
    solution: "",
    status:
      "Bạn được coi là có trọng lượng cơ thể lý tưởng nếu chỉ số BMI rơi vào khoảng 18,5 đến 24,9.",
    risk:
      "Ngay cả những người có chỉ số BMI khỏe mạnh cũng có thể đứng trước nguy cơ mắc một số tình trạng sức khoẻ. Vì vậy, điều quan trọng là cần xây dựng một lối sống lành mạnh thông qua chế độ ăn uống thích hợp, vận động hợp lý và khám sức khỏe định kỳ để duy trì sức khỏe tốt nhất có thể.",
    recommend:
      "Nếu bạn muốn duy trì trọng lượng cơ thể, đầu tiên hãy xác định bạn cần bao nhiêu calo mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể. Chọn các thực phẩm và đồ uống cung cấp một lượng calo tương đương với nhu cầu calo hàng ngày của bạn. Ví dụ: Nếu nhu cầu calo hàng ngày của bạn là 1950 kcal, bạn cần tiêu thụ tổng cộng 1950 kcal mỗi ngày để duy trì cân nặng của mình.",
  },
  {
    gender: "female",
    bmi_min: 25,
    bmi_max: 29.9,
    under_weight: "./underweight-female-gray.png",
    healthy: "./healthy-female-gray.png",
    overweight: "./overweight-female-blue.png",
    obese_type1: "./obese-type1-female-gray.png",
    obese_type2: "./obese-type2-female-gray.png",
    solution: "",
    status:
      "Bạn được xem là thừa cân nếu có chỉ số BMI nằm trong khoảng từ 25 đến 30.",
    risk:
      "Thừa cân có thể làm tăng nguy cơ tiến triển bệnh tiểu đường týp 2, tăng huyết áp, bệnh tim mạch, đột quỵ, viêm xương khớp, bệnh gan nhiễm mỡ, bệnh thận và một số bệnh ung thư.",
    recommend: `Nếu bạn muốn giảm cân, trước tiên bạn phải xác định lượng calo cần nạp mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể. Tiếp theo, hãy chọn những loại thức ăn và đồ uống cung cấp ít calo hơn nhu cầu hàng ngày của bạn. Ví dụ, nếu nhu cầu calo tiêu thụ hàng ngày của bạn là 2100 kcal, hãy cố gắng giảm tổng lượng calo đó xuống 300-500 kcal. Giảm tới 500 kcal mỗi ngày sẽ giúp bạn giảm tới 0,5-1 kg cân nặng mỗi tuần.
    <br><strong>Nhu cầu calo tối thiểu của mỗi người là bao nhiêu?</strong> <br>Trung bình, nữ giới cần khoảng 2000 kcal mỗi ngày, trong khi nam giới cần tới 2500 kcal mỗi ngày. Tuy nhiên, mỗi người cần tối thiểu 1200 kcal mỗi ngày để duy trì các chức năng chính của cơ thể. Tiêu thụ ít hơn 1200 kcal mỗi ngày sẽ có tác động xấu đến cơ thể của bạn.`,
  },
  {
    gender: "female",
    bmi_min: 30,
    bmi_max: 35,
    under_weight: "./underweight-female-gray.png",
    healthy: "./healthy-female-gray.png",
    overweight: "./overweight-female-gray.png",
    obese_type1: "./obese-type1-female-blue.png",
    obese_type2: "./obese-type2-female-gray.png",
    solution: "",
    status:
      "Bạn được xem là béo phì cấp độ 1 nếu có chỉ số BMI nằm trong khoảng từ 30 đến 35.",
    risk:
      "Thừa cân có thể làm tăng nguy cơ tiến triển bệnh tiểu đường týp 2, tăng huyết áp, bệnh tim mạch, đột quỵ, viêm xương khớp, bệnh gan nhiễm mỡ, bệnh thận và một số bệnh ung thư.",
    recommend: `Nếu bạn muốn giảm cân, trước tiên bạn phải xác định lượng calo cần nạp mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể. Tiếp theo, hãy chọn những loại thức ăn và đồ uống cung cấp ít calo hơn nhu cầu hàng ngày của bạn. Ví dụ, nếu nhu cầu calo tiêu thụ hàng ngày của bạn là 2100 kcal, hãy cố gắng giảm tổng lượng calo đó xuống 300-500 kcal. Giảm tới 500 kcal mỗi ngày sẽ giúp bạn giảm tới 0,5-1 kg cân nặng mỗi tuần.
    <br><strong>Nhu cầu calo tối thiểu của mỗi người là bao nhiêu?</strong> <br>Trung bình, nữ giới cần khoảng 2000 kcal mỗi ngày, trong khi nam giới cần tới 2500 kcal mỗi ngày. Tuy nhiên, mỗi người cần tối thiểu 1200 kcal mỗi ngày để duy trì các chức năng chính của cơ thể. Tiêu thụ ít hơn 1200 kcal mỗi ngày sẽ có tác động xấu đến cơ thể của bạn.`,
  },
  {
    gender: "female",
    bmi_min: 35,
    bmi_max: 100,
    under_weight: "./underweight-female-gray.png",
    healthy: "./healthy-female-gray.png",
    overweight: "./overweight-female-gray.png",
    obese_type1: "./obese-type1-female-gray.png",
    obese_type2: "./obese-type2-female-blue.png",
    solution: "",
    status: "Bạn được coi là béo phì cấp độ 2 nếu có chỉ số BMI trên 30.",
    risk:
      "Béo phì có thể làm tăng nguy cơ tiến triển bệnh tiểu đường týp 2, tăng huyết áp, bệnh tim mạch, đột quỵ, viêm xương khớp, bệnh gan nhiễm mỡ, bệnh thận và một số bệnh ung thư.",
    recommend: `Nếu bạn muốn giảm cân, trước tiên bạn phải xác định lượng calo cần nạp mỗi ngày để thực hiện các chức năng cơ bản và các hoạt động hàng ngày của cơ thể. Tiếp theo, hãy chọn những loại thức ăn và đồ uống cung cấp ít calo hơn nhu cầu hàng ngày của bạn. Ví dụ, nếu nhu cầu calo tiêu thụ hàng ngày của bạn là 2100 kcal, hãy cố gắng giảm tổng lượng calo đó xuống 300-500 kcal. Giảm tới 500 kcal mỗi ngày sẽ giúp bạn giảm tới 0,5-1 kg cân nặng mỗi tuần.
    <br><strong>Nhu cầu calo tối thiểu của mỗi người là bao nhiêu?</strong> <br>Trung bình, nữ giới cần khoảng 2000 kcal mỗi ngày, trong khi nam giới cần tới 2500 kcal mỗi ngày. Tuy nhiên, mỗi người cần tối thiểu 1200 kcal mỗi ngày để duy trì các chức năng chính của cơ thể. Tiêu thụ ít hơn 1200 kcal mỗi ngày sẽ có tác động xấu đến cơ thể của bạn.`,
  },
];
form.onsubmit = (e) => {
  e.preventDefault();
  var getGender = document.querySelectorAll("input[type='radio']:checked");
  if (getGender[0]?.id != undefined) {
    console.dir(getGender[0]?.id);
  } else {
    alert("Bạn chưa chọn giới tính");
  }
  var ageNumber = form.ageNumber.value;
  var weightNumber = form.weightNumber.value;
  var heightNumber = form.heightNumber.value;
  var bmiNumber = (
    (weightNumber * 10000) /
    (heightNumber * heightNumber)
  ).toFixed(1);
  var bmi = Number(bmiNumber);
  console.log(ageNumber);
  console.log(weightNumber);
  console.log(heightNumber);
  console.log(bmi);

  document.getElementById("tab1").style.display = "none";
  document.getElementById("container").style.display = "block";
  document.getElementById("how").style.display = "block";
  document.getElementById("span_bmi").innerText = bmi;

  for (let i = 0; i < getData.length; i++) {
    if (
      bmi > getData[i].bmi_min &&
      bmi < getData[i].bmi_max &&
      getGender[0].id == getData[i].gender
    ) {
      underweight_image.src = getData[i].under_weight;
      healthy_image.src = getData[i].healthy;
      overweight_image.src = getData[i].overweight;
      obese_type1_image.src = getData[i].obese_type1;
      obese_type2_image.src = getData[i].obese_type2;
      status.innerHTML = getData[i].status;
      risk.innerHTML = getData[i].risk;
      recommend.innerHTML = getData[i].recommend;
    }
  }
  let width_slide = document.getElementsByClassName("underweight-slide")[0].clientWidth + document.getElementsByClassName("healthy-slide")[0].clientWidth + document.getElementsByClassName("overweight-slide")[0].clientWidth + document.getElementsByClassName("obese1-slide")[0].clientWidth + document.getElementsByClassName("obese2-slide")[0].clientWidth;
  let a = 100 * bmi /40;
  console.log(a);
  console.log(width_slide);
  var t = setInterval(move, 0.05);
      var pos = 0;
      let bmi_box = document.getElementById("bmi-box");
      bmi_box.innerHTML = bmi;
      function move() {
        bmi_box.style.left = pos + 1 + "%";
        if (pos >= a || pos >= width_slide) {
          clearInterval(t);
        } else {
          pos += 1;
          bmi_box.style.left = pos + "%";
          console.log(pos);

        } 
      }
};

//dropdown solution//
function status_click() {
  if ((document.getElementById("status").style.display == "none")) {
    document.getElementById("status").style.display = "block";
    document.getElementById("status-dropdown").src = "./close.png";
  } else {
    document.getElementById("status").style.display = "none";
    document.getElementById("status-dropdown").src = "./dropdown.png";
  }
}

function risk_click() {
  if ((document.getElementById("risk").style.display == "none")) {
    document.getElementById("risk").style.display = "block";
    document.getElementById("risk-dropdown").src = "./close.png";
  } else {
    document.getElementById("risk").style.display = "none";
    document.getElementById("risk-dropdown").src = "./dropdown.png";
  }
}

function recommend_click() {
  if ((document.getElementById("recommend").style.display == "none")) {
    document.getElementById("recommend").style.display = "block";
    document.getElementById("recommend-dropdown").src = "./close.png";
  } else {
    document.getElementById("recommend").style.display = "none";
    document.getElementById("recommend-dropdown").src = "./dropdown.png";
  }
}
