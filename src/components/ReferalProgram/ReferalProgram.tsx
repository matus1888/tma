import { Btn } from "../Btn";
import { Txt } from "../Txt";

export const ReferalProgram = () => {
  return (
    <>
      <Txt>Поделиться с другом и получить 3 креатива в подарок</Txt>
      <Btn
        onClick={() =>
          console.log(
            "Сюда надо вставить какой то механизм для того чтобы делиться ссылками"
          )
        }
      >
        Поделиться
      </Btn>
    </>
  );
};
