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
  const td_status = document.createElement('td');
  const td_delete = document.createElement('td');
  
  // 追加タスクのオブジェクトをまとめる配列を作成
  const todos = [];

  // 追加タスクをオブジェクトで作成
  const todo =
  {
    task: add_comment.value,
    status: '作業中'
  };
  
  // タスクが空欄だった場合、処理を行わずに戻す
  if (add_comment.value === '') {
    return;
  }

  // 追加タスクがあれば、todosに追加して入力欄の値を空にする
  if (todo) {
    todos.push(todo);
    add_comment.value = '';
  }


  // タスク一覧を表示するための関数を宣言
  const displayTodos = () => {

    // todos内の配列を一つずつ取り出す
    todos.forEach((todo) => {
      
      // ID用tdにクラスを追加
      td_number.classList.add('id_number');

      // ID用tdのクラスの配列要素数を取得
      const id_number = document.getElementsByClassName('id_number').length;
      
      // ID用tdにクラスの配列要素数を代入
      td_number.textContent = id_number;

      // コメント用tdにtodoのtaskを代入
      td_comment.textContent = todo.task;

      // 状態用ボタンにtodoのstatusを代入
      work_btn.textContent = todo.status;

      // 削除ボタンのテキスト代入
      delete_btn.textContent = '削除';

      // table_listの子要素にID,コメント,状態,削除を追加
      td_status.appendChild(work_btn);
      td_delete.appendChild(delete_btn);
      tr.appendChild(td_number);
      tr.appendChild(td_comment);
      tr.appendChild(td_status);
      tr.appendChild(td_delete);
      table_list.appendChild(tr);
    })
  }

  // 関数呼び出し
  displayTodos();
})
