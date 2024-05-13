/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {Portal, Dialog, TextInput, Button, HelperText} from 'react-native-paper'

const DialogComponent = ({
  isVisible,
  title,
  onSubmit,
  defaultValue,
  inputLabel,
  buttonTitle,
  isInputView = false,
  children,
}) => {
  const [input, setInput] = useState(defaultValue || '')
  const [error, setError] = useState(false)
  const handleSubmit = () => {
    if (input !== '') {
      onSubmit(input)
    } else {
      setError(true)
    }
  }

  return (
    <Portal>
      <Dialog
        style={styles.dialogContainer}
        visible={isVisible}
        onDismiss={() => {}}
        dismissableBackButton={false}
        dismissable={false}>
        <Dialog.Title style={styles.title}>{title}</Dialog.Title>
        {isInputView ? (
          <>
            <Dialog.Content>
              <TextInput
                label={inputLabel}
                value={input}
                onChangeText={e => {
                  setInput(e)
                  setError(false)
                }}
                style={styles.input}
              />
              <HelperText type='error' visible={error}>
                {' '}
                Name is Required
              </HelperText>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                buttonColor={'#00ddb3'}
                mode='contained'
                labelStyle={styles.labelStyle}
                style={styles.button}
                onPress={handleSubmit}>
                {buttonTitle || 'Add Name'}
              </Button>
            </Dialog.Actions>
          </>
        ) : (
          <Dialog.Content>{children}</Dialog.Content>
        )}
      </Dialog>
    </Portal>
  )
}

const styles = StyleSheet.create({
  dialogContainer: {
    // backgroundColor: '#fff',
    // borderRadius: 10,
    // padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2fe8',
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  labelStyle: {
    fontSize: 16,
  },
})

export default DialogComponent
