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

        const longSide = 100; const shortSide = 15;
        const gap = 10;
        let x1 = 200; let x2 = 200;
        let y1 = 200; let y2 = 200;
        let ball = {
            ballX: 250,
            ballY: 250,
            ballRadi: 25,
            ballvx : 5,
            ballvy : 2,
            ballXDirection : true,
            ballYDirection : true,
            ballDraw : function () {
                if (ctx) {
                    ctx.beginPath();
                    ctx.arc(this.ballX,this.ballY,this.ballRadi,0,2*Math.PI);
                    ctx.closePath();
                    ctx.fill();
                    // (this.ballXDirection === true) ? this.ballX +=2 : this.ballX -=2;
                    // (this.ballYDirection === true) ? this.ballY +=2 : this.ballY -=2;
    
                    // if (this.ballX > 460) {this.ballXDirection = false}
                    // if (this.ballX < 40) {this.ballXDirection = true}
                    // if (this.ballY > 460) {this.ballYDirection = false}
                    // if (this.ballY < 40) {this.ballYDirection = true}    
                }
            }
        }
        const bar = () => {
            if (ctx) ctx.fillRect(x1, gap, longSide, shortSide);
            if (ctx) ctx.fillRect(475, y1, shortSide, longSide);
            if (ctx) ctx.fillRect(x2, 475, longSide, shortSide);
            if (ctx) ctx.fillRect(gap, y2, shortSide, longSide);

            if ((x1+100) >= 500) {
                if(ctx) ctx.fillRect((x1-500), 10, 100, 15);
                if (x1>=500) {x1 = 0}
            }
            if ((y1+100) >= 500) {
                if(ctx) ctx.fillRect(475, (y1-500), 15, 100);
                if (y1 >= 500) {y1 = 0;}
            }
            if (x2 <= 0) {
                if(ctx) ctx.fillRect((x2+500), 475, 100, 15);
                if (x2 <= -100) {x2 = 400;}
            }
            if (y2 <= 0) {
                if(ctx) ctx.fillRect(10, (y2+500), 15, 100);
                if (y2 <= -100) {y2 = 400;}
            }
        }
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
        function draw() {
            if (ctx) ctx.clearRect(0,0, theCanvas.width, theCanvas.height);
            bar();
            ball.ballDraw();
            ball.ballX += ball.ballvx;
            ball.ballY += ball.ballvy;

            if (ball.ballY + ball.ballvy > 500 || ball.ballY + ball.ballvy < 0) {
                ball.ballvy = getRandomArbitrary(-3,3);
            }
            if (ball.ballX + ball.ballvx > 500 || ball.ballX + ball.ballvx < 0) {
                ball.ballvx = getRandomArbitrary(-3,3);
            }


            requestAnimationFrame(draw);
        }
        draw()
        function _onKeyDown (e) {
                if (e.key === "ArrowUp") {
                    x1 = x1 + 10;
                }
                if (e.key === "ArrowRight") {
                    y1 = y1 + 10;                
                }
                if (e.key === "ArrowDown") {
                    x2 = x2 - 10;                
                }
                if (e.key === "ArrowLeft") {
                    y2 = y2 - 10;
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