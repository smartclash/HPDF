const cache = require('memory-cache');

class Cache {
    constructor () {
        this.cache = cache;
    }

    put (array) {
        array.map(data => this.cache.put(data.key, data.value));
    }

    get (key) {
        return this.cache.get(key);
    }
}

module.exports = { Cache };