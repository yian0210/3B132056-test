var user = {
    name: '李羿鞍',
    age: '21',
    showMsg: function(){
        alert("hi, 我是" + this.name + ", 今年" + this.age + "歲");
    }
};

document.getElementById("name").placeholder = user.name;
document.getElementById("age").placeholder = user.age;
document.getElementById("user").innerHTML = user.name + "<br>" + user.age + "歲<br>";

var score = {
    chinese: 99,
    english: 95,
    math: 100,
    showMsg:function(){
        alert("國文" + this.chinese + "、英文" + this.english + "、數學" + this.math);
    }
}