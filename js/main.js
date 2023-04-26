"use strict";

// $("#book-message").on("click",function(){
//     let phase = 0;
//     let message1 = "";
//     let message2 = "";
//         function setmessage(v1,v2){
//         message1 = v1;
//         message2 = v2;
//     }
//     if(phase==0){
//         setmessage("ゲーム","スタート");
//         $("#book-mes").html(setmessage);
//     }
// });

//turn.js起動
$("#book").turn({
    width: 1200,
    height: 800,
    duration: 2000,
    elevation: 50,
    autoCenter: true,
    gradient: true
});
//saveクリックイベント
$("#save").on("click",function(){
    const key = $("#key").val();
    const memo = $("#memo").val();
    localStorage.setItem(key,memo);
    const h = '<tr><td>'+key+'</td><td>'+memo+'</td></tr>';
    $("#list").append(h);
});
//データ取得
for(let i=0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const h = '<tr><td>'+key+'</td><td>'+value+'</td></tr>'
    $("#list").append(h);
}
//-------------------------------------------------------//       

// localStorageの配列からランダムに一つ取り出したい
$("#book-btn").on("click",function(){

    // for(let i=0; i<localStorage.length; i++){

    const r = Math.floor( Math.random()*localStorage.length );

    //index番号からkey名を取得
    const key = localStorage.key(r);
    //key名がわかったのでvalueが取れる
    const value = localStorage.getItem(key);
    // const h = 
    $("#view").html(key);
    console.log();
    // }
});

//-------------------------------------------------------//
//おみくじイベント(復習)
$("#book-h3").on("click",function(){
    const s = ["ハンバーグ","からあげ","スシ","サラダ","ラーメン"];
    const sh = Math.floor(Math.random()*5);
    $("#viewp").html(s[sh]);
});
//じゃんけん機能(復習)
// $("#btn-que").on("click",function(){
//     // const q = Math.floor(Math.random()*3);
//     let view1 = "";
//     let result1 = "";
//     let result2 = "";
//     if(r==1){
//         view1="ハンバーグ";
//         result1="美味しい"
//         result2="普通"
//     }


// });
// $("#btn-que").on("click",function(){
//     const correct = "正解です"
//     const incorrect = "不正解です"
//     const ff = Math.floor(Math.random()*3);
//     if(ff==1){
//         console.log(correct);
//         $("#a").html(correct);
//     }

// });

// clear クリックイベント
$("#clear").on("click",function(){
    // alert("ok")
    $("#clear").on("click",function(){
        localStorage.clear();
        $("#list").empty();
        $("#key").val("");
        $("#memo").val("");
    })
});




