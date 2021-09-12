function doAdd(){
    let a = document.getElementById('inputA').value; //변수는 값을 문자열로 받음.
    let b = document.getElementById('inputB').value;
    document.getElementById('valueA').innerHTML = a;
    document.getElementById('valueB').innerHTML = b;
    document.getElementById('valueC').innerHTML = Number(a) + Number(b); //내장 함수 사용
}