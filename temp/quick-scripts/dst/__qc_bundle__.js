
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4308wyeQNNd65v0HzlC+0u', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // This property quotes the PreFab resource of stars
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // The random scale of disappearing time for stars
    maxStarDuration: 0,
    minStarDuration: 0,
    // Ground node for confirming the height of the generated star's position
    ground: {
      "default": null,
      type: cc.Node
    },
    // Player node for obtaining the jump height of the main character and controlling the movement switch of the main character
    player: {
      "default": null,
      type: cc.Node
    },
    // Reference of score label
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // Scoring sound effect resource
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  spawnNewStar: function spawnNewStar() {
    // Generate a new node in the scene with a preset template
    var newStar = cc.instantiate(this.starPrefab); // Put the newly added node under the Canvas node

    this.node.addChild(newStar); // Set up a random position for the star

    newStar.setPosition(this.getNewStarPosition()); // Save a reference of the Game object on the Star script component

    newStar.getComponent('Star').game = this; // Reset timer, randomly choose a value according the scale of star duration

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // According to the position of the ground level and the main character's jump height, randomly obtain an anchor point of the star on the y axis

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // According to the width of the screen, randomly obtain an anchor point of star on the x axis

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // Return to the anchor point of the star

    return cc.v2(randX, randY);
  },
  gameOver: function gameOver() {
    // Stop the jumping action of the Player node
    this.player.stopAllActions(); // reload the "game" scene

    cc.director.loadScene('game');
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // Obtain the anchor point of ground level on the y axis
    this.groundY = this.ground.y + this.ground.height / 2; // "this.ground.top" may also work
    // Generate a new star

    this.spawnNewStar(); // Initialize timer

    this.timer = 0;
    this.starDuration = 0; // Initialize scoring

    this.score = 0;
  },
  start: function start() {},
  update: function update(dt) {
    // Update timer for each frame, when a new star is not generated after exceeding duration
    // Invoke the logic of game failure
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1; // Update the words of the scoreDisplay Label

    this.scoreDisplay.string = 'Score: ' + this.score.toString(); // Play the scoring sound effect

    cc.audioEngine.playEffect(this.scoreAudio, false);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsInNwYXduTmV3U3RhciIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsInN0YXJEdXJhdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJ0aW1lciIsInJhbmRYIiwicmFuZFkiLCJncm91bmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwiZ2FtZU92ZXIiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwib25Mb2FkIiwieSIsImhlaWdodCIsInNjb3JlIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImdhaW5TY29yZSIsInN0cmluZyIsInRvU3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBRko7QUFPUjtBQUNBQyxJQUFBQSxlQUFlLEVBQUUsQ0FSVDtBQVNSQyxJQUFBQSxlQUFlLEVBQUUsQ0FUVDtBQVdSO0FB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QUNELFNBQUtSLEtBQUwsSUFBY2tCLEVBQWQ7QUFDSCxHQXRHSTtBQXdHTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFZO0FBQ25CLFNBQUtKLEtBQUwsSUFBYyxDQUFkLENBRG1CLENBRW5COztBQUNBLFNBQUsvQixZQUFMLENBQWtCb0MsTUFBbEIsR0FBMkIsWUFBWSxLQUFLTCxLQUFMLENBQVdNLFFBQVgsRUFBdkMsQ0FIbUIsQ0FJbkI7O0FBQ0FqRCxJQUFBQSxFQUFFLENBQUNrRCxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS3JDLFVBQS9CLEVBQTJDLEtBQTNDO0FBQ0g7QUE5R0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgcXVvdGVzIHRoZSBQcmVGYWIgcmVzb3VyY2Ugb2Ygc3RhcnNcclxuICAgICAgICBzdGFyUHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIFRoZSByYW5kb20gc2NhbGUgb2YgZGlzYXBwZWFyaW5nIHRpbWUgZm9yIHN0YXJzXHJcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxyXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjogMCxcclxuXHJcbiAgICAgICAgLy8gR3JvdW5kIG5vZGUgZm9yIGNvbmZpcm1pbmcgdGhlIGhlaWdodCBvZiB0aGUgZ2VuZXJhdGVkIHN0YXIncyBwb3NpdGlvblxyXG4gICAgICAgIGdyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gUGxheWVyIG5vZGUgZm9yIG9idGFpbmluZyB0aGUganVtcCBoZWlnaHQgb2YgdGhlIG1haW4gY2hhcmFjdGVyIGFuZCBjb250cm9sbGluZyB0aGUgbW92ZW1lbnQgc3dpdGNoIG9mIHRoZSBtYWluIGNoYXJhY3RlclxyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gUmVmZXJlbmNlIG9mIHNjb3JlIGxhYmVsXHJcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gU2NvcmluZyBzb3VuZCBlZmZlY3QgcmVzb3VyY2VcclxuICAgICAgICBzY29yZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25OZXdTdGFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBub2RlIGluIHRoZSBzY2VuZSB3aXRoIGEgcHJlc2V0IHRlbXBsYXRlXHJcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG4gICAgICAgIC8vIFB1dCB0aGUgbmV3bHkgYWRkZWQgbm9kZSB1bmRlciB0aGUgQ2FudmFzIG5vZGVcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcbiAgICAgICAgLy8gU2V0IHVwIGEgcmFuZG9tIHBvc2l0aW9uIGZvciB0aGUgc3RhclxyXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2Ugb2YgdGhlIEdhbWUgb2JqZWN0IG9uIHRoZSBTdGFyIHNjcmlwdCBjb21wb25lbnRcclxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBSZXNldCB0aW1lciwgcmFuZG9tbHkgY2hvb3NlIGEgdmFsdWUgYWNjb3JkaW5nIHRoZSBzY2FsZSBvZiBzdGFyIGR1cmF0aW9uXHJcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSB0aGlzLm1pblN0YXJEdXJhdGlvbiArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByYW5kWCA9IDA7XHJcbiAgICAgICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgZ3JvdW5kIGxldmVsIGFuZCB0aGUgbWFpbiBjaGFyYWN0ZXIncyBqdW1wIGhlaWdodCwgcmFuZG9tbHkgb2J0YWluIGFuIGFuY2hvciBwb2ludCBvZiB0aGUgc3RhciBvbiB0aGUgeSBheGlzXHJcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xyXG4gICAgICAgIC8vIEFjY29yZGluZyB0byB0aGUgd2lkdGggb2YgdGhlIHNjcmVlbiwgcmFuZG9tbHkgb2J0YWluIGFuIGFuY2hvciBwb2ludCBvZiBzdGFyIG9uIHRoZSB4IGF4aXNcclxuICAgICAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aC8yO1xyXG4gICAgICAgIHJhbmRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIG1heFg7XHJcbiAgICAgICAgLy8gUmV0dXJuIHRvIHRoZSBhbmNob3IgcG9pbnQgb2YgdGhlIHN0YXJcclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTdG9wIHRoZSBqdW1waW5nIGFjdGlvbiBvZiB0aGUgUGxheWVyIG5vZGVcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpOyBcclxuICAgICAgICAvLyByZWxvYWQgdGhlIFwiZ2FtZVwiIHNjZW5lXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJyk7XHJcbiAgICB9LFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gT2J0YWluIHRoZSBhbmNob3IgcG9pbnQgb2YgZ3JvdW5kIGxldmVsIG9uIHRoZSB5IGF4aXNcclxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0LzI7IC8vIFwidGhpcy5ncm91bmQudG9wXCIgbWF5IGFsc28gd29ya1xyXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHN0YXJcclxuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIHRpbWVyXHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSAwO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIHNjb3JpbmdcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyBVcGRhdGUgdGltZXIgZm9yIGVhY2ggZnJhbWUsIHdoZW4gYSBuZXcgc3RhciBpcyBub3QgZ2VuZXJhdGVkIGFmdGVyIGV4Y2VlZGluZyBkdXJhdGlvblxyXG5cclxuICAgICAgICAvLyBJbnZva2UgdGhlIGxvZ2ljIG9mIGdhbWUgZmFpbHVyZVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhaW5TY29yZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHdvcmRzIG9mIHRoZSBzY29yZURpc3BsYXkgTGFiZWxcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnU2NvcmU6ICcgKyB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gUGxheSB0aGUgc2NvcmluZyBzb3VuZCBlZmZlY3RcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28a65ADEbhJkp6pA8aeRsL2', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// Player.js
cc.Class({
  "extends": cc.Component,
  properties: {
    // Main character's jump height
    jumpHeight: 0,
    // Main character's jump duration
    jumpDuration: 0,
    // Maximal movement speed
    maxMoveSpeed: 0,
    // Acceleration
    accel: 0,
    // Jumping sound effect resource
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  runJumpAction: function runJumpAction() {
    // Jump up
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    }); // Jump down

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    }); // Create a easing

    var tween = cc.tween() // perform actions in the order of "jumpUp", "jumpDown"
    .sequence(jumpUp, jumpDown) // Add a callback function to invoke the "playJumpSound()" method we define after the action is finished
    .call(this.playJumpSound, this); // Repeat unceasingly

    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    // Invoke sound engine to play the sound
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    // Set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // Unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // Initialize the jump action
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start(); // Acceleration direction switch

    this.accLeft = false;
    this.accRight = false; // The main character's current horizontal velocity

    this.xSpeed = 0; // Initialize the keyboard input listening

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // Cancel keyboard input monitoring
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    // Update speed of each frame according to the current acceleration direction
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // Restrict the movement speed of the main character to the maximum movement speed


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // If speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // Update the position of the main character according to the current speed


    this.node.x += this.xSpeed * dt;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInJ1bkp1bXBBY3Rpb24iLCJqdW1wVXAiLCJ0d2VlbiIsImJ5IiwieSIsImVhc2luZyIsImp1bXBEb3duIiwic2VxdWVuY2UiLCJjYWxsIiwicGxheUp1bXBTb3VuZCIsInJlcGVhdEZvcmV2ZXIiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJhY2NMZWZ0IiwiZCIsImFjY1JpZ2h0Iiwib25LZXlVcCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJub2RlIiwidGhlbiIsInN0YXJ0IiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRSxDQUZKO0FBR1I7QUFDQUMsSUFBQUEsWUFBWSxFQUFFLENBSk47QUFLUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsQ0FOTjtBQU9SO0FBQ0FDLElBQUFBLEtBQUssRUFBRSxDQVJDO0FBU1I7QUFDQUMsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUVQQyxNQUFBQSxJQUFJ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QUFBQSxTQXJGSyx1QkFxRlE7QUFDVDtBQUNBOUMsSUFBQUEsRUFBRSxDQUFDd0MsV0FBSCxDQUFlTyxHQUFmLENBQW1CL0MsRUFBRSxDQUFDMEMsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUE1QyxFQUFzRCxLQUFLcEIsU0FBM0QsRUFBc0UsSUFBdEU7QUFDQXhCLElBQUFBLEVBQUUsQ0FBQ3dDLFdBQUgsQ0FBZU8sR0FBZixDQUFtQi9DLEVBQUUsQ0FBQzBDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkUsTUFBNUMsRUFBb0QsS0FBS1osT0FBekQsRUFBa0UsSUFBbEU7QUFDSCxHQXpGSTtBQTJGTEssRUFBQUEsS0EzRkssbUJBMkZJLENBRVIsQ0E3Rkk7QUErRkxVLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0EsUUFBSSxLQUFLbkIsT0FBVCxFQUFrQjtBQUNkLFdBQUtTLE1BQUwsSUFBZSxLQUFLaEMsS0FBTCxHQUFhMEMsRUFBNUI7QUFDSCxLQUZELE1BRU8sSUFBSSxLQUFLakIsUUFBVCxFQUFtQjtBQUN0QixXQUFLTyxNQUFMLElBQWUsS0FBS2hDLEtBQUwsR0FBYTBDLEVBQTVCO0FBQ0gsS0FOaUIsQ0FPbEI7OztBQUNBLFFBQUtDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLE1BQWQsSUFBd0IsS0FBS2pDLFlBQWxDLEVBQWlEO0FBQzdDO0FBQ0EsV0FBS2lDLE1BQUwsR0FBYyxLQUFLakMsWUFBTCxHQUFvQixLQUFLaUMsTUFBekIsR0FBa0NXLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLE1BQWQsQ0FBaEQ7QUFDSCxLQVhpQixDQWFsQjs7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVZ0IsQ0FBVixJQUFlLEtBQUtiLE1BQUwsR0FBY1UsRUFBN0I7QUFDSDtBQTlHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbi8vIFBsYXllci5qc1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBNYWluIGNoYXJhY3RlcidzIGp1bXAgaGVpZ2h0XHJcbiAgICAgICAganVtcEhlaWdodDogMCxcclxuICAgICAgICAvLyBNYWluIGNoYXJhY3RlcidzIGp1bXAgZHVyYXRpb25cclxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXHJcbiAgICAgICAgLy8gTWF4aW1hbCBtb3ZlbWVudCBzcGVlZFxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuICAgICAgICAvLyBBY2NlbGVyYXRpb25cclxuICAgICAgICBhY2NlbDogMCxcclxuICAgICAgICAvLyBKdW1waW5nIHNvdW5kIGVmZmVjdCByZXNvdXJjZVxyXG4gICAgICAgIGp1bXBBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBydW5KdW1wQWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gSnVtcCB1cFxyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7eTogdGhpcy5qdW1wSGVpZ2h0fSwge2Vhc2luZzogJ3NpbmVPdXQnfSk7XHJcblxyXG4gICAgICAgIC8vIEp1bXAgZG93blxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHt5OiAtdGhpcy5qdW1wSGVpZ2h0fSwge2Vhc2luZzogJ3NpbmVJbid9KTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgZWFzaW5nXHJcbiAgICAgICAgdmFyIHR3ZWVuID0gY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJmb3JtIGFjdGlvbnMgaW4gdGhlIG9yZGVyIG9mIFwianVtcFVwXCIsIFwianVtcERvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIHRoZSBcInBsYXlKdW1wU291bmQoKVwiIG1ldGhvZCB3ZSBkZWZpbmUgYWZ0ZXIgdGhlIGFjdGlvbiBpcyBmaW5pc2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCh0aGlzLnBsYXlKdW1wU291bmQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBSZXBlYXQgdW5jZWFzaW5nbHlcclxuICAgICAgICByZXR1cm4gY2MudHdlZW4oKS5yZXBlYXRGb3JldmVyKHR3ZWVuKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGxheUp1bXBTb3VuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEludm9rZSBzb3VuZCBlbmdpbmUgdG8gcGxheSB0aGUgc291bmRcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICAvLyBTZXQgYSBmbGFnIHdoZW4ga2V5IHByZXNzZWRcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gVW5zZXQgYSBmbGFnIHdoZW4ga2V5IHJlbGVhc2VkXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGp1bXAgYWN0aW9uXHJcbiAgICAgICAgdmFyIGp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oanVtcEFjdGlvbikuc3RhcnQoKVxyXG5cclxuICAgICAgICAvLyBBY2NlbGVyYXRpb24gZGlyZWN0aW9uIHN3aXRjaFxyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyBUaGUgbWFpbiBjaGFyYWN0ZXIncyBjdXJyZW50IGhvcml6b250YWwgdmVsb2NpdHlcclxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGtleWJvYXJkIGlucHV0IGxpc3RlbmluZ1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICAvLyBDYW5jZWwga2V5Ym9hcmQgaW5wdXQgbW9uaXRvcmluZ1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyBVcGRhdGUgc3BlZWQgb2YgZWFjaCBmcmFtZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgYWNjZWxlcmF0aW9uIGRpcmVjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmFjY0xlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlc3RyaWN0IHRoZSBtb3ZlbWVudCBzcGVlZCBvZiB0aGUgbWFpbiBjaGFyYWN0ZXIgdG8gdGhlIG1heGltdW0gbW92ZW1lbnQgc3BlZWRcclxuICAgICAgICBpZiAoIE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkICkge1xyXG4gICAgICAgICAgICAvLyBJZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIG1haW4gY2hhcmFjdGVyIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzcGVlZFxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XHJcbiAgICB9LFxyXG4gICAgXHJcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a577Z2uvlKv5du11zeSh5C', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // When the distance between the star and main character is less than this value, collection of the point will be completed
    pickRadius: 0
  },
  getPlayerDistance: function getPlayerDistance() {
    // Determine the distance according to the position of the Player node
    var playerPos = this.game.player.getPosition(); // Calculate the distance between two nodes according to their positions

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // When the stars are being collected, invoke the interface in the Game script to generate a new star
    this.game.spawnNewStar(); // Invoke the scoring method of the Game script

    this.game.gainScore(); // Then destroy the current star's node

    this.node.destroy();
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    // Determine if the distance between the Star and main character is less than the collecting distance for each frame
    if (this.getPlayerDistance() < this.pickRadius) {
      // Invoke collecting behavior
      this.onPicked();
      return;
    } // Update the transparency of the star according to the timer in the Game script


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwib3BhY2l0eVJhdGlvIiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJtaW5PcGFjaXR5Iiwib3BhY2l0eSIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBRkosR0FIUDtBQVFMQyxFQUFBQSxpQkFBaUIsRUFBRSw2QkFBWTtBQUMzQjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFdBQWpCLEVBQWhCLENBRjJCLENBSTNCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCUCxTQUF2QixFQUFrQ1EsR0FBbEMsRUFBWDtBQUNBLFdBQU9KLElBQVA7QUFDSCxHQWZJO0FBaUJMSyxFQUFBQSxRQUFRLEVBQUUsb0JBQVc7QUFDakI7QUFDQSxTQUFLUixJQUFMLENBQVVTLFlBQVYsR0FGaUIsQ0FJakI7O0FBQ0EsU0FBS1QsSUFBTCxDQUFVVSxTQUFWLEdBTGlCLENBT2pCOztBQUNBLFNBQUtOLElBQUwsQ0FBVU8sT0FBVjtBQUNILEdBMUJJO0FBMkJMO0FBRUE7QUFFQUMsRUFBQUEsS0EvQkssbUJBK0JJLENBRVIsQ0FqQ0k7QUFtQ0xDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0EsUUFBSSxLQUFLaEIsaUJBQUwsS0FBMkIsS0FBS0QsVUFBcEMsRUFBZ0Q7QUFDNUM7QUFDQSxXQUFLVyxRQUFMO0FBQ0E7QUFDSCxLQU5pQixDQVFsQjs7O0FBQ0EsUUFBSU8sWUFBWSxHQUFHLElBQUksS0FBS2YsSUFBTCxDQUFVZ0IsS0FBVixHQUFnQixLQUFLaEIsSUFBTCxDQUFVaUIsWUFBakQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxTQUFLZCxJQUFMLENBQVVlLE9BQVYsR0FBb0JELFVBQVUsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFlBQVksSUFBSSxNQUFNRyxVQUFWLENBQXZCLENBQWpDO0FBQ0g7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHN0YXIgYW5kIG1haW4gY2hhcmFjdGVyIGlzIGxlc3MgdGhhbiB0aGlzIHZhbHVlLCBjb2xsZWN0aW9uIG9mIHRoZSBwb2ludCB3aWxsIGJlIGNvbXBsZXRlZFxyXG4gICAgICAgIHBpY2tSYWRpdXM6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBkaXN0YW5jZSBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBQbGF5ZXIgbm9kZVxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbm9kZXMgYWNjb3JkaW5nIHRvIHRoZWlyIHBvc2l0aW9uc1xyXG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICBvblBpY2tlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgc3RhcnMgYXJlIGJlaW5nIGNvbGxlY3RlZCwgaW52b2tlIHRoZSBpbnRlcmZhY2UgaW4gdGhlIEdhbWUgc2NyaXB0IHRvIGdlbmVyYXRlIGEgbmV3IHN0YXJcclxuICAgICAgICB0aGlzLmdhbWUuc3Bhd25OZXdTdGFyKCk7XHJcblxyXG4gICAgICAgIC8vIEludm9rZSB0aGUgc2NvcmluZyBtZXRob2Qgb2YgdGhlIEdhbWUgc2NyaXB0XHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG5cclxuICAgICAgICAvLyBUaGVuIGRlc3Ryb3kgdGhlIGN1cnJlbnQgc3RhcidzIG5vZGVcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgU3RhciBhbmQgbWFpbiBjaGFyYWN0ZXIgaXMgbGVzcyB0aGFuIHRoZSBjb2xsZWN0aW5nIGRpc3RhbmNlIGZvciBlYWNoIGZyYW1lXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xyXG4gICAgICAgICAgICAvLyBJbnZva2UgY29sbGVjdGluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdHJhbnNwYXJlbmN5IG9mIHRoZSBzdGFyIGFjY29yZGluZyB0byB0aGUgdGltZXIgaW4gdGhlIEdhbWUgc2NyaXB0XHJcbiAgICAgICAgdmFyIG9wYWNpdHlSYXRpbyA9IDEgLSB0aGlzLmdhbWUudGltZXIvdGhpcy5nYW1lLnN0YXJEdXJhdGlvbjtcclxuICAgICAgICB2YXIgbWluT3BhY2l0eSA9IDUwO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gbWluT3BhY2l0eSArIE1hdGguZmxvb3Iob3BhY2l0eVJhdGlvICogKDI1NSAtIG1pbk9wYWNpdHkpKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
