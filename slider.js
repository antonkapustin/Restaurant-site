export class BackgroundSlider {
    constructor(data){
        this.data = data
        this.render()
    }
    render(){
        this.onTimeOut()
        console.log(this.data.length)
    }
    onTimeOut(){
        let num = 0;
        setInterval(()=>{
            if(num === (this.data.length-1)){
                num = 0
                document.body.style.backgroundImage = `url(${this.data[num]})`;
            }else{
            num++
            document.body.style.backgroundImage = `url(${this.data[num]})`;
            console.log(num)
            }
        },50000)
    }
}
