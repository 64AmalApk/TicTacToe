/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View } from 'react-native';
import BackgroundImageComponent from '../../components/BackgroundImageComponent';
import SurfaceComponent from '../../components/SurfaceComponent';
import AppbarComponent from '../../components/AppbarComponent';
import AnimatedTitleComponent from '../../components/AnimatedTitleComponent';
import globalStyles from '../../utils/globalStyle';
import DialogComponent from '../../components/DialogComponent';

export default function DashboardScreen({ navigation }) {
  const [userName, setUserName] = useState('');

  const handleSubmit = (name) => {
    setUserName(name);
  };
  const navigateToGameScreen = (type) => {
    navigation.navigate('Game', { name: userName, type: type });
  };

  return (
    <BackgroundImageComponent>
      <View style={globalStyles.flexContainer}>
        <AppbarComponent userName={userName} />
        <AnimatedTitleComponent title={'Tic Tac Toe'} />
        <View style={globalStyles.container}>
          <SurfaceComponent
            onPress={() => navigateToGameScreen('user')}
            text={'Play with friend'}
            iconNameOne={'account-tie-hat'}
            iconNameTwo={'account-tie-hat'}
          />
          <SurfaceComponent
            onPress={()=>navigateToGameScreen('computer')}
            text={'Play with Computer'}
            iconNameOne={'account-tie-hat'}
            iconNameTwo={'desktop-mac'}
          />
        </View>
      </View>
      <DialogComponent
        isVisible={userName == '' ? true : false}
        title={'Add User Name'}
        onSubmit={handleSubmit}
        inputLabel={'Enter your name'}
        buttonTitle={'Add Name'}
        isInputView={true}
      />
    </BackgroundImageComponent>
  );
}