import * as React from 'react';
import { Modal } from 'antd';

const PokeModal = props => {
  return (
    <Modal
      title='Basic Modal'
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default PokeModal;
