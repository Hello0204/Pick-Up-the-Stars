
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