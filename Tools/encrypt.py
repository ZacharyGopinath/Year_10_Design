def toEnc(word):
    newWord=''
    for i in range(0,len(word),1):
        newWord = newWord + word[i].replace( word[i], encDict[word[i]])
    print(newWord)

def fromEnc(word):
    newWord=''
    for i in range(0,len(word),1):
        newWord = newWord + word[i].replace( word[i], unEncDict[word[i]])
    print(newWord)
encDict = {
    "A":"±", "J":".",
    "B":"`", "K":"$",
    "C":"~", "L":"%",
    "D":"U", "M":"^",
    "E":"-", "N":"&",
    "F":"=", "O":"*",
    "G":"Z", "P":"'",
    "H":"!", "Q":")",
    "I":"@", "R":"[",
    "S":"]", "X":"/",
    "T":"{", "Y":";",
    "U":"}", "Z":"?",
    "V":"<", ",":",",
    "W":"Q", " ":" "
}

unEncDict = {
    "±":"A", ".":"J",
    "`":"B", "$":"K",
    "~":"C", "%":"L",
    "U":"D", "^":"M",
    "-":"E", "&":"N",
    "=":"F", "*":"O",
    "Z":"G", "'":"P",
    "!":"H", ")":"Q",
    "@":"I", "[":"R",

    "]":"S", "/":"X",
    "{":"T", ";":"Y",
    "}":"U", "?":"Z",
    "<":"V", ",":",",
    "Q":"W", " ":" "
}

'''
for key, value in encDict.items():
    print(encDict[key])
'''
word = input("Which word would you like to translate: ").upper()

toFrom = input("Would you like to encrypt (A) or decrypt (B): ")
if toFrom == "A":
    toEnc(word)
else:
    fromEnc(word)
