module.exports = function check(str, bracketsConfig) {
    var result = true;
    var regular = new RegExp(regExpCreator(bracketsConfig));
    checker(str,regular);

    function checker(str,regular) {
        str = ' ' + str;
        while (str!=' '){
            if (str.search(regular)!=-1){
                str = str.replace(regular,'');
            } else {
                return result = false;
            }
        }
    }

    function regExpCreator(bracketsConfig) {
        var regExpStr = '';
        for (var i = 0; i < bracketsConfig.length; i++) {
            regExpStr += '(';
            for (var j = 0; j < bracketsConfig[i].length; j++) {
                if (str.search(/\d/) != -1) {
                    regExpStr = regExpStr + bracketsConfig[i][j];
                } else {
                    regExpStr = regExpStr + "\\" + bracketsConfig[i][j];
                }
            }
            regExpStr += ')';
            if (i != bracketsConfig.length - 1) regExpStr += '|';
        }
        return regExpStr;
    }

    return result;
}
