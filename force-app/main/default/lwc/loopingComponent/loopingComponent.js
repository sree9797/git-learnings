import { LightningElement } from "lwc";

export default class LoopingComponent extends LightningElement {
  carList = ["TATA", "Mahindra", "Hyundai", "KIA"];

  ceoList = [
    {
      id: 1,
      company: "TATA",
      ceo: "Ratan Tata"
    },
    {
      id: 2,
      company: "Google",
      ceo: "Sergei"
    },
    {
      id: 1,
      company: "Facebook",
      ceo: "Zuckerberg"
    },
    {
      id: 1,
      company: "Apple",
      ceo: "Steve Jobs"
    }
  ];
}
