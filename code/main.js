import kaboom from "kaboom"
import { addGolfBall } from "./player"
import { loadAssets } from "./assets"
import { playTutorial } from "./tiles"

kaboom({
  background: [174, 226, 255],
})

loadAssets()

scene("tutorial", (level) => {
  console.log(level)
  playTutorial(level)
})

scene("mainMenu", () => {

})

go("tutorial", 0)

