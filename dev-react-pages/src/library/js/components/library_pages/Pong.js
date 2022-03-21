import React, { useRef, useEffect, useState} from 'react';
import create from 'zustand';

const useStore = create(()=>({
    selectCanvas(selected){
        // console.log(selected)
        return selected
    }
}))


const Pong = () => {
    const {selectCanvas} = useStore();
    
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState();
    // const [start, setBtn] = useState(false);

    const theCanvas = document.getElementById('canvas_1');
    selectCanvas(theCanvas);

    // const handleOnClick = () => {
    //     setBtn((prev) => !prev);
    // }


    useEffect(()=> {
        document.addEventListener("keydown",_onKeyDown);

        if (canvasRef.current) {
            const renderCtx = canvasRef.current.getContext("2d");
            // canvasRef.current.width = 500;
            // canvasRef.current.height = 500;
            if (renderCtx) {
                setCtx(renderCtx);
            }
        }
        let gballvx = 2; let gballvy = 1;
        let gballd = Math.hypot(gballvx,gballvy);
        let ball = {
            ballX: 250,
            ballY: 250,
            ballRadi: 25,
            ballvx : gballvx,
            ballvy : gballvy,
            ballDraw : function () {
                if (ctx) {
                    ctx.beginPath();
                    ctx.arc(this.ballX,this.ballY,this.ballRadi, 0 ,2*Math.PI);
                    ctx.closePath();
                    ctx.fill();
               }
            }
        }
        let bar = {
            barx1 : 200, bary1 : 200,
            barx2 : 200, bary2 : 200,
            barGap : 10,
            barLside : 100, barSside : 15,
            barDraw : function () {
                if (ctx) {
                    if (ctx) ctx.fillRect(this.barx1, this.barGap, this.barLside, this.barSside);
                    if (ctx) ctx.fillRect(475, this.bary1, this.barSside, this.barLside);
                    if (ctx) ctx.fillRect(this.barx2, 475, this.barLside, this.barSside);
                    if (ctx) ctx.fillRect(this.barGap, this.bary2, this.barSside, this.barLside);

                    if ((this.barx1+100) >= 500) {
                        if(ctx) ctx.fillRect((this.barx1-500), 10, 100, 15);
                        if (this.barx1>=500) {this.barx1 = 0}
                    }
                    if ((this.bary1+100) >= 500) {
                        if(ctx) ctx.fillRect(475, (this.bary1-500), 15, 100);
                        if (this.bary1 >= 500) {this.bary1 = 0;}
                    }
                    if (this.barx2 <= 0) {
                        if(ctx) ctx.fillRect((this.barx2+500), 475, 100, 15);
                        if (this.barx2 <= -100) {this.barx2 = 500;}
                    }
                    if (this.bary2 <= 0) {
                        if(ctx) ctx.fillRect(10, (this.bary2+500), 15, 100);
                        if (this.bary2 <= -100) {this.bary2 = 500;}
                    }
                }
            }
        }
        function randomDirctionGenerator(min, max) {
            let result = Math.random() * (max - min) + min;
            result = Math.round(result);
            result = 0 ? result = 1 : result = result;
            return result
          }
        function newDGenerator(newNum , bvc) {
            let newD = Math.abs(Math.round(Math.sqrt(Math.abs((gballd*gballd) - (newNum * newNum)))));
            bvc < 0 ? newD = newD * 1 : newD = newD * -1;
            return newD;
        }

        function draw() {
            if (ctx) ctx.clearRect(0,0, theCanvas.width, theCanvas.height);
            bar.barDraw();
            ball.ballDraw();
            ball.ballX += ball.ballvx;
            ball.ballY += ball.ballvy;
            let newNum = 0;
            if (ball.ballX >= 500 || ball.ballX <= 0) {
                console.log('out')
                ball.ballX = 250;
                ball.ballY = 250;            
            }
            if (ball.ballY >= 500 || ball.ballY <= 0) {
                console.log('out')
                ball.ballX = 250;
                ball.ballY = 250;  
            }
            if ((ball.ballX + ball.ballRadi) >= (475) && ((ball.ballY > bar.bary1) && (ball.ballY < (bar.bary1 + bar.barLside)))) {
                console.log('hit')
                newNum = randomDirctionGenerator(-(gballvx+gballvy),(gballvx+gballvy));
                ball.ballvy = newNum;
                ball.ballvx = newDGenerator(newNum, ball.ballvx);               
            } else if ((ball.ballX - ball.ballRadi) <= (bar.barGap+bar.barSside) && ((ball.ballY > bar.bary2) && (ball.ballY < (bar.bary2 + bar.barLside)))) {
                console.log('hit')
                newNum = randomDirctionGenerator(-(gballvx+gballvy),(gballvx+gballvy));
                ball.ballvy = newNum;
                ball.ballvx = newDGenerator(newNum, ball.ballvx);
            }
            if ((ball.ballY + ball.ballRadi) >= (475) && ((ball.ballX > bar.barx2) && (ball.ballX < (bar.barx2 + bar.barLside)))) {
                newNum = randomDirctionGenerator(-(gballvx+gballvy),(gballvx+gballvy));
                ball.ballvx = newNum;
                ball.ballvy = newDGenerator(newNum, ball.ballvy);
            } else if ((ball.ballY - ball.ballRadi) <= (bar.barGap+bar.barSside) && ((ball.ballX > bar.barx1) && (ball.ballX < (bar.barx1 + bar.barLside)))) {
                newNum = randomDirctionGenerator(-(gballvx+gballvy),(gballvx+gballvy));
                ball.ballvx = newNum;
                ball.ballvy = newDGenerator(newNum, ball.ballvy);
            }
            requestAnimationFrame(draw);
        }
        draw()
        function _onKeyDown (e) {
                switch (e.key) {
                    case "ArrowUp":
                        bar.barx1 = bar.barx1 + 30;
                        break;
                    case "ArrowRight":
                        bar.bary1 = bar.bary1 + 30;                
                        break;
                    case "ArrowDown":
                        bar.barx2 = bar.barx2 - 30;                
                        break;
                    case "ArrowLeft":
                        bar.bary2 = bar.bary2 - 30;
                        break;
                    default:
                        break;
                }
        }
    },[ctx]);

    return (
        <div id="canvasDiv" style={{position:"relative"}}>
            <canvas 
            id={`canvas_1`}
            width={500} height={500}
            style={{border:"1px solid black",position:"absolute",left:"50%",transform:"translate(-50%,0)"}} 
            ref={canvasRef}
            />
            {/* <button onClick={handleOnClick}>start</button> */}
        </div>
    );
  }

export default Pong;