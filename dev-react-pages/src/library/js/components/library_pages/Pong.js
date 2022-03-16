import React, { useRef, useEffect, useState} from 'react';
import create from 'zustand';

const useStore = create(()=>({
    selectCanvas(selected){
        console.log(selected)
        return selected
    }
}))


const Pong = () => {
    const {selectCanvas} = useStore();
    
    const canvasRef = useRef(null);
    // const contextRef = useRef(null);
    // const [ctx, setCtx] = useState();

    const theCanvas = document.getElementById('canvas_1');
    selectCanvas(theCanvas);

    useEffect(()=> {
        document.addEventListener("keydown",_onKeyDown);

        
        const myCanvas1 = canvasRef.current;
        const myCanvas2 = canvasRef.current;
        myCanvas1.width = 500;
        myCanvas1.height = 500;
        
        const context = myCanvas1.getContext("2d");
        context.fillStyle = 'black';
        const context2 = myCanvas2.getContext("2d");
        context2.fillStyle = 'black';

        const longSide = 100; const shortSide = 15;
        const gap = 10;
        let x1 = 200; let x2 = 200;
        let y1 = 200; let y2 = 200;
        let bar1 = context.fillRect(x1, gap, longSide, shortSide);
        let bar2 = context.fillRect(475, y1, shortSide, longSide);
        let bar3 = context.fillRect(x2, 475, longSide, shortSide);
        let bar4 = context.fillRect(gap, y1, shortSide, longSide);

        const corner = () => {
            context2.fillRect(0,0,25,25);
            context2.fillRect(475,0,25,25);
            context2.fillRect(0,475,25,25);
            context2.fillRect(475,475,25,25);
        }
        corner();


        function _onKeyDown (e) {
            if (e.key === "ArrowUp") {
                clearCanvas(x1,10,100,15);
                x1 = x1 + 10;
                bar1 = context.fillRect(x1, 10, 100, 15);
                if ((x1+100) >= 500) {
                    context.fillRect((x1-500), 10, 100, 15);
                    if (x1 >= 500) {x1 = 0;}
                }
            }
            if (e.key === "ArrowRight") {
                clearCanvas(475, y1, 15, 100);
                y1 = y1 + 10;
                bar2 = context.fillRect(475, y1, 15, 100);
                if ((y1+100) >= 500) {
                    context.fillRect(475, (y1-500), 15, 100);
                    if (y1 >= 500) {y1 = 0;}
                }
            }
            if (e.key === "ArrowDown") {
                clearCanvas((x2+90), 475, 100, 15);
                x2 = x2 - 10;
                bar3 = context.fillRect(x2, 475, 100, 15);
                if (x2 <= 0) {
                    context.fillRect((x2+500), 475, 100, 15);
                    if (x2 <= -100) {x2 = 400;}
                }
            }
            if (e.key === "ArrowLeft") {
                clearCanvas(10, y2, 15, 100);
                y2 = y2 - 10;
                bar4 = context.fillRect(10, y2, 15, 100);
                if (y2 <= 0) {
                    context.fillRect(10, (y2+500), 15, 100);
                    if (y2 <= -100) {y2 = 400;}
                }
            }
        }
   
        function clearCanvas(initX,initY,initW,initH) {
            let xtC = initX;
            let ytC = initY;
            context.clearRect((xtC), (ytC), initW, initH);
            corner();
        } 

        // setCtx(contextRef.current);
    },[]);

    

    return (
        <div id="canvasDiv" style={{position:"relative"}}>
            <canvas 
            id={`canvas_1`}
            style={{border:"1px solid black",position:"absolute",left:"50%",transform:"translate(-50%,0)"}} 
            ref={canvasRef}
            />
        </div>
    );
  }

export default Pong;