var ch=prompt("Enter the latter:");
var latter=ch.toLowerCase(ch);
document.write(" "+latter+"<br>");
switch (latter) {
    case "a","e","i","o","u":
        document.write(" vowel");

        break;

    default:
        document.write(" consonant");
        break;
}