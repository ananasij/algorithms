function updateInventory(arr1, arr2) {
    var inventory = toDict(arr1);

    for (var i = 0; i < arr2.length; i += 1) {
        var item = arr2[i][1];
        var quantity = arr2[i][0];
        if (inventory[item]) {
            inventory[item] += quantity;
        } else {
            inventory[item] = quantity;
        }
    }
    inventory = toSortedArr(inventory);
    return inventory;
}

function toDict(arr) {
    var dict = {};
    arr.forEach(function(item) {
        dict[item[1]] = item[0];
    });
    return dict;
}

function toSortedArr(dict) {
    var arr = [];
    Object.keys(dict).sort().forEach(function(key) {
        arr.push([dict[key], key]);
    });
    return arr;
}

module.exports = updateInventory;
