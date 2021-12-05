let target = document.querySelector("#dynamic")
// let stringArr=["Learn to HTML","Learn to CSS","Learn to JS","Learn to REACT","Learn to TypeScript"]
// 문자 랜덤 출력 선언 변수 
// let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
// 출력될 문자를 배열로 선언 변수
// let selectStringArr = selectString.split("")

function randomString(){
    let stringArr=["Learn to HTML","Learn to CSS","Learn to JS","Learn to REACT","Learn to TypeScript"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split("")
    return selectStringArr
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString())
}

// split된 문자들 호출 
function dynamic(randomArr){
    if(randomArr.length >0){
        target.textContent += randomArr.shift();  
        setTimeout(()=>{
            dynamic(randomArr)
        },80)
    }else{
        setTimeout(resetTyping,3000)
}
}
dynamic(randomString())

// 깜빡임
function blink(){
    target.classList.toggle("active") 
}
setInterval(blink,500);




/* classList.toggle은 add와 remove를 합친것  */
// classList는 class를 만들었다 삭제했다 하는것
// css 에서 가상으로 선택자를 만든후 js를 통해 toggle 이용
// split는 ("")를 기준해서 배열로 분리
/*shift는 배열이 있으면 앞에값부터 앞으로 빼놓음*/