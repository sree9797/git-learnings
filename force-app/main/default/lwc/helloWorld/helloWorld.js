import { LightningElement, track } from "lwc";
export default class HelloWorld extends LightningElement {
  fullName = "Sree Chandu";
  changeHandler(event) {
    this.fullName = event.target.value;
  }
  @track address = {
    city: "Madanapalli",
    Zipcode: 517325,
    State: "Andhra Pradesh"
  };
  address1 = {
    city: "Madanapalli",
    Zipcode: 517325,
    State: "Andhra Pradesh"
  };
  changeTrackHandler(event) {
    this.address.city = event.target.value;
  }
  changeTrackHandlerAvoid(event) {
    this.address1 = { ...this.address1, city: event.target.value };
  }
  users = ["Sree", "Chandu", "Karan"];
  num1 = 10;
  num2 = 20;
  get firstUser() {
    return this.users[0].toUpperCase();
  }
  get sumNumbers() {
    return this.num1 + this.num2;
  }
}
