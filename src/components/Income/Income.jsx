import svg from "../../images/icons_sprite.svg";
import styledComponents from "components/Expenses/styleExpenses";

const { ListOfBalanceChanges, ItemOfBalanceChanges, TitleOfBalanceChanges, SvgBoxStyle } =
  styledComponents;

const Income = ({ onClick }) => {
  const statistics = {incomes:{incomeTotal:20}}

  return (
    <div>
      <div>
        <button type="button" onClick={onClick}>
          <svg width="10" height="10">
            <use href={`${svg}#arrow_left`} />
          </svg>
        </button>{' '}
        <TitleOfBalanceChanges>Income</TitleOfBalanceChanges>
        <button type="button" onClick={onClick}>
          <svg width="10" height="10">
            <use href={`${svg}#arrow_right`} />
          </svg>
        </button>
      </div>
      {statistics.incomes.incomeTotal !== 0 ? (
        <ListOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>{'50000'}</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#salary`} />
            </SvgBoxStyle>
            <p>Salary</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>{'10000'}</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#income`} />
            </SvgBoxStyle>
            <p>Add. income</p>
          </ItemOfBalanceChanges>
        </ListOfBalanceChanges>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default Income;
