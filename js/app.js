var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://live.staticflickr.com/4808/44430067970_45d8ea1a96_z.jpg')
    this.level = ko.observable('baby');



    // Computed Observables
    this.fullName = ko.computed(function () {
        return this.name() + " " + this.level();
    }, this);

    this.incrementCounter = function () {
        // Set the ClickCount
        // knockout will handle the view to model and movel to view synchronization
        this.clickCount(this.clickCount() + 1);

        if (this.clickCount() >= 5 && this.clickCount() < 10) {
            this.level('teen');
        } else if (this.clickCount() >= 10) {
            this.level('dragon');
        }
    };

    // Control Flow - 1: Iterating over an array
    this.nicknames = ko.observableArray([{
            nickname: 'fluffy'
        },
        {
            nickname: 'tiger'
        }
    ]);

}

ko.applyBindings(new ViewModel());