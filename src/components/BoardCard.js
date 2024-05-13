/* eslint-disable prettier/prettier */
// BoardCard.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, IconButton} from 'react-native-paper';

const BoardCard = ({
  params,
  userWins,
  friendName,
  friendWins,
  renderBoard,
  isXNext,
  winner,
  setIsMenuVisible,
}) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title=""
        right={props => (
          <IconButton
            {...props}
            icon="pause"
            size={40}
            iconColor="#d32f2fe8"
            onPress={() => setIsMenuVisible(true)}
          />
        )}
      />
      <Card.Content>
        <View style={styles.details}>
          <Text style={styles.userInfo}>
            {`${params?.name} (X)`} - {userWins}
          </Text>
          <Text style={styles.userInfo}>
            {`${friendName} (O)`} - {friendWins}
          </Text>
        </View>
        {renderBoard()}
      </Card.Content>
      <View style={styles.cardAction}>
        {!winner && (
          <Text style={styles.userInfo}>
            {isXNext ? `${params?.name} (X) ` : ` ${friendName} (O)`} Turn{' '}
          </Text>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 10,
    color: '#00ddb3',
  },
  cardAction: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
});

export default BoardCard;
