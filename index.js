let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;
class Driver {
    constructor(name) {
        this.name = name
        this.id = ++driverId

        store.drivers.push(this)
    }
    trips() {
        return store.trips.filter(function(el, i, arr) {
            if(el.driverId === this.id) {
                return el
            }
        }.bind(this))
    }
    passengers() {
        const trippy = this.trips().filter(function(el, i, arr) {
            return el.passengerId
        })

        return trippy.map(function(el) {
            return store.passengers.find(function(ele) {
                return el.passengerId === ele.id
            })
        })
    }

}

let passengerId = 0;
class Passenger {
    constructor(name) {
        this.name = name
        this.id = ++passengerId

        store.passengers.push(this)
    }
    trips() {
        return store.trips.filter(function(el, i, arr) {
            if(el.passengerId === this.id) {
                return el
            }
        }.bind(this))
    }

    drivers() {
    const trippy = this.trips().filter(function(el, i, arr) {
            return el.driverId
        })

        return trippy.map(function(el) {
            return store.drivers.find(function(ele) {
                return el.driverId === ele.id
            })
        })
    }
}

let tripId = 0;
class Trip {
    constructor(driver, passenger) {
        if(driver) {
        this.driverId = driver.id
        }
        if(passenger) {
        this.passengerId = passenger.id
        }
        this.id = ++tripId

        store.trips.push(this)
    }
    passenger() {
        return store.passengers.find(function(passenger) {
            return passenger.id === this.passengerId
        }.bind(this))
    }
    driver() {
        return store.drivers.find(function(driver) {
            return driver.id === this.driverId
        }.bind(this))
    }
}


