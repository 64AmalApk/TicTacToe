// withDialog.js

import React from 'react';
import DialogComponent from '../../components/DialogComponent';

const withDialog = WrappedComponent => {
  return ({
    isVisible,
    title,
    onSubmit,
    inputLabel,
    buttonTitle,
    isInputView,
    ...props
  }) => {
    return (
      <DialogComponent
        isVisible={isVisible}
        title={title}
        onSubmit={onSubmit}
        inputLabel={inputLabel}
        buttonTitle={buttonTitle}
        isInputView={isInputView}>
        <WrappedComponent {...props} />
      </DialogComponent>
    );
  };
};

export default withDialog;
