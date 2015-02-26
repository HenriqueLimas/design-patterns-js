/*
* ObserverList
*/
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
    return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
    if (index > -1 && index < this.count()) {
        return this.observerList[index];
    }
};

ObserverList.prototype.indexOf = function(obj, startAt) {
    var i = startAt || 0;

    while (i < this.observerList.lenght) {
        if (obj === this.observerList[i]) {
            return i;
        }

        i++;
    }

    return -1;
};


ObserverList.prototype.removeAt = function(index) {
    this.observerList.splice(index, 1);
};

/*
* Subject
*/
function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer));
};

Subject.prototype.notify = function(context) {
    for (var i = 0, length = this.observers.count(); i < length; i++) {
        this.observers.get(i).update(context);
    }
};

/**
* Observer
*/
function Observer() {
    this.update = function() {
        // ...
    };
}

/**
*   DEMO
*/
function extend(extension, obj) {
    for(var key in extension) {
        obj[key] = extension[key];
    }
}

var controlCheckbox = document.getElementById('mainCheckbox');
var addBtn = document.getElementById('addNewObserver');
var container = document.getElementById('observersContainer');

extend(new Subject(), controlCheckbox);

controlCheckbox.onclick = function() {
    controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = addNewObserver;

function addNewObserver() {
    var check = document.createElement('input');
    check.type = 'checkbox';

    extend(new Observer(), check);

    check.update = function(value) {
        console.log(value);
        this.checked = value;
    };

    controlCheckbox.addObserver(check);

    container.appendChild(check);
}