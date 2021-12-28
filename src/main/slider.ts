export class BackgroundSlider {
  data: string[];
  constructor(data) {
    this.data = data;
    this.render();
  }
  render(): void {
    document.body.style.backgroundImage = `url(${this.data[0]})`;
    this.onTimeOut();
  }
  onTimeOut(): void {
    let num = 0;
    setInterval(() => {
      if (num === this.data.length - 1) {
        num = 0;
        document.body.style.backgroundImage = `url(${this.data[num]})`;
      } else {
        num++;
        document.body.style.backgroundImage = `url(${this.data[num]})`;
        console.log(num);
      }
    }, 5000);
  }
}
