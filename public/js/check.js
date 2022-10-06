// 변수 세팅
const inputBoxs = document.querySelectorAll(".box form div");

const btn = document.querySelector("button");

let checkValue = document.querySelector(".passCh");

let checkList = [
    {
       check:/^[a-z,0-9]{6,16}$/,
       correct:"아이디가 올바르게 입력되었습니다.",
       wrong:"6~16자 / 영문 소문자, 숫자만 사용이 가능합니다" 
    },
    {
        check:/^[\w]{8,16}$/,
        correct:"비밀번호가 올바르게 입력되었습니다.",
        wrong:"8~16자 / 문자, 숫자, 특수 문자를 혼용해서 사용해야 합니다." 
    }
]

// 유효성 검사 시작
inputBoxs.forEach(function(el,index){
    el.querySelector("input").addEventListener("keyup",function(){
        let value = el.querySelector("input").value;
        let result = checkList[index].check.test(value);
        if (result) {
            el.querySelector("span").innerText = checkList[index].correct;
            el.querySelector("span").style.color = "green";
        }
        else {
            el.querySelector("span").innerText = checkList[index].wrong;
            el.querySelector("span").style.color = "red";
        }

        let pass = document.querySelector(".pass");
        if (checkValue == pass) {
            inputBoxs[2].querySelector("span").innerText = "비밀번호가 올바르게 입력되었습니다."
            inputBoxs[2].querySelector("span").style.color = "green";
        }
        else {
            inputBoxs[2].querySelector("span").innerText = "비밀번호를 다시한번 확인해 주세요"
            inputBoxs[2].querySelector("span").style.color = "red";
        }
    });
})