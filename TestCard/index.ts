import {Engine} from "@babylonjs/core";
import {createStartScene} from "./CreateStartScene";
//import {ShowInspector} from "@babylonjs/inspector";
import "./main.css"

const CanvasName = "renderCanvas";

let canvas = document.createElement("canvas");
canvas.id = CanvasName;
canvas.width = 800;
canvas.height = 600;

canvas.classList.add("background-canvas");
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";
document.body.appendChild(canvas);

let eng = new Engine(canvas, true, {}, true);
let startscene = createStartScene(eng)
eng.runRenderLoop(() => {startscene.render();});
//ShowInspector(startscene)