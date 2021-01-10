class JsonConverter {
    /**
     * Extract jsonObject object to array.
     * @param {Object} jsonObject
     * @returns {Object[]} arr
     */
    toArray(jsonObject) {
        let nodes = [];
        let keys = [];
        for (let node in jsonObject) {
            keys.push({
                name: node,
                parent: -1,
                level: 0,
                index: keys.length
            });

            nodes.push(jsonObject[node]);
        }
        return keys;
    }

    /**
     * Convert array to jsonObject
     * @param {Array} object array
     * @returns {Object} jsonObject
     */
    toJson(array) { //TODO: This method should be finished.
        let json = {};
        array.sort((a,b) => a.parent <= b.parent);
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            if (item.parent > -1) {
                
            } else {
                json[item] = {};
            }
        }
    }
}

module.exports = JsonConverter;