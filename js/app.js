var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.level = ko.observable(data.nicknames);

    // Computed Observables
    this.fullName = ko.computed(function () {
        if (this.clickCount() >= 5 && this.clickCount() < 10) {
            this.level('teen');
        } else if (this.clickCount() >= 10) {
            this.level('dragon');
        }
        return this.name() + " " + this.level();
    }, this);

    // Control Flow - 1: Iterating over an array
    this.nicknames = ko.observableArray([{
            nickname: 'fluffy'
        },
        {
            nickname: 'tiger'
        }
    ]);
};


var ViewModel = function () {

    this.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://live.staticflickr.com/4808/44430067970_45d8ea1a96_z.jpg',
        nicknames: ['fluffy', 'tiger']
    }));

    this.incrementCounter = function () {
        // Set the ClickCount
        // knockout will handle the view to model and movel to view synchronization
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
