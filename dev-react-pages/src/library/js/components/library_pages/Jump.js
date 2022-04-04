import React, { useRef, useEffect, useState} from 'react';
import platformImg from './../../../img/random/platform.png';
import bg from './../../../img/random/background.png'
import hills from './../../../img/random/hills.png'
import { unset } from 'lodash';


const Jump = () => {
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState();
    const theCanvas = document.getElementById('canvas_jump');
    
    const gravity = .5;
    useEffect(()=> {
        document.addEventListener("keydown",_onKeyDown);
        document.addEventListener("keyup",_onKeyUp);
        function createImage(imgSrc) {
            const img = new Image();
            img.src = imgSrc;
            return img
        }


        if (canvasRef.current) {
            const renderCtx = canvasRef.current.getContext("2d");
            canvasRef.current.width = window.innerWidth - 100;
            canvasRef.current.height = 576;
            if (renderCtx) {
                setCtx(renderCtx);
            }
        }     

        const Player = {
            position : {
                x:100, 
                y:100
            },
            velocity : {
                x: 0,
                y: 0,
            },
            width : 30,
            height : 30,
            playerDraw : function() {
                if (ctx) {
                    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
                }
            }
        }
        const keys = {
            right: {
                pressed: false,
            },
            left: {
                pressed: false,
            },
            up: {
                pressed: false,
            },
            down: {
                pressed: false,
            } 
        }

        let scrollOffset = 0;

        const pImg = createImage(platformImg);
        class Platform {
            constructor({x,y},{w,h}) {
                this.position = {
                    x,
                    y
                };
                this.width = w;
                this.height = h;
            }
            platformDraw() {
                if (ctx) {
                    ctx.drawImage(createImage(platformImg), this.position.x, this.position.y, this.width, this.height)
                }
            }
        }
        const Score = {
            scoreDraw : function (text) {
                text < 0 ? text = 0 : text = text;
                if (ctx) {
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "black"
                    ctx.fillText(text, 10, 50);
                }
            }
        } 
        class GenericObjs {
            constructor({x,y},img) {
                this.position = {
                    x,
                    y
                };
                this.img = createImage(img);
            };
            gObjDraw() {
                if (ctx) ctx.drawImage(this.img, this.position.x, this.position.y);
            }
        }
        
        const GObjs = [
            new GenericObjs(
                {x:-1, y:-1},
                bg,),
            new GenericObjs(
                {x:-1, y:-1},
                hills,),
        ]  
        const Platforms = [
            new Platform(
                {x:200, y:300,},
                {w:200, h:20}
                ),
            new Platform(
                {x:600, y:400},
                {w:200, h:20}
                ),
            new Platform(
                {x:-1, y:530},
                {w:700, h:100}
                ),
        ];

        function draw() {
            if (ctx) ctx.clearRect(0,0, theCanvas.width, theCanvas.height);
            if (ctx) {ctx.fillStyle = 'red';}
       
            GObjs.forEach((gOs)=>{
                gOs.gObjDraw();
            })

            Player.playerDraw();
            Score.scoreDraw(Math.round(scrollOffset * .25));
            // Score.scoreDraw(Math.round(scrollOffset));

            Platforms.forEach((platform) => {
                platform.platformDraw();
            })
            Player.position.y += Player.velocity.y;
            Player.position.x += Player.velocity.x;



            if (Player.position.y + Player.height + Player.velocity.y <= (576 /*canvas height*/)) {
                Player.velocity.y += gravity;
            } else {
                Player.velocity.y = 0;
            }
            if (keys.right.pressed && Player.position.x < 400) {
                Player.velocity.x = 5;
            } else if (keys.left.pressed && Player.position.x > 100) {
                Player.velocity.x = -5;
            } else {
                Player.velocity.x = 0;
                if (keys.right.pressed) {
                    scrollOffset += 5;
                    Platforms.forEach((platform) => {
                        platform.position.x -= 5;
                    });
                    GObjs.forEach((gOs)=>{
                        gOs.position.x -= 3;
                    });
                } else if (keys.left.pressed) {
                    if (scrollOffset > 0) {
                        scrollOffset -= 5;
                        Platforms.forEach((platform) => {
                            platform.position.x += 5;
                        });
                        GObjs.forEach((gOs)=>{
                            gOs.position.x += 3;
                        });
                    }
                }
            }
            // platform collision detection
            Platforms.forEach((platform) => {
                if (Player.position.y + Player.height <= platform.position.y 
                && Player.position.y + Player.height + Player.velocity.y >= platform.position.y
                && Player.position.x + Player.width >= platform.position.x
                && Player.position.x <= platform.position.x + platform.width
                ) {
                Player.velocity.y = 0;
                }
            });

            if ((Math.round(scrollOffset * .25)) > 10000) {
                console.log('you win')
            }
            
            requestAnimationFrame(draw);
        }
        draw();

        function _onKeyDown (e) {
            switch (e.key) {
                case "ArrowUp":
                    Player.velocity.y -= 10;
                    break;
                case "ArrowRight":
                    keys.right.pressed = true;
                    break;
                case "ArrowDown":
                    break;
                case "ArrowLeft":
                    keys.left.pressed = true;
                    break;
                default:
                    break;
            }
        }
        function _onKeyUp (e) {
            switch (e.key) {
                case "ArrowUp":
                    break;
                case "ArrowRight":
                    keys.right.pressed = false;
                    break;
                case "ArrowDown":
                    break;
                case "ArrowLeft":
                    keys.left.pressed = false;
                    break;
                default:
                    break;
            }
        }
    },[ctx]);
    return (
        <div id="canvasDiv" style={{position:"relative"}}>
            <canvas 
            id={`canvas_jump`}
            style={{border:"1px solid black",position:"absolute",left:"50%",transform:"translate(-50%,0)"}} 
            ref={canvasRef}
            />
        </div>
    )
}

export default Jump;