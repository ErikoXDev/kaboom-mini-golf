
function loadAssets() {
  loadSprite("ball", "sprites/ball.png")
  
  loadSprite("grassball", "sprites/grassball.png")
  loadSprite("colorballmat", "sprites/colorballmat.png")

  loadSpriteAtlas("sprites/arrows.png", {
    "arrows": {
      x:0,
      y:0,
      width: 72,
      height: 66,
      sliceX:3,
      anims: {
        "1": {
          from: 0, to:0
        },
        "2": {
          from: 1, to:1
        },
        "3": {
          from: 2, to:2
        }
        
      }
    }
  })
  
  loadSpriteAtlas("sprites/tilesheet.png", {
    "g": {
      x:0,
      y:0,
      width: 64,
      height:64
    },
    "h": {
      x:0,
      y:64,
      width: 64,
      height:64
    },
    "w": {
      x:0,
      y:128,
      width: 64,
      height:64
    
    },
  })

  console.log("LOADED ASSETS")
}

export {loadAssets}