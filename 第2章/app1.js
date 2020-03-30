// 変数の書き方
var hello = 'Hello World'
alert(hello);

// 四則演算の書き方
alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);

// 文字列を結合する
alert('Hello' + 'World');

var str1 = 'Hello';
var str2 = 'World!';
alert(str1 + str2);

// 条件分岐
var orange = 100;
var apple = 120;
if(orange < apple){
	alert('みかんの値段がりんごより安い');
}
else if(orange == apple){
	alert('みかんとリンゴが同じ値段');
}
else{
	alert('みかんの値段がリンゴより高い');
}

// 繰り返し処理
// while文：引数の条件がtrueの間、波括弧線内部の処理が繰り返される。
var max = 100;
var num = 1;
var count = 0;
while(num < max){
    num = num * 2;
    count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// for文：：決められた回数の処理を繰り返す
var i;
var num = 0;

for(i =1; i < 11; i++){
	num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');
