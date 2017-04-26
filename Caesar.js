
function rot1(textToRotate)
{
		var textToRotateLower = textToRotate.toLowerCase();
		var rotatedText = "";
		for (var i=0;i<textToRotateLower.length;i++)
		{
			if((textToRotateLower.charCodeAt(i)+1)==123)
			{
				rotatedText+="a";
			}
			else
			{
				rotatedText+=String.fromCharCode(textToRotateLower.charCodeAt(i)+1);
			}
			
		}
		return rotatedText;
}

function checkTextForKeywords(textToCheck, wordsToCheckFor)
{
	//scoring also depends on the word length, the longer the word the less likely it is that its appearance is coincidence
	var score=0;
	for(var y=0;y<wordsToCheckFor.length;y++)
	{
		var word=wordsToCheckFor[y];
		var re = new RegExp(word,'g');
		score+=(textToCheck.match(re) || []).length*word.length;
	}
	return score;
}

function concatInitialAndAdditionalWords(initialWords,additionalWords)
{
	var checkWords = initialWords;
	for(var y=0;y<additionalWords.length;y++)
	{
		var wordToAdd = additionalWords[y];
		if(checkWords.indexOf(wordToAdd)==-1)
		{
			checkWords.push(wordToAdd);
		}
	}
	return checkWords;
}

var stringToCheck = prompt("Please enter the Caesar shifted string", "Ftdqq Duzse rad ftq Qxhqz-wuzse gzpqd ftq ewk, Eqhqz rad ftq Pimdr-xadpe uz ftqud tmxxe ar efazq, Zuzq rad Yadfmx Yqz paayqp fa puq, Azq rad ftq Pmdw Xadp az tue pmdw ftdazq Uz ftq Xmzp ar Yadpad itqdq ftq Etmpaie xuq. Azq Duzs fa dgxq ftqy mxx, Azq Duzs fa ruzp ftqy, Azq Duzs fa nduzs ftqy mxx mzp uz ftq pmdwzqee nuzp ftqy Uz ftq Xmzp ar Yadpad itqdq ftq Etmpaie xuq");
var initialWords=["the","be","to","of","and","in","that","have","it","for","not","on","with","he","as","you","do","at","this","but","his","by","from","they","we","say","her","she","or","an","will","my","one","all","would","there","their","what","so","because","about","which","people","could","other","think","after","first","these"]; //Most popular words in English language
var additionalWords = prompt("If there are any words you suspect are in the solution please enter them, separated by a comma. This is in addition to the most common words in the English language.", "").split(",");
var checkWords = concatInitialAndAdditionalWords(initialWords,additionalWords);
var solvedIteration=-1;
var solvedString="";
var max=-1;

for(var x=1;x<27;x++)
{
	stringToCheck=rot1(stringToCheck);
	var currentScore=checkTextForKeywords(stringToCheck,checkWords)
	if(currentScore>max)
	{
		solvedIteration=26-x;
		solvedString=stringToCheck;
		max=currentScore;
	}
}

alert("Most likely translation: " + solvedString);
alert("Number of shifts needed: " + solvedIteration);


//Possibly include options for capital letter,symbol and number differentiation
//Check only first x chars