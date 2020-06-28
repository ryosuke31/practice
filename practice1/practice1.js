// 実行ボタンのIDを取得
const btn = document.getElementById('btn');

// クリックイベント
btn.addEventListener('click', () => {
  // DOM
  const fizz_num = document.getElementById('fizz_num');
  const fizz = fizz_num.value;
  const buzz_num = document.getElementById('buzz_num');
  const buzz = buzz_num.value;
  const output = document.getElementById('output');

  // 値を代入する変数を宣言
  let val = '';

  // fizzとbuzzの値が空ならば、outputの中身を空にして注意文を表示する
  if (!fizz || !buzz) {
    output.innerHTML = '';
    output.innerHTML = '<p>整数値を入力してください</p>'

    // fizzとbuzzの値が数字以外ならば、outputの中身を空にして注意文を表示する
  } else if (fizz.match(/^\D+$/) || buzz.match(/^\D+$/)) {
    output.innerHTML = '';
    output.innerHTML = '<p>整数値を入力してください</p>'

  // fizzとbuzzの値が小数ならば、outputの中身を空にして注意文を表示する 
  } else if (fizz.match(/^-?[0-9]+\.[0-9]+$/) || buzz.match(/^-?[0-9]+\.[0-9]+$/)) {
    output.innerHTML = '';
    output.innerHTML = '<p>整数値を入力してください</p>'

  // fizzとbuzzの値が整数値の場合
  } else {
    // outputの中身を空にする
    output.innerHTML = '';

      // 変数iを宣言し、iに1を代入。iが100未満なら+1を繰り返す
      for (let i = 1; i < 100; i++) {

        // iがfizzとbuzzの倍数なら、valに文字列とiを代入
        if (i % fizz === 0 && i % buzz === 0) {
          val = 'FizzBuzz' + ' ' + i;

        // iがfizzの倍数なら、valに文字列とiを代入
        } else if (i % fizz === 0) {
          val = 'Fizz' + ' ' + i;

        // iがbuzzの倍数なら、valに文字列とiを代入
        } else if (i % buzz === 0) {
          val = 'Buzz' + ' ' + i;
        
        // iがfizzとbuzzの倍数でないなら、valを空にする
        } else {
          val = '';
        }

        // li要素を作成する定数liを宣言
        const li = document.createElement('li');

        // outputの子要素にliを追加
        output.appendChild(li);

        // liのテキストにvalを代入
        li.textContent = val;      
      }
  }
})