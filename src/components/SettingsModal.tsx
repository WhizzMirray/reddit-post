import * as React from "react";
import { Checkbox, FormGroup, Modal } from "react-bootstrap";
import { ISettings } from "../types/interfaces";

export interface IProps {
  handleChangeDelay: (e: Event & any) => void;
  handleCloseSettingsModal: () => void;
  handleToggleNotification: () => void;
  handleToggleSound: () => void;
  showModal: boolean;
  settings: ISettings;
  permission: string;
}

const SettingsModal: React.SFC<IProps> = props => {
  const { delay, sound, notification } = props.settings;
  const {
    handleChangeDelay,
    handleCloseSettingsModal,
    handleToggleNotification,
    handleToggleSound,
    permission,
    showModal
  } = props;
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseSettingsModal}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            <Checkbox checked={sound} onChange={handleToggleSound}>
              Toggle Sound
            </Checkbox>{" "}
            {(window as any).Notification ? (
              <Checkbox
                checked={notification}
                onChange={handleToggleNotification}
                disabled={permission === "denied"}
              >
                Toggle Notifications
              </Checkbox>
            ) : ("")}
            {" Delay  "}

            <input
              type="number"
              value={delay}
              onChange={handleChangeDelay}
              min={5}
            />
            {" s"}
          </FormGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingsModal;
