let myFullpage = new fullpage('#container', {
    anchors:['main', 'about', 'value','news','recruitment'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['메인', '캠트로닉스','가치','뉴스','인사제도'],
    slidesNavigation: true,
    css3:true,
    easing: 'easeInOutCubic',
    fitToSection: true,
    scrollBar: false,
    loopTop: true,
    continuousVertical: false,

    
})