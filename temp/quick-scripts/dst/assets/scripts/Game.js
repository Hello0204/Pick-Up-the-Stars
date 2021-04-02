
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