import { driver } from '@wdio/globals'

async function swipeScreen(fromX, toX){
	await driver.pause(1000)

    await driver
    .action('pointer')
    .move({x: fromX, y:500})
    .down()
    .pause(100)
    .move({duration:500, x:toX, y:500})
    .up()
    .perform()

}

export default swipeScreen