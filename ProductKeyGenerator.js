(async function productKey() {
  function MakeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
var product = MakeId(5) + '-' + MakeId(5) + '-' + MakeId(5) + '-' + MakeId(5) + '-' + MakeId(5)
$alert(`Your Windows93 product key is ${product}`);
})
