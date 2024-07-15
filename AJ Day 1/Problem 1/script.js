document.addEventListener('DOMContentLoaded', function() {
    const rollButton = document.getElementById('roll');
    const diceElements = [
        document.getElementById('member-1'),
        document.getElementById('member-2'),
        document.getElementById('member-3')
    ];
    const winnerElement = document.getElementById('winner');

    rollButton.addEventListener('click', function() {
        const scores = diceElements.map(() => rollSingleDice());
        displayScores(scores);
        highlightWinner(scores);
    });

    function rollSingleDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function displayScores(scores) {
        diceElements.forEach((element, index) => {
            element.textContent = scores[index];
        });
    }

    function highlightWinner(scores) {
        let maxScore = scores[0];
        let minScore = scores[0];

        for (let i = 1; i < scores.length; i++) {
            if (scores[i] > maxScore) {
                maxScore = scores[i];
            }
            if (scores[i] < minScore) {
                minScore = scores[i];
            }
        }

        let uniqueScores = new Set(scores);
        diceElements.forEach((element, index) => {
            element.className = 'dice'; // reset class
            if (scores[index] === maxScore) {
                element.classList.add('green');
            } else if (scores[index] === minScore) {
                element.classList.add('red');
            } else {
                element.classList.add('yellow');
            }
        });

        if (uniqueScores.size < scores.length) {
            // There is a tie
            scores.forEach((score, index) => {
                if (scores.filter(s => s === score).length > 1) {
                    diceElements[index].className = 'dice blue';
                }
            });
        }

        let winnerText = 'Winner: ';
        if (scores.filter(score => score === maxScore).length > 1) {
            winnerText += 'It\'s a tie!';
        } else {
            const winnerIndex = scores.indexOf(maxScore);
            winnerText += `Member ${String.fromCharCode(65 + winnerIndex)}`;
        }

        winnerElement.textContent = winnerText;
    }
});
