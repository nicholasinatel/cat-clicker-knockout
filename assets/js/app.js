var initialCats = [{
        clickCount: 0,
        name: 'Bob',
        imgSrc: 'assets/img/bob.jpg',
        imgAttribution: 'normal cat',
        nicknames: ['fluffy', 'tiger']
    },
    {
        clickCount: 0,
        name: 'Bruce',
        imgSrc: 'assets/img/bruce.jpg',
        imgAttribution: 'crazy cat',
        nicknames: ['fluffy', 'tiger']
    },
    {
        clickCount: 0,
        name: 'Hungry',
        imgSrc: 'assets/img/hungry.jpg',
        imgAttribution: 'hungry cat',
        nicknames: ['fluffy', 'tiger']
    },
    {
        clickCount: 0,
        name: 'Kyra',
        imgSrc: 'assets/img/kyra.jpg',
        imgAttribution: 'cute cat',
        nicknames: ['fluffy', 'tiger']
    },
    {
        clickCount: 0,
        name: 'Scarlet',
        imgSrc: 'assets/img/scarlet.jpg',
        imgAttribution: 'beautiful',
        nicknames: ['fluffy', 'tiger']
    }
]

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    // Computed Observables
    this.title = ko.computed(function () {
        var title;
        var clicks = this.clickCount();
        if (clicks < 5) {
            title = 'newborn';
        } else if (clicks > 5 && clicks <= 10) {
            title = 'teen';
        } else if (clicks > 10) {
            title = 'dragon';
        }
        return title;
    }, this);
};

// Make The CurrentCat change when you click on a cat in the list in a function
var ViewModel = function () {
    var self = this; // Always maps to the viewModel

    // This is another Context
    this.catList = ko.observableArray([]);

    initialCats.forEach(function (catItem) {
        // Push each one of the cats as catItem inside initialCats
        self.catList.push(new Cat(catItem));
    });

    // This is One Context
    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        // Set the ClickCount
        // knockout will handle the view to model and movel to view synchronization
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
    // https://stackoverflow.com/questions/39939504/knockout-how-to-get-a-buttons-text-value
    // ClickChangeCat Function
    this.changeCat = function(data, event) {
        self.catList().forEach(function(catItem) {
            // console.log('catItem: ', catItem.name())
            if(catItem.name() == event.target.innerText){
                self.currentCat(catItem);
            }
        })
    };
};

ko.applyBindings(new ViewModel());
