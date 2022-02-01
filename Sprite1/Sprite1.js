/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 71.75122103081543,
        y: 37.051493474574215
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "GOOOOOOOOOOO" },
        this.whenIReceiveGooooooooooo
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGooooooooooo() {
    this.goto(-157, 32);
    this.visible = true;
    this.size = 100;
    while (true) {
      if (this.touching("mouse")) {
        this.size += 4;
        if (this.size > 110) {
          this.size = 110;
        }
      } else {
        this.size += -4;
        if (this.size < 100) {
          this.size = 100;
        }
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("Play");
  }

  *whenIReceivePlay() {
    this.visible = false;
  }
}
