import Text from "../src/components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import SpinIcon from "./assets/icons/spinner.svg?react";
import Icon from "../src/components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/buttonIncon";
import InputText from "./components/inputText";
import InputCheckbox from "./components/inputCheckbox";

export default function App() {
  return (
    <div className="grid gap3">
      <div className="flex flex-col gap-1">
        <Text
          as="h1"
          variant="body-sm-bold"
          className="text-[var(--color-pink-light)] font-cairo"
        >
          Hello World
          <Icon svg={TrashIcon} className="fill-[var(--color-green-base)]" />
          <Icon svg={SpinIcon} animate />
        </Text>
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge>2 de 5</Badge>
      </div>

      <div>
        <Button>Nova tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckbox />
      </div>
    </div>
  );
}
