import { Light, LightOffCommand, LightOnCommand, RemoteControl, RemoteControlWithUndo } from "./v61";

describe("", () => {
  it("", () => {
    const remoteControl = new RemoteControlWithUndo();

    const light = new Light();
    remoteControl.setCommand(
      0,
      new LightOnCommand(light),
      new LightOffCommand(light)
    );

    remoteControl.pressOnButton(0);
    remoteControl.pressOffButton(0);

    remoteControl.pressUndoButton();
  });
});
