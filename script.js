// Пример использования
const reactiveVariable = new ReactiveVariable("");

// Элементы для ввода и отображения
const inputElement = document.getElementById('dynamic-input');
const displayElement = document.getElementById('display-value');

// Связываем элементы
reactiveVariable.bind(inputElement, displayElement);

setValue = () => {
    reactiveVariable.value = "New Text";
}

showVariable = () => {
    alert (reactiveVariable.value);
}