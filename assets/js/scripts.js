$(document).ready(function () {
    $('.que').on('click', function () {
        $(this).toggleClass('show');
    });

    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        prevArrow: ".slick-prev",
        nextArrow: ".slick-next",
    });

    initMap();

    async function initMap() {
        // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
        await ymaps3.ready;

        const {YMap, YMapDefaultSchemeLayer, YMapMarker, YMapControls, YMapDefaultFeaturesLayer} = ymaps3;

        const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
        const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

        // Иницилиазируем карту
        const map = new YMap(
            // Передаём ссылку на HTMLElement контейнера
            document.getElementById('map'),

            // Передаём параметры инициализации карты
            {
                location: {
                    // Координаты центра карты
                    center: [43.995368, 56.311237],

                    // Уровень масштабирования
                    zoom: 15
                },
            },
        );

        // Добавляем слой для отображения схематической карты
        map.addChild(new YMapDefaultSchemeLayer());

        map.addChild(YMapDefaultMarker({coordinates: [43.995368, 56.311237], element: icon}));

    }
});