/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 71.75123103081543,
        y: 37.05150347457416
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Go" }, this.whenIReceiveGo),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Try Again" },
        this.whenIReceiveTryAgain
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenGreenFlagClicked() {}

  *whenthisspriteclicked() {
    this.broadcast("Go");
  }

  *whenIReceiveGo() {
    yield* this.askAndWait("Type your username");
    if (this.answer == "TheSansTalePro") {
      yield* this.askAndWait("Type your password");
      if (this.answer == 91548) {
        this.broadcast("GOOOOOOOOOOO");
        this.visible = false;
      } else {
        yield* this.sayAndWait("Wrong Password Try again", 2);
        this.broadcast("Try Again");
      }
    } else {
      yield* this.sayAndWait("Wrong Username Try again", 2);
      this.broadcast("Try Again");
    }
  }

  *whenIReceiveTryAgain() {
    this.broadcast("Go");
  }

  *whenGreenFlagClicked2() {
    if (this.stage.costumeNumber == 3) {
      this.visible = true;
    } else {
      this.visible = false;
    }
    this.goto(0, 0);
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

  *whenthisspriteclicked2() {
    this.broadcast("Go");
  }
}
