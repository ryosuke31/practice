// 追加ボタンの要素を取得
const add = document.getElementById('add');

// 追加ボタンクリック時のイベント
add.addEventListener('click', () => {

  // DOM
  const addComment = document.getElementById('add_comment');
  const tableList = document.getElementById('table_list');
  const workBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const tr = document.createElement('tr');
  const tdNumber = document.createElement('td');
  const tdComment = document.createElement('td');
  const tdStatus = document.createElement('td');
  const tdDelete = document.createElement('td');
  
  // 追加タスクのオブジェクトをまとめる配列を作成
  const todos = [];

  // 追加タスクをオブジェクトで作成
  const todo = {
    task: addComment.value,
    status: '作業中'
  };
  
  // タスクが空欄だった場合、処理を行わずに戻す
  if (addComment.value === '') {
    return;
  }

  // 追加タスクがあれば、todosに追加して入力欄の値を空にする
  if (todo) {
    todos.push(todo);
    addComment.value = '';
  }


  // タスク一覧を表示するための関数を宣言
  const displayTodos = () => {

    // todos内の配列を一つずつ取り出す
    todos.forEach((todo) => {
      
      // ID用tdにクラスを追加
      tdNumber.classList.add('id_number');

      // ID用tdにクラスの配列要素数の文字列を代入
      tdNumber.textContent = document.getElementsByClassName('id_number').length;

      // コメント用tdにtodoのtaskを代入
      tdComment.textContent = todo.task;

      // 状態用ボタンにtodoのstatusを代入
      workBtn.textContent = todo.status;

      // 削除ボタンの文字列代入
      deleteBtn.textContent = '削除';

      // table_listの子要素にID,コメント,状態,削除を追加
      tdStatus.appendChild(workBtn);
      tdDelete.appendChild(deleteBtn);
      tr.appendChild(tdNumber);
      tr.appendChild(tdComment);
      tr.appendChild(tdStatus);
      tr.appendChild(tdDelete);
      tableList.appendChild(tr);
    })
  }

  // 関数呼び出し
  displayTodos();
})


