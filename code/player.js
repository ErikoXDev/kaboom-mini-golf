var camVel = 0

function addGolfBall(x, y,whenHole) {
  camPos(vec2(0, 0))

  var golfBall = add([
    sprite("ball"),
    pos(x, y),
    area(),
    body(),
    scale(1),
    opacity(1),
    anchor("center"),
    "player"
  ])

  var arrows = add([
    sprite("arrows"),
    pos(x,y),
    opacity(0),
    follow(golfBall),
    anchor("bot")
  ])

  var golfBallDrag = false

  onMouseDown(() => {
    if (golfBall.isHovering()) {
      golfBallDrag = true
      arrows.opacity = 1
    }
  })

  camVel = vec2(0, 0)
  const speed = 250
  var lStrength = 1
  wait(1, () => {
    lStrength = 0.25
  })

  var isWin = false

  onUpdate(() => {
    if (golfBallDrag == true) {
      arrows.angle = trueMousePos().angle(arrows.pos)-90
      let dist = trueMousePos().dist(golfBall.pos)
      if (dist > 100) {
        arrows.play("3")
      }
      else if (dist > 50) {
        arrows.play("2")
      } else {
        arrows.play("1")
      }
    }

    if (isKeyDown("w")) {
      camVel = camVel.add(vec2(0, -speed * dt()))
    }
    if (isKeyDown("s")) {
      camVel = camVel.add(vec2(0, speed * dt()))
    }
    if (isKeyDown("a")) {
      camVel = camVel.add(vec2(-speed * dt(), 0))
    }
    if (isKeyDown("d")) {
      camVel = camVel.add(vec2(speed * dt(), 0))
    }

    camPos(vec2(lerp(camPos().x, camVel.x, lStrength),
      lerp(camPos().y, camVel.y, lStrength)))

    drawCircle({
      pos: camVel,
      radius: 12
    })

  })

  var ballVel = vec2(0, 0)
  var mag = 100
  //grammar gods please forgive me
  var threshhold = 50
  onMouseRelease(() => {
    if (golfBallDrag == true && !isWin) {
      ballVel = golfBall.pos.sub(trueMousePos()).scale(0.25)
      ballVel = vec2(Math.max(Math.min(ballVel.x, threshhold), -threshhold), Math.max(Math.min(ballVel.y, threshhold), -threshhold))
      console.log(ballVel)
      ballPhysics()
    }
    golfBallDrag = false
    arrows.opacity = 0
  })

  golfBall.onCollide("wall", (wall, col) => {
    console.log("Colloded")

    if (col.isBottom() || col.isTop()) {
      ballVel = vec2(ballVel.x, -ballVel.y)
    } else if (col.isLeft() || col.isRight()) {
      ballVel = vec2(-ballVel.x, ballVel.y)
    }
  })



  golfBall.onCollide("hole", (hole, col) => {
    isWin = true
    golfBall.pos = hole.pos
    golfBall.fadeOut(0.7)
    makeBallSmol(hole)
    wait(0.7, () =>{
      whenHole()
    })
  })

  function ballPhysics() {
    mag = Math.sqrt(ballVel.x * ballVel.x + ballVel.y * ballVel.y)
    if (mag > 0.05) {
      ballVel = ballVel.scale(0.95)
      golfBall.moveBy(ballVel)
      wait(0.01, () => {
        if (!isWin)
          ballPhysics()
      })

    } else {
      return
    }
  }

  function makeBallSmol(hole) {

    let ballScale = golfBall.scale
    if (!(ballScale.x < 0.25 && ballScale.y < 0.25)) {
      wait(0.05, () => {
        golfBall.scale = vec2(ballScale.x * 0.95, ballScale.y * 0.95)
        makeBallSmol(hole)
      })
    }
  }
}

function forceCamVel(_camVel) {
  camVel = _camVel
}

function trueMousePos() {
  return toWorld(mousePos())
}



export { addGolfBall, trueMousePos, forceCamVel }