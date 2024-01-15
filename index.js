import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Level from "./Level/Level.js";
import Raycaster from "./Raycaster/Raycaster.js";
import LevelColor from "./LevelColor/LevelColor.js";
import OperationsSprite from "./OperationsSprite/OperationsSprite.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Player: new Player({
    x: 0,
    y: 0,
    direction: 45,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Level: new Level({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Raycaster: new Raycaster({
    x: 238,
    y: -39.11338014084841,
    direction: 75,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  LevelColor: new LevelColor({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  OperationsSprite: new OperationsSprite({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
