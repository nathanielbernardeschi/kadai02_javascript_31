const a = [];
 
// htmlの読み込み時に実行すること
function load() {
    // localStoprageからkeyに対する値を読み出す
    let ls = localStorage.getItem("date");
    if(ls != null){
        // 読み出した値をJSON.parseして配列に代入
        a = JSON.parse(ls);
    } else {
        a = [];
    }
    show();
}
 
// 「登録」ボタンクリック時の関数
function input() {
    if(document.getElementById("shopDate").value == "" || document.getElementById("shopName").value == "") {
        alert("必須項目にデータがありません");
    } else {
        a.push({"shopDate" : document.getElementById("shopDate").value, "shopName" : document.getElementById("shopName").value, "shopType" : document.getElementById("shopType").value, "evaluation" : document.getElementById("evaluation").value,"shopMemo" : document.getElementById("shopMemo").value});
        save();
    }
}
 
// 「削除」ボタンクリック時の関数配列から
function deleteValue(x) {
    a.splice(x, 1);
    save();
}
 
// 配列aの要素を昇順に並べてテーブル形式で画面に表示
function show() {
    let s = '<table border>' +
             '<tr><th>利用日</th><th>お店の名前</th><th>ジャンル</th><th>マイ評価</th><th>備考</th><th>削除</th></tr>';
    sorting();
	
	 
    for (let i = 0; i < a.length; i++) {
        s += '<tr>';
        for(let p in a[i]) {
            s += '<td>' + a[i][p] + '</td>';
        }         
        s += '<td><button type="button" onclick="deleteValue(' + i + ')">削除</button></td>';
        s += '</tr>';         
    }
     
    s += '</table>';
    document.getElementById("output").innerHTML = s;
}
 
 
// 配列aをlocalStorageに保存して、昇順に並べて画面に表示
function save() {
    localStorage.setItem("shopName" ,JSON.stringify(a));
    show();
}
 
// 配列の要素を昇順に並び替え
function sorting() {
    for(let i = 0; i < a.length; i++) {
        a[i] = JSON.stringify(a[i]);
    }
    a.sort();   //sortメソッド：並び替え（昇順）
    for(i = 0; i < a.length; i++) {
        a[i] = JSON.parse(a[i]);
    }
}