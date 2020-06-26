// 追加ボタンの要素を取得
const add = document.getElementById('add');

// 追加ボタンクリック時のイベント
add.addEventListener('click', () => {

  // DOM
  const add_comment = document.getElementById('add_comment');
  const table_list = document.getElementById('table_list');
  const work_btn = document.createElement('button');
  const delete_btn = document.createElement('button');
  const tr = document.createElement('tr');
  const td_number = document.createElement('td');
  const td_comment = document.createElement('td');
  const td_condition = document.createElement('td');
  const td_delete = document.createElement('td');
  
  // 状態ボタンにテキスト代入
  work_btn.textContent = '作業中';
  delete_btn.textContent = '削除';

  // ID用tdにクラスを追加
  td_number.classList.add('id_number');

  // ID用tdのクラスの配列要素数を取得
  const id_number = document.getElementsByClassName('id_number').length;

  // 追加するテキストが空かチェック
  if (add_comment.value !== '') {

    // コメント用tdに入力された値を代入
    td_comment.textContent = add_comment.value;

    // 再入力のために値を空に戻す
    add_comment.value = '';

    // ID用tdにクラスの配列要素数を代入
    td_number.textContent = id_number;

    // table_listの子要素にID,コメント,状態,削除を追加
    td_condition.appendChild(work_btn);
    td_delete.appendChild(delete_btn);
    tr.appendChild(td_number);
    tr.appendChild(td_comment);
    tr.appendChild(td_condition);
    tr.appendChild(td_delete);
    table_list.appendChild(tr);
  }
})