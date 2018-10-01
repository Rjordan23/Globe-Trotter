// Sidenav
const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transistion: 500,
        interval: 6000
    });

// Autocomplete
const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
            "Aruba": null,
            "Cancun Mexico": null,
            "Hawaii": null,
            "Florida": null,
            "Jamaca": null,
            "Puerto Rico": null,
            "California": null,
        }
    });


