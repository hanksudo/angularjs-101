(function(){

angular
    .module('myAngularTranslateTestApp', ['pascalprecht.translate'])
    .config(function($translateProvider) {
        $translateProvider.translations('en', {
            HEADLINE: 'Hello, there, This is test app.',
            INTRO: 'And it has i18n support'
        })
        .translations('zh-tw', {
            HEADLINE: '哈囉，這是一個測試App.',
            INTRO: '支援i18n'
        });
        $translateProvider.preferredLanguage('zh-tw');
    });
})();