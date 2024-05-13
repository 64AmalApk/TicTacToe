/* eslint-disable prettier/prettier */
import {useEffect} from 'react';

const useWinnerChecker = (board, setWinner, setUserWins, setFriendWins) => {
  useEffect(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const checkWinner = () => {
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinner(board[a]);
          if (board[a] === 'X') {
            setUserWins(wins => wins + 1);
          } else {
            setFriendWins(wins => wins + 1);
          }
          return;
        }
      }
      if (board.every(square => square !== null)) {
        setWinner('Draw');
      }
    };

    checkWinner();
  }, [board, setWinner, setUserWins, setFriendWins]);
};

export default useWinnerChecker;
