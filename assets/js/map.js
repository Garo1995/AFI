class YandexMapConstructor {
    constructor({mapContainerId, defaultMarker, categories = [], defaultCenter = [55.662836, 37.536472], zoom = 15}) {
        this.mapContainerId = mapContainerId;
        this.categories = categories;
        this.defaultCenter = defaultCenter;
        this.zoom = zoom;
        this.myMap = null;
        this.selectedCategory = null;
        this.mainPlacemark = null;
        this.pointCollection = null;
        this.initialized = false;
        this.defaultMarker = defaultMarker;

        this.init();
    }

    init() {
        if (!this.initialized && window.ymaps) {
            this.initialized = true;
            ymaps.ready(() => this.initMap());
        }
    }

    initMap() {
        this.myMap = new ymaps.Map(this.mapContainerId, {
            center: this.defaultCenter,
            zoom: this.zoom,
            controls: []
        });
        if (this.defaultMarker.length) {
            this.defaultMarker.forEach(marker => {
                const iconContent = ymaps.templateLayoutFactory.createClass(`
        <div class="bs-point-custom main ${marker.className}" data-id="${marker.defaultCenter[0]}">
       <img class="cover" src="${marker.icon}" alt="icons">
          <p class="title">${marker.title}</p>
        </div>`)

                this.mainPlacemark = new ymaps.Placemark(marker.defaultCenter, {}, {
                    iconLayout: "default#imageWithContent",
                    iconImageHref: '',
                    iconImageSize: [48, 48],
                    zIndex: 2,
                    iconContentLayout: iconContent
                });

                this.myMap.geoObjects.add(this.mainPlacemark);
            })
        }
    }

    changeCategory(category) {
        if (!this.myMap || !window.ymaps) return;

        const isSame = this.selectedCategory?.title === category.title;
        this.myMap.geoObjects.removeAll();

        if (isSame) {
            this.selectedCategory = null;
            this.myMap.geoObjects.add(this.mainPlacemark);
            return;
        }

        this.selectedCategory = category;
        this.pointCollection = new ymaps.GeoObjectCollection();

        category.points.forEach((point) => {
            const iconContent = ymaps.templateLayoutFactory.createClass(`
        <div class="bs-point-custom" data-id="${point.lat}">
          <img src="${category.icon}" alt="icons">
          <p class="title">${point.title}</p>
        </div>
      `);

            const placeMark = new ymaps.Placemark([point.lat, point.lot], {
                iden: point.lat
            }, {
                iconLayout: "default#imageWithContent",
                iconImageHref: '',
                iconImageSize: [48, 48],
                iconImageOffset: [-48, -48],
                iconContentOffset: [0, 0],
                zIndex: 2,
                iconContentLayout: iconContent
            });

            placeMark.events.add('mouseenter', (e) => {
                const id = e.get('target').properties.get('iden');
                const el = document.querySelector(`.bs-point-custom[data-id='${id}']`);
                if (el) el.classList.add('hover');
            });

            placeMark.events.add('mouseleave', (e) => {
                const id = e.get('target').properties.get('iden');
                const el = document.querySelector(`.bs-point-custom[data-id='${id}']`);
                if (el) el.classList.remove('hover');
            });

            this.pointCollection.add(placeMark);
        });

        this.myMap.geoObjects.add(this.pointCollection);
        this.myMap.geoObjects.add(this.mainPlacemark);

        return this.selectedCategory
    }

    zoomIn() {
        if (this.myMap) {
            this.myMap.setZoom(this.myMap.getZoom() + 1, {duration: 300});
        }
    }

    zoomOut() {
        if (this.myMap) {
            this.myMap.setZoom(this.myMap.getZoom() - 1, {duration: 300});
        }
    }

    resetToDefaultCenter() {
        if (this.myMap) {
            this.myMap.setCenter(this.defaultCenter, this.zoom, {
                duration: 300
            });
        }
    }
}
