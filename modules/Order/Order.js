import { addContainer } from "../addContainer";

export class Order {
	static instance = null;
	
	constructor() {
		if(!Order.instance) {
			Order.instance = this;
			this.element = document.createElement('section');
			this.element.classList.add("order");
			this.element.setAttribute("name", "order")
			this.containerElement = addContainer(this.element, "order__container");
			this. isMounted = false;
		}
		return Order.instance;
	}

	mount(parent) {
		if (this.isMounted) {
			return;
		}

		const orderHeader = document.createElement("div")
		orderHeader.classList.add("order__header")

		const orderHeaderTitle = document.createElement("h3")
		orderHeaderTitle.classList.add("order__title")
		orderHeaderTitle.textContent = "Заказ успешно размещен";

		const orderPrice = document.createElement("p");
		orderPrice.classList.add("order__price")
		orderPrice.textContent = `${Number(20000)} ₽`;

		orderHeader.append(orderHeaderTitle, orderPrice)

		const orderNumber = document.createElement("p")
		orderNumber.classList.add("order__number")
		orderNumber.textContent = `№${Number(43435)}`

		const orderData = document.createElement("div");
		orderData.classList.add("order__data")

		const orderTitle = document.createElement("h4");
		orderTitle.classList.add("order__data-title");
		orderTitle.textContent = "Данные доставки";

		const orderBtn = document.createElement("button");
		orderBtn.classList.add("order__button", "button");
		orderBtn.textContent = "На главную";
		orderBtn.type = "button"

		orderData.insertAdjacentHTML('beforeend', this.getOrderTable())
		this.containerElement.append(orderHeader, orderNumber,orderTitle, orderData, orderBtn);

		parent.append(this.element);
		this.isMounted = true;
	}

	unmount() {
		this.element.remove();
		this.isMounted = false;
	}

	getOrderTable() {
		return `
		<table class="order__data-table table">
		<tr class="table__row">
			<td class="table__field">Получатель</td>
			<td class="table__value">Иванов Петр Александрович</td>
		</tr>
		<tr class="table__row">
			<td class="table__field">Телефон</td>
			<td class="table__value">+7 (737) 346 23 00</td>
		</tr>
		<tr class="table__row">
			<td class="table__field">E-mail</td>
			<td class="table__value">Ivanov84@gmail.com</td>
		</tr>
		<tr class="table__row">
			<td class="table__field">Адрес доставки</td>
			<td class="table__value">Москва, ул. Ленина, 21, кв. 33</td>
		</tr>
		<tr class="table__row">
			<td class="table__field">Способ оплаты</td>
			<td class="table__value">Картой при получении</td>
		</tr>
		<tr class="table__row">
			<td class="table__field">Способ получения</td>
			<td class="table__value">Доставка</td>
		</tr>
	</table>
		`;
	}
}