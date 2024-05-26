// arge Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TYpescript"; }
    console.log("This shirt is made with ".concat(size, " size and the message written on it is \"").concat(message, "\""));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I Love Myself");
