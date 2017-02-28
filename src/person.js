var Person = function(firstAndLast) {
    var firstName = firstAndLast.split(' ')[0];
    var lastName = firstAndLast.split(' ')[1];

    this.getFirstName = function() {
        return firstName;
    };

    this.getLastName = function() {
        return lastName;
    };

    this.getFullName = function() {
        return firstName + ' ' + lastName;
    };

    this.setFirstName = function(first) {
        firstName = first;
    };

    this.setLastName = function(last) {
        lastName = last;
    };

    this.setFullName = function(firstAndLast) {
        var fullName = firstAndLast.split(' ');
        firstName = fullName[0];
        lastName = fullName[1];
    };
};

module.exports = Person;