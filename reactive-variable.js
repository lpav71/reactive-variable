class ReactiveVariable {
    constructor(initialValue) {
        this._value = initialValue;
        this.listeners = [];
    }

    // Геттер и сеттер
    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
        this.notify();
    }

    // Метод для добавления слушателя
    addListener(listener) {
        this.listeners.push(listener);
    }

    // Метод для уведомления всех слушателей об изменении значения
    notify() {
        this.listeners.forEach(listener => listener(this._value));
    }

    // Метод для связывания полей ввода и отображения
    bind(inputElement = null, displayElement = null) {
        if (displayElement) {
            this.addListener((newValue) => {
                if (inputElement) {
                    inputElement.value = newValue; // Обновление поля ввода
                }
                displayElement.textContent = `Значение: ${newValue}`; // Обновление отображаемого значения
            });
        }

        // Обработчик изменений для поля ввода
        if (inputElement) {
            inputElement.addEventListener('input', () => {
                this.value = inputElement.value; // Установка нового значения
            });
        }
    }
}
