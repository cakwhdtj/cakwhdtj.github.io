import React, { useRef, useEffect, useState} from 'react';
import create from 'zustand';

const useStore = create(()=>({
    selectCanvas(selected){
        return selected
    }
}))


const Pong = () => {
    const {selectCanvas} = useStore();
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState();
    const theCanvas = document.getElementById('canvas_1');
    selectCanvas(theCanvas);

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
        let iballvx = -.5; let iballvy = 2;
        let isum = Math.abs(iballvx) + Math.abs(iballvy);
        let gballd = Math.hypot(iballvx,iballvy);
        let ball = {
            ballX: 250,
            ballY: 250,
            ballRadi: 15,
            ballvx : iballvx,
            ballvy : iballvy,
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
                        if (this.barx1>=500) {this.barx1 = 0;}
                    }
                    if ((this.bary1+100) >= 500) {
                        if(ctx) ctx.fillRect(475, (this.bary1-500), 15, 100);
                        if (this.bary1 >= 500) {this.bary1 = 0;}
                    }
                    if (this.barx2 <= 0) {
                        if(ctx) ctx.fillRect((this.barx2+500), 475, 100, 15);
                        if (this.barx2 <= -100) {this.barx2 = 400;}
                    }
                    if (this.bary2 <= 0) {
                        if(ctx) ctx.fillRect(10, (this.bary2+500), 15, 100);
                        if (this.bary2 <= -100) {this.bary2 = 400;}
                    }
                }
            }
        }
        function randomDirctionGenerator(min, max) {
            let result = Math.random() * (max - min) + min;
            result = result.toFixed(0);
            result = parseFloat(result);
            // result > 0 ? result = 1 : result = -1;
            return result
          }


        function draw() {
            if (ctx) ctx.clearRect(0,0, theCanvas.width, theCanvas.height);
            
            bar.barDraw();
            ball.ballDraw();
            ball.ballX += ball.ballvx;
            ball.ballY += ball.ballvy;

            if ((ball.ballX > 500 || ball.ballX < 0) || (ball.ballY > 500 || ball.ballY < 0)) {
                ball.ballX = 250;
                ball.ballY = 250;            
            }
            if ((((ball.ballY + ball.ballRadi) > 472) && ((ball.ballX > bar.barx2) && (ball.ballX < (bar.barx2 + bar.barLside))))
                ||
                ((ball.ballY - ball.ballRadi) < (bar.barGap + bar.barSside + 3) && ((ball.ballX > bar.barx1) && (ball.ballX < (bar.barx1 + bar.barLside))))
            ){
                // hit x bar
                if (ball.ballX > 400 || ball.ballX < 100) {
                    ball.ballvx = -ball.ballvx * .9;
                } else {
                    let newD = randomDirctionGenerator(iballvx,iballvy);
                    ball.ballvx = newD;
                }
                ball.ballvy = -ball.ballvy;
                console.log(ball.ballvx,' & ', ball.ballvy)
            }
            if (((ball.ballX + ball.ballRadi) > (472) && ((ball.ballY > bar.bary1) && (ball.ballY < (bar.bary1 + bar.barLside))))
                || 
                ((ball.ballX - ball.ballRadi) < (bar.barGap+bar.barSside + 3) && ((ball.ballY > bar.bary2) && (ball.ballY < (bar.bary2 + bar.barLside))))
            ) {
                // hit y bar
                if (ball.ballY > 400 || ball.ballY < 100) {
                    ball.ballvy = -ball.ballvy * .9;
                } else {
                    let newD = randomDirctionGenerator(iballvx,iballvy);
                    ball.ballvy = newD;
                }
                ball.ballvx = -ball.ballvx;
                console.log(ball.ballvx,' & ', ball.ballvy)
            } 
            requestAnimationFrame(draw);
        }
        draw();
        function _onKeyDown (e) {
                switch (e.key) {
                    case "ArrowUp":
                        bar.barx1 = bar.barx1 + 50;
                        break;
                    case "ArrowRight":
                        bar.bary1 = bar.bary1 + 50;                
                        break;
                    case "ArrowDown":
                        bar.barx2 = bar.barx2 - 50;                
                        break;
                    case "ArrowLeft":
                        bar.bary2 = bar.bary2 - 50;
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
            {/* <button onClick={}>start</button> */}
        </div>
    );
  }

export default Pong;