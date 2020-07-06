// 追加タスクのオブジェクトをまとめる配列を作成
const todos = [];

// DOM
const add = document.getElementById('add');
const addComment = document.getElementById('add_comment');
const tableList = document.getElementById('table_list');

// 追加ボタンクリック時のイベント
add.addEventListener('click', () => {

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
    displayTodos();
  }
})

// タスク一覧を表示するための関数を宣言
const displayTodos = () => {

  // 一度tableListを空にする
  tableList.innerHTML = '';
  
  // todos内の配列を一つずつ取り出す
  todos.forEach((todo) => {
    
    // DOM
    const workBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const tr = document.createElement('tr');
    const tdNumber = document.createElement('td');
    const tdComment = document.createElement('td');
    const tdStatus = document.createElement('td');
    const tdDelete = document.createElement('td');

    // ID用tdにクラスを追加
    tdNumber.classList.add('id_number');

    // ID用tdにクラスの配列要素数の文字列を代入
    tdNumber.textContent = document.getElementsByClassName('id_number').length + '';
    // 削除用tdにクラスを追加
    tdDelete.classList.add('delete');

    // 削除ボタンにクラスを追加
    deleteBtn.classList.add('delete_btn');

    // コメント用tdにtodoのtaskを代入
    tdComment.textContent = todo.task;

    // 状態用ボタンにtodoのstatusを代入
    workBtn.textContent = todo.status;

    // 削除ボタンの文字列代入
    deleteBtn.textContent = '削除';

    // 削除ボタンをクリックしたらその行のタスクを削除
    deleteBtn.addEventListener('click', () => {
      let index = tr.rowIndex - 1;
      todos.splice(index, 1);
      displayTodos();
    })

    // tableListの子要素にID,コメント,状態,削除を追加
    tdStatus.appendChild(workBtn);
    tdDelete.appendChild(deleteBtn);
    tr.appendChild(tdNumber);
    tr.appendChild(tdComment);
    tr.appendChild(tdStatus);
    tr.appendChild(tdDelete);
    tableList.appendChild(tr);
  })
}