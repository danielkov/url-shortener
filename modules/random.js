module.exports = function(l){
    var t = '';
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-~';
    for (var i = 0; i < l; i++) {
        t += a.charAt(Math.floor(Math.random() * a.length));
    }
    return t;
}
/*{
    r1: function(l){
        return Math.random().toString(36).substr(2, l);
    },
    r2: function(l){
        var t = '';
        var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < l; i++) {
            t += a.charAt(Math.floor(Math.random() * a.length));
        }
        return t;
    },
    r3: function(l){
        return (new Date * Math.random()).toString(36).substring(0,5);
    },
    r4: function(l){
        return Array(l+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, l);

    },
    r5: function(l){
        var t = [];
        var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < l; i++) {
            t.push(a.charAt(Math.floor(Math.random() * a.length)));
        }
        return t.join('');
    }
}*/
