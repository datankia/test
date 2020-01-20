'use strict';
// 実務上 constを使う

// 他人の定数変数と衝突しないよう全体を囲う
// グローバルスコープ変数、関数/if/whileなどはスコープが別れている
// 文字の連結は「＋」。改行＼n、タブ＼t、べき乗「＊＊」、変数＋＋、変数ーー、等しい＝＝＝、等しくない!==、かつ＆＆、もしくは｜｜
// 定数、const、変数、let、英数字＄_のみ、ハイフンNG、数字から始められない

// localStorage

  localStorage.setItem("name", "kkkkk");
  localStorage.getItem("name");
  localStorage.removeItem("name");
  localStorage.clear();
  // データ配列の取得
  localStorage.key(i);
  // データ配列の全部取得上、html上表示
  for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const html = "<tr><th>" + key + "</th><td>" + value + "</td></tr>";
    $("#id").append(html);
  }

// jQ
  // htmlの挿入
  $("#id").html();
  // 子要素の削除
  $("#id").empty();
  // タグの値を取得
  $("#id").val(); $("#id").val("挿入");
  // タグに値を追加挿入
  $("id").append(text0input);
  $("id").prepend(text0input);

// forループ
  let array = [];
  for(i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

// 引数から一定文字列の作成、joinで要素を繋ぐ文字
  Array(difficulty + 1).join("0");
  // 例、00が生成される
  let difficulty = 3;
  console.log(Array(difficulty + 1).join("0"));
  
// 新旧書き方、querySelectorの方が汎用的
mybtn = document.getElementById("mybtn");
mybth = document.querySelector("#mybtn")
// jqueryの場合、$=document.querySelector
mybtn = $("#mybtn").html()

// 乱数
function rand0num(n) {
  return Math.ceil(Math.random() * n);
}
const r = Math.ceil(Math.random() * 5);
console.log(r);

console.log("Hello world"+"from main.js!");
console.log('hello' + 'world');

// データ型を調べる
console.log(typeof 5);
// 文字から数値型へ変換（対象、何進数）
console.log(parseInt("5", "10"));

const score = 40;

if (score >= 80) {
  console.log('Great!');
} else if (score >= 60) {
  console.log('Good');
} else {
  console.log('OK');
}

score >= 80 ? console.log('Great!') : console.log('OK...!');
const signal = 'pink';
switch (signal) {
  case 'red':
    console.log('stop!');
    break;
  case 'yellow':
    console.log('caution!');
    break;
  case 'blue':
  case 'green':
    console.log('go!');
    break;
  // どれにもあてはまらない場合
  default:
    console.log('wrong signal!');
    break;
}
// 慣習的にiを使う、`${変数} 文字`にすると中の値や計算式を文字列に変換しつつ組み込んでくれる
// テンプレートリテラル｀｀

for (let i = 1; i <= 10; i++) {
  // console.log('hello');
  // console.log(i + ' hello');
  console.log(`${i} hello`);
}

let hp = 200;

while (hp > 0) {
  console.log(`${hp} HP left!`);
  hp -= 15;
}

for (let i = 1; i <= 10; i++) {
  // if (i === 4) {
  if (i % 3 === 0) {
    // 処理をスキップ
    continue;
  }
  if (i === 4) {
    break;
  }
  console.log(i);
}

// let/constは要らない、デフォルト値設定、関数内の変数は外で使えない
function showAd(message = 'AD') { // 仮引数
  console.log('----------');
  console.log(`--- ${message} ---`);
  console.log('----------');
}

showAd('Header AD'); // 実引数
showAd();

// 関数宣言はコロン不要だが、関数式は必要で無名関数！
function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
}

const sum1 = function(a, b, c) {
  return a + b + c;
};

const total = sum(1, 2, 3) + sum(3, 4, 5);

// アロー関数

// const sum = function(a, b, c) {
//   return a + b + c;
// };

// const sum = (a, b, c) => {
//   return a + b + c;
// };
// 簡便法、リターン１つの場合、関数宣言必要const
const sum2 = (a, b, c) => a + b + c;

// const double = function(a) {
//   return a * 2;
// };
const double = a => a * 2;
console.log(double(12));


// String型関連メソッド
let str = "datankia";
console.log(str.length);
// substr(開始、終了の前まで)
console.log(str.substr(0,4));
// 文字の一部を指定
console.log(str[1]);

