import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Sprite1: new Sprite1({
    x: -157,
    y: 32,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite3: new Sprite3({
    x: 3,
    y: 126,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite4: new Sprite4({
    x: 0,
    y: 177,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite5: new Sprite5({
    x: -236.5366312004585,
    y: -0.5057024262298313,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
