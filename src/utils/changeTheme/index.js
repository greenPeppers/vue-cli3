import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'

export let curColor = '#4E7FD0'

// 动态切换主题色
const ChangeThemeColor = function(newColor) {
    var options = {
        newColors: [...forElementUI.getElementUISeries(newColor), '#ff0000', '#ffff00'],
    }
    return client.changer.changeColor(options, Promise)
        .then(t => {
            curColor = newColor
            localStorage.setItem('theme_color', curColor)
        });
}

const init = function() {
    let savedColor = localStorage.getItem('theme_color')
    if (savedColor) {
        curColor = savedColor
        changeThemeColor(savedColor)
    }
}

// const ChangeThemeColor = {
//   change,
//   init,
// }

export default ChangeThemeColor