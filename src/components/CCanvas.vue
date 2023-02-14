<template>
    <div class="canvas" id="app">
        <div><span>{{x}}, {{y}}</span></div>
        <div>        
            <canvas width="500" height="500" id="canvas" 
            @mousemove="keepDrawing" 
            @mousedown="beginDrawing" 
            @mouseup="stopDrawing">
        </canvas>
        </div>
        
        <div>
            <button @click="drawRect">Add Lines</button>
            <button @click="subWidth">-</button>
            <button @click="addWidth">+</button>
            <button @click="drawClear">C</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CCanvas",
        props:{},
        data() {
            return {
                canvas: null,
                x: 0,
                y: 0,
                isDrawing: false
            }
        },
        mounted() {
            var c = document.getElementById("canvas");
             this.canvas = c.getContext('2d');

            },
        // computed: {}
        methods: {
            drawLine(x1, y1, x2, y2) {
                let ctx = this.canvas;
                //поворот с сдвиг сис.координат
                // ctx.translate(0, ctx.height);
                // ctx.rotate(-Math.PI/2);
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 1;
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.closePath();
                
            },
            beginDrawing(e) {
                this.x = e.offsetX;// Coordinates
                this.y = e.offsetY;
                this.isDrawing = true;
            },
            keepDrawing(e) {
                if (this.isDrawing === true) {
                    this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
                    this.x = e.offsetX;
                    this.y = e.offsetY;
                }
            },
            stopDrawing(e) {
                if (this.isDrawing === true) {
                    this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
                    this.x = 0;
                    this.y = 0;
                    this.isDrawing = false;
                }
            },

            drawClear() {
                // clear canvas
                let ctx = this.canvas;
                ctx.clearRect(0, 0, 500, 500);
                },
            subWidth() {
                this.x =50 ;// showCoordinates
                this.y = 195;
                let delta = 20;
                let delta2 = 11;

                for(let x= 50; x < 450; x=x+1) { 
                    let y  = Math.cos(x/delta)+delta2;
                    y=y*delta;
                    // console.log(x, y);
                    this.drawLine(this.x, this.y, x, y);
                    this.x = x;
                    this.y = y;
                }
                },
            addWidth() {
                let delta = 200;
                let delta2 = 1;
                let delta3 = 100;
                this.x = delta3 + delta;
                this.y = delta3;

                for(let y= 1; y < 210; y=y+1) { 
                    let x = 3 * (y/delta) * (Math.log10(y/delta)) - (1 / 36) * Math.exp(-(Math.pow((36 * (y/delta) - (36 /2.71828182)), 4)))+delta2; // e=2.718281828459045 , Math.pow(Math.E,1)
                    // console.log("-",3 * (y/delta),(Math.log10(y/delta)));
                    x=x*delta+100;
                    y=y+delta3;
                    // console.log( y, x);
                    this.drawLine(this.y, this.x, y, x);
                    this.x = x;
                    this.y = y;
                     y=y-delta3;
                }

            },
            drawRect() {
                // console.profile();
                    // Some code to execute
                    let ctx = this.canvas;
                    ctx.fillStyle = "green"; // Задаём чёрный цвет для линий 
                    ctx.lineWidth = 1.5; // Ширина линии
                    ctx.beginPath(); // Запускает путь
                    ctx.moveTo(50, 30); // Указываем начальный путь
                    ctx.lineTo(50, 460); // Перемешаем указатель
                    ctx.lineTo(460, 460); // Ещё раз перемешаем указатель
                    ctx.stroke(); // Делаем контур
                    // // Здесь мы сделали линии, теперь надо добавить текст и цифры что бы понимать js графики и диаграммы.

                console.time("Execution time took");
                    // let y = 0;
                    let x =0;
                    // = 3 * y * (Math.log10(y)) - (1 / 36) * Math.exp(-(Math.pow((36 * y - (36 / Math.E)), 4))); // e=2.718281828459045 , Math.pow(Math.E,1)
                    console.log(x);

                    ctx.moveTo(1, 1);
                    for(let y=0; y<90; y++) { 
                        // y===i;
                        x = 3 * y * (Math.log10(y)) - (1 / 36) * Math.exp(-(Math.pow((36 * y - (36 / Math.E)), 4))); // e=2.718281828459045 , Math.pow(Math.E,1)
                        // x = 2+y;
                        ctx.lineTo(x, x * -10 + 10); 
                        ctx.moveTo(x+2, x * -10 + 10); 
                        // this.vueCanvas.fillText(labels[x], 50+ i*100, 475); 
                    }
                        // Some code to execute
                console.timeEnd("Execution time took");


                    // Цвет для рисования
                    ctx.fillStyle = "black";
                    // // Цикл для отображения значений по Y 
                    ctx.stroke(); 
                    // for(let i = 0; i < 6; i++) { 
                        ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
                        ctx.beginPath(); 
                        ctx.moveTo(25, i * 80 + 60); 
                        ctx.lineTo(30, i * 80 + 60); 
                    
                    
                    // // Массив с меткам месяцев
                    let labels = ["0", "1", "2", "3", "four"]; 
                    
                    // // Выводим меток
                    for(var i=0; i<5; i++) { 
                        ctx.fillText(labels[i], 50+ i*100, 475); 
                    }
                // console.profileEnd();
            }
        }
    }
   
</script>

<style scoped>
#canvas {
    border: 1px solid black;
}
</style>
