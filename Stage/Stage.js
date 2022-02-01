/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 240,
        y: 180
      }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180.79803204622073
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 270,
        y: 198.5
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 240,
        y: 198.5
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "GOOOOOOOOOOO" },
        this.whenIReceiveGooooooooooo
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay)
    ];

    this.vars.myVariable = 0;
  }

  *whenIReceiveGooooooooooo() {
    this.costume = "backdrop1";
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop3";
  }

  *whenIReceivePlay() {
    this.costume = "backdrop2";
  }
}
