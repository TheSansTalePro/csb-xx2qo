/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 19.948717948717928,
        y: 19.5
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "Go" }, this.whenIReceiveGo),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Controls" },
        this.whenIReceiveControls
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePlay() {
    this.goto(0, 0);
    this.visible = true;
    this.broadcast("Controls");
  }

  *whenIReceiveGo() {
    this.visible = false;
  }

  *whenIReceiveControls() {
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.y += 3;
      }
      if (this.keyPressed("down arrow")) {
        this.y += -3;
      }
      if (this.keyPressed("right arrow")) {
        this.x += 3;
      }
      if (this.keyPressed("left arrow")) {
        this.x += -3;
      }
      yield;
    }
  }
}
