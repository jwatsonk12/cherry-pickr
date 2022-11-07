sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.destroy()
})
let cherry: Sprite = null
let mySprite: Sprite = null
game.splash("cherry pickr")
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 . . . . . . 1 1 1 1 . . . . 
    1 6 1 1 . . 1 1 3 3 3 3 1 . . . 
    1 6 6 6 1 1 1 3 3 f f 3 1 . . . 
    1 6 6 6 6 6 3 c c f 1 3 3 1 . . 
    . 1 6 6 1 3 c c c 3 3 3 3 1 . . 
    . . 1 6 1 c c c c c c c 3 1 . . 
    . . 1 6 1 c c c c c c 3 1 . . . 
    . . . 1 3 c c c c 3 3 3 1 . . . 
    . . 1 3 3 c c c 3 3 3 1 . . . . 
    . . 1 1 3 3 3 3 3 1 1 1 . . . . 
    . 1 3 3 1 1 1 1 1 3 3 1 . . . . 
    . 1 3 3 1 . . . 1 3 3 1 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(500, function () {
    cherry = sprites.create(img`
        . . . . . . . . . . . . 7 7 7 7 
        . . . . . 1 1 1 1 1 7 7 7 7 7 7 
        . . . . 1 2 2 2 7 7 . . . . 7 7 
        . . . 1 2 2 1 1 2 2 1 . . . 7 7 
        . . 1 2 2 2 2 1 1 2 1 . . . 7 7 
        . 1 2 2 2 2 2 2 1 2 1 . . . 7 . 
        . 1 2 2 2 2 2 2 2 2 1 . . . 7 . 
        . . 1 2 2 2 2 2 2 1 2 2 1 . 7 . 
        . . . 1 1 2 1 1 1 2 2 2 1 7 7 . 
        . . . . . 1 2 2 2 2 2 2 2 7 . . 
        . . . . . 1 2 1 2 2 2 2 2 1 . . 
        . . . . . 1 2 1 1 2 2 2 2 1 . . 
        . . . . . 1 2 2 1 1 2 2 1 . . . 
        . . . . . 1 2 2 2 2 2 2 1 . . . 
        . . . . . . 1 1 1 1 1 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
