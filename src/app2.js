import $ from 'jquery'
import './app2.css'
const $tabBar = $('#app2 .tab-bar')

const $tabContent = $('#app2 .tab-content')
$tabBar.on('click', 'li', (e) => {

    const $li = $(e.currentTarget)
    const index = $li.index()
    localStorage.setItem('x', index)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    $tabContent.children().eq(index)
        .addClass('active')
        .siblings().removeClass('active')
    // .css({ display: 'block ' })
    // .siblings().css({ display: 'none' })//永远别用，会影响css样式，js只管功能，不管样式

})
$tabBar.children().eq(0).trigger('click')