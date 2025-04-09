let initialBackgroundColor;

// ページが初めて読み込まれたときに呼び出される関数
export function onLoad() {
    initialBackgroundColor = document.body.style.backgroundColor;
}

// ページの更新時、または初回読み込み直後に呼び出される関数
export function onUpdate() {
    document.body.style.backgroundColor = '#FFF6FF';

    var itemsNoContent = document.getElementsByClassName('item-initial-content');
    for (const item of Array.from(itemsNoContent)) {
        item.className = 'item-js-content';
        item.innerHTML = 'Content from JS!';
    }
}

// ページの更新でスクリプトが削除されたときに呼び出される関数
export function onDispose() {
    document.body.style.backgroundColor = initialBackgroundColor;
}
