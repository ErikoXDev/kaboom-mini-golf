import { addGolfBall, forceCamVel } from "./player"

const blocks = ["g", "h", "w", "s"]
const solids = ["w"]

function randomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomSmallOffset() {
  return randomInterval(0, 16)
}

function makeLevel(levelInfo,whenHole) {
  console.log("Making Level", levelInfo)

  var spawn = vec2(0, 0)

  let level = levelInfo[0]
  let hint = levelInfo[1] || ""
  let hintObject = add([
    text(hint),
    pos(0,0),
  ])
  hintObject.onUpdate(()=>{
    hintObject.pos = camPos()
  })
  for (let i = 0; i < level.length; i++) {
    for (let j = 0; j < level[i].length; j++) {
      let tile = level[i][j]
      if (i == 0 || i == level.length - 1 || j == 0 || j == level[i].length - 1) {
        let offX = randomSmallOffset()
        let offY = randomSmallOffset()
        add([
          sprite("colorballmat"),
          z(-300),
          scale(2.4),
          pos(j*64+offX, i*64+offY),
          anchor("center"),
          color(31, 16, 42)
        ])
        add([
          sprite("grassball"),
          scale(2.2),
          z(-100),
          pos(j*64+offX, i*64+offY),
          anchor("center")
        ])
      }
      let spawnP = addTile(tile, j * 64, i * 64)
      
      if (spawnP.x != 0 && spawnP.y != 0) {
        console.log(spawnP)
        spawn = spawnP
      }
    }
  }

  addGolfBall(spawn.x, spawn.y,whenHole)

  let cWidth = level[0].length
  let cHeight = level.length

  forceCamVel(vec2(cWidth/2*64, cHeight/2*64-32))

}

function addTile(tileName, x, y) {

  let isSpecial = false

  if (!blocks.includes(tileName)) {
    return vec2(0, 0)
  }

  if (tileName == "s") {
    isSpecial = true
    tileName = "g"
  }

  let tile = add([
    sprite(tileName),
    pos(x, y),
    anchor("center"),
    scale(1.01)
  ])

  if (solids.includes(tileName)) {
    tile.use(area())
    tile.use(body({ isStatic: true }))
    tile.use("wall")
  }

  if (tileName == "h") {
    tile.use(area({ scale: vec2(0.01, 0.01) }))
    tile.use("hole")
  }

  if (isSpecial) {
    return vec2(x, y)
  } else {
    return vec2(0, 0)
  }

}

function playTutorial(index) {
  if (tutorialLevels[index] == undefined) {
    go("mainMenu")
  } else {
    makeLevel(tutorialLevels[index],()=>{go("tutorial",index+1)})
  }
  
}

const tutorialLevels = [[
  [
    "wwwww",
    "wgggw",
    "wghgw",
    "wgggw",
    "wgggw",
    "wgggw",
    "wgsgw",
    "wgggw",
    "wwwww"
  ], "Click on the golf ball and hold backwards to shoot forwards"
],[
  [
  "wwwwwwwww",
  "wgggggggw",
  "wggggghgw",
  "wgsgwgggw",
  "wgggwwwww",
  "wwwww    "
], "Your ball can bounce off walls!"
]]

export { playTutorial }