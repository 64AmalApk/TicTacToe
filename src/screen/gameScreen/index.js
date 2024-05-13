/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  IconButton,
  Button,
  Dialog,
  Portal,
  TextInput,
  Card,
} from 'react-native-paper';
import DialogComponent from '../../components/DialogComponent';
import BackgroundImageComponent from '../../components/BackgroundImageComponent';
import globalStyles from '../../utils/globalStyle';
import useWinnerChecker from '../../utils/_hook/useWinnerChecker';
import withDialog from '../../components/HocComponent/withDialog';
import BoardCard from '../../components/BoardCard';

const GameScreen = ({ route, navigation }) => {
  const { params } = route;
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [friendName, setFriendName] = useState('');
  const [userWins, setUserWins] = useState(0);
  const [friendWins, setFriendWins] = useState(0);
  const [computerMoved, setComputerMoved] = useState(true);

  useWinnerChecker(board, setWinner, setUserWins, setFriendWins);
  const DialogComponentWithDialog = withDialog(DialogComponent);

  const handleClick = index => {
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setComputerMoved(true)
      setIsXNext(!isXNext);
    }
  };

  const handleComputerMove = () => {
    if (params?.type === 'computer' && !isXNext && friendName === 'Computer' && computerMoved) {
      const emptySquares = board.reduce((acc, val, idx) => {
        if (!val) acc.push(idx);
        return acc;
      }, []);

      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const index = emptySquares[randomIndex];
      setComputerMoved(false)
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[index] = 'O';
        setBoard(newBoard);
        setIsXNext(true);
      }, 900);
    }
  };

  useEffect(() => {
    if (params?.type === 'computer' && friendName === '') {
      setFriendName('Computer');
    }

    handleComputerMove();
  }, [board]);


  const renderSquare = index => (
    <TouchableOpacity style={styles.square} onPress={() => handleClick(index)}>
      {board[index] === 'X' ? (
        <Text style={styles.squareText}>{board[index]}</Text>
      ) : (
        <Text style={styles.squareTextO}>{board[index]}</Text>
      )}
    </TouchableOpacity>
  );

  const renderBoard = () => (
    <View style={styles.board}>
      {[0, 3, 6].map((start, rowIdx) => (
        <View key={rowIdx} style={styles.row}>
          {[0, 1, 2].map(colIdx => renderSquare(start + colIdx))}
        </View>
      ))}
    </View>
  );

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setUserWins(0);
    setFriendWins(0);
    setIsMenuVisible(false);
  };

  const handleResume = () => {
    setIsMenuVisible(false);
  };

  const handleExit = () => {
    navigation.goBack();
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <BackgroundImageComponent >
      <View style={globalStyles.container}>
        <BoardCard
          params={params}
          userWins={userWins}
          friendName={friendName}
          friendWins={friendWins}
          renderBoard={renderBoard}
          isXNext={isXNext}
          winner={winner}
          setIsMenuVisible={setIsMenuVisible}
        />
      </View>

      <DialogComponent isVisible={winner} title={'Winner'}>
        <Dialog.Content>
          <Text variant="bodyMedium">
            {winner === 'Draw'
              ? 'No one wins this round'
              : `${winner} wins this round`}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleRestart}>Start Next Round</Button>
        </Dialog.Actions>
      </DialogComponent>

      <DialogComponentWithDialog isVisible={params?.type !== 'computer' && friendName === ''} title={'Enter Friend Name'} onSubmit={setFriendName} inputLabel={'Friend name'} buttonTitle={'Start Game'} isInputView={true} />

      <DialogComponent isVisible={isMenuVisible} title={'Game Paused'}>
        <Dialog.Actions>
          <Button onPress={handleReset}>Reset</Button>
          <Button onPress={handleResume}>Resume</Button>
          <Button onPress={handleExit}>Exit</Button>
        </Dialog.Actions>
      </DialogComponent>
    </BackgroundImageComponent>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2fe8',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingBottom: 20,
  },
  board: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: 'rgba(0, 221, 179, 0.7)',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#00ddb3',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255,0.3)',
  },
  squareText: {
    fontSize: 30,
    color: '#d32f2fe8',
    fontWeight: '700',
  },
  squareTextO: {
    fontSize: 30,
    color: '#000',
    fontWeight: '700',
  },
  pauseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  restartButton: {
    position: 'absolute',
    bottom: 100,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 10,
    color: '#00ddb3',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  labelStyle: {
    fontSize: 16,
  },
  cardAction: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
});

export default GameScreen;
