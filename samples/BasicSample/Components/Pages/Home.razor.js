// ページが初めて読み込まれたときに呼び出される関数
export function onLoad() {
    console.log('Home page load');
}

// ページの更新時、または初回読み込み直後に呼び出される関数
export function onUpdate() {
    console.log('Home page update');
}

// ページの更新でスクリプトが削除されたときに呼び出される関数
export function onDispose() {
    console.log('Home page dispose');
}