// Dateオブジェクト
let d = new Date();
console.log(d);
console.log(d.getFullYear());
// 0 - 11
console.log(d.getMonth()); 
console.log(d.getDate());
// 0 - 6
console.log(d.getDay()); 
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
// UTC 1970/01/01 00:00:00からの経過ミリ秒
console.log(d.getTime()); 
d = new Date(2018, 11); // 2018/12/01 00:00:00
d.setHours(10, 20, 30); // 2018/12/01 10:20:30
d.setDate(32); // 2019/01/01 10:20:30
d.setDate(d.getDate() + 3); // 2019/01/04 10:20:30
console.log(d);
let d1 = new Date(2018, 11, 1);
let d2 = new Date(2018, 11, 10);
console.log((d2 - d1) / (24 * 60 * 60 * 1000));

// 一定間隔で実行させるメソッドsetInterval()、指定した時間の後１回だけ実行するsetTimeout()
// 関数が必要なのでまず作成
let i = 0;
let showTime = () => {
  console.log(new Date());
  i++;
  if (i > 2) {
    // 終わらせるタイミング
    clearInterval(timerId);
  }
};
// setInterval(関数括弧不要！つけると実行した結果を渡すことになってしまう、ミリ秒)
let timerId = setInterval(showTime, 1000);

// setTime
let showTime1 = () => console.log(new Date());
setTimeout(showTime1, 5000)

// 配列型もオブジェクトの一種、constでも中身の値は変更できる
let scores = [80, 90, 40];
console.log(scores.length);
console.log(scores[0]);
// データの追加、unshift先頭に、push末尾に
scores.unshift(100);
scores.push(200, 300);
console.log(scores);
// データの削除、shift先頭、pop末尾
scores.shift();
scores.pop();
console.log(scores);
// 配列の変更、１変更始める要素、２取り除きたい要素、３~追加する要素
// 例：110と120を３番と４番に入れる場合
scores.splice(2, 0, 110, 120);
console.log(scores);
// 例：90と110を取り除く、変数に代入も可能
let removed = scores.splice(1, 2);
console.log(scores, removed);
// for, foreach
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);}
  // forEachはメソッド、=>はリターン、２つ目の引数はインデックス
  scores.forEach((i0, j0) => {
    console.log(`${j0+1}番 : ${i0}点`);});
    scores.forEach((i0, j0) => console.log(`${j0+1}番 : ${i0}点`));
    // mapメソッド配列全ての要素に対して処理を行う
    scores = scores.map(i0 => i0*2); 
    scores.forEach((i0, j0) => console.log(`${j0+1}番 : ${i0}点`));
    // filterメソッド、trueの要素のみ抽出、例：３の倍数以外の点数抽出
    scores = scores.filter(i0 => i0 % 3 !== 0); 
    console.log(scores);
    // スプレッド演算子ドット３つ、値を参照でなく追加
    let scores2 = [10, ...scores]
    console.log(scores2);
    // 関数にも使える
    let a = [10, 20];
    sum = (a, b) => a + b;
    console.log(sum(...a));    
    // 分割代入、スプレッドと組み合わせ
    let numbers = [1, 2, 3, 8];
    let [b, c, ...rest0] = numbers;
    console.log(b);
    console.log(c);
    console.log(rest0);
    
    // オブジェクト型、説明を付けれる、キーと値
    const player = {
      name: "taguchi",
      score: 32,
    };
    // 参照方法
    console.log(player.name);
    console.log(player["name"]);
    // 追加方法
    player.email = 'taguchi@gmail.com';
    console.log(player);
    // 削除
    delete player.score;
    console.log(player);
    // 操作、既定Objectのstaticメソッド
    console.log(Object.keys(player));
    console.log(Object.values(player));
    console.log(Object.entries(player));
    Object.keys(player).forEach(key0 => console.log(`${key0}: ${player[key0]}`));
    // スプレッド演算子ドット３つ、値を参照でなく追加
    let player2 = {datankia: 100, title: "MR", ...player};
    console.log(player2);
    // 分割代入、スプレッドと組み合わせ
    let {datankia, title, ...other1} = player2;
    console.log(datankia, title, other1);
    
    // クラス、定義のみ、慣習的に最初は大文字
    class Player{
      // 初期化処理用メソッド
      constructor(name, score){
        this.name = name;
        this.score = score;
      }
      showInfo(){
        // 文字列中に引用するとき(`文字列${}`), シングルクオテーションでない！
        console.log(`name: ${this.name} score: ${this.score}`);
      }
      // staticメソッドならインスタンス化することなく使える！
      static showVersion() {
        console.log('Player class ver. 1.0');
      }
    }
    const taguchi = new Player("taguchi", 32);
    taguchi.showInfo();
    Player.showVersion();
    
    // クラス継承
    class SoccerPlayer extends Player{
      constructor(name, score, number) {
        // 親クラスプロパティの引用
        super(name, score);
        this.number = number;
      }
      kick(){
        if(this.score>90) {
          console.log("Goal!");
          return;
        } console.log("Close!");
      }
    }
    let tsubasa = new SoccerPlayer("tsubasa", 99, 10);
    tsubasa.kick();
    
    // エラー処理
    let aaa = 5;
    try {
      console.log(aaa.toUpperCase());
      // 慣習的にe、messageプロパティ
    } catch (e) {console.log(e.message)};
    
