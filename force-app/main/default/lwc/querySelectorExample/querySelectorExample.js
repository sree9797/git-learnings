import { LightningElement } from "lwc";

export default class QuerySelectorExample extends LightningElement {
  userNames = ["Sree", "Chandu", "Karan", "Kumar"];
  handleClick() {
    const ele = this.template.querySelector("h1");
    ele.style.border = "1px solid cyan";
    console.log(ele.innerText);

    const userEle = this.template.querySelectorAll(".name");
    Array.from(userEle).forEach((element) => {
      element.setAttribute("title", element.innerText);
      console.log(element.innerText);
    });

    //lwc:dom manual
    const childEle = this.template.querySelector(".child");
    childEle.innerHTML = "<p> This dynamic Para</p>";
  }
}
