import { ShowFormBtn } from './ShowFormBtn.styled';

export const ShowFormButton = ({ onClick }) => {
  return (
    <ShowFormBtn type="button" aria-label="Open modal" onClick={onClick}>
      +
    </ShowFormBtn>
  );
};