// Document Object Model / DOM
  // bodyとtitleはdocumentで指定不要
  // document.body.textContent = 'Hello';
  document.title = 'AuNeeds!';

  document.getElementById("Target");
  // 複数形に注目
  document.getElementsByClassName("box");
  // HTMLの要素名
  document.getElementsByTagName("li");
  // CSSセレクタ、最初に見つかった要素
  document.querySelector("h1").textContent = "AuNeeds!"
  // CSSセレクタ、複数要素
  document.querySelectorAll("li:nth-child(odd)").forEach(li =>{
    li.textContent = "li!";});
  // 親要素、子要素に対する指定
  let ul = document.querySelector('ul');
  console.log(ul.parentNode);
  console.log(ul.children);
  console.log(ul.children[0]);
    // HTMLColletionはforEachが使えない
    for (let i = 0; i < ul.children.length; i++) {
      console.log(ul.children[i].textContent);}
  // プロパティの操作、ハイフンあるものは代わりにハイフンなしと大文字に
    // タイトルはマウスオーバー時現れる文字
  let h1 = document.querySelector('h1');
  console.log(h1.title);
  h1.title = 'Changed!';
  h1.style.color = 'gray';
  h1.style.backgroundColor = 'pink';
  // カスタムデータ属性の扱い方 data-app-id="app01"
  console.log(h1.dataset.appId);
  h1.dataset.message = 'this is custom message!';
  // クラス属性操作className元に何があったか気にする必要
  let div = document.querySelector('div');
  div.className = 'box border-pink';
  // クラス属性操作classList元に何があったか気にしなくて良い
  div.classList.add('border-pink');
  // クラスの削除
  div.classList.remove('border-pink');
  div.classList.remove('box');
  // if (div.classList.contains('border-pink')) {
  //   div.classList.remove('border-pink');
  // } else {div.classList.add('border-pink');}
  
  // toggle、上記と同じ効果
  div.classList.toggle('border-pink');

  // 要素の生成createElement
  let p = document.createElement('p');
  p.textContent = 'Hello, hello, hello...';
  document.body.appendChild(p);

  let h2 = document.createElement('h2');
  h2.textContent = 'Sub Title';
  document.body.insertBefore(h2, p);

  // 要素のコピー
  let copy = p.cloneNode(true);
  // falseは空要素のコピー
  // let copy = p.cloneNode(false);
  document.body.insertBefore(copy, h2);
  // 要素の削除、親要素から指定指定いく
  document.body.removeChild(h2);

// フォームの操作
  let text = document.querySelector('input[type="text"]');
  let textarea = document.querySelector('textarea');
  console.log(text.value);
  console.log(textarea.value);
  // フォーカスを当てる
  text.focus();
  // 中身をデフォルトで選択
  text.select();
  // 入力できなくする
  text.disabled = true;

  // フォーム部品
  document.querySelectorAll('input[type="checkbox"]')[0].checked = true;
  // checkedでチェックしているかを操作
  document.querySelectorAll('input[type="radio"]')[1].checked = true;
  // selectboxの場合はselected
  document.querySelectorAll('select > option')[2].selected = true;

  // イベント処理
  let button = document.querySelector('button');
  // 無名関数を渡す() =>、dblclick、keypress、click
  button.addEventListener("keydown", () => {
    console.log('clicked!');});

  // イベントオブジェクトマウスの座標を取得
  div = document.getElementById("mouse_0");
  // イベントmousemove、引数e、x座標clientX、y座標clientY
  document.addEventListener('mousemove', e => {
    div.textContent = `${e.clientX}:${e.clientY}`;});

  // 実用例：もっと読む
  let aa = document.querySelector('a');
  let span = document.querySelector('span');
  aa.addEventListener('click', e => {
    // 要素既定の動作をキャンセル、この場合aタグのページ遷移操作を
    e.preventDefault();
    aa.classList.add('hidden');
    span.classList.remove('hidden');
  });