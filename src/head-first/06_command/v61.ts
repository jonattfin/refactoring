import { basename } from "path";

export class ApplianceControl {
  on(): void {
    console.log("on...");
  }
  off(): void {
    console.log("off...");
  }
}

export class Light {
  on(): void {
    console.log("light on...");
  }

  off(): void {
    console.log("light off...");
  }
}

export class Sprinkler {
  waterOn(): void {
    console.log("waterOn...");
  }
  waterOff(): void {
    console.log("waterOff...");
  }
}

export class SecurityControl {
  arm(): void {
    console.log("arm...");
  }
  disarm(): void {
    console.log("disarm...");
  }
}

export interface Command {
  execute(): void;
  undo(): void;
}

export class LightOnCommand implements Command {
  constructor(private readonly light: Light) {}
  undo(): void {
    this.light.off();
  }

  execute(): void {
    this.light.on();
  }
}

export class LightOffCommand implements Command {
  constructor(private readonly light: Light) {}
  undo(): void {
    this.light.on();
  }

  execute(): void {
    this.light.off();
  }
}

export class RemoteControl {
  protected onCommands: Command[] = new Array<Command>(7);
  protected offCommands: Command[] = new Array<Command>(7);

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  pressOnButton(slot: number) {
    this.onCommands[slot].execute();
  }

  pressOffButton(slot: number) {
    this.offCommands[slot].execute();
  }
}

export class RemoteControlWithUndo extends RemoteControl {
  private undoCommand!: Command;

  override pressOnButton(slot: number): void {
    super.pressOnButton(slot);
    this.undoCommand = this.onCommands[slot];
  }

  override pressOffButton(slot: number) {
    super.pressOffButton(slot);
    this.undoCommand = this.offCommands[slot];
  }

  pressUndoButton(): void {
    this.undoCommand.undo();
  }
}
