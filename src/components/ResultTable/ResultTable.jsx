import { RESULT_TABLE_CONFIG } from '../../common/constants/resultTableConfig';
import {
  calculateInvestmentResults,
  formatter,
} from '../../common/utils/calculateInvestmentResults';

export function ResultTable({ inputValues }) {
  const resultsData = calculateInvestmentResults(...inputValues);

  let initialInvestment;

  if (resultsData[0]) {
    initialInvestment =
      resultsData[0].valueEndOfYear -
      resultsData[0].interest -
      resultsData[0].annualInvestment;
  }

  return (
    <table id="result">
      <thead>
        <tr className="center">
          {RESULT_TABLE_CONFIG.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {resultsData.map((annualRecord, index) => {
          const totalInterest =
            annualRecord.valueEndOfYear -
            annualRecord.annualInvestment * annualRecord.year -
            initialInvestment;

          const totalAmountInvested =
            annualRecord.valueEndOfYear - totalInterest;

          return (
            <tr key={index} className="center">
              <td>{annualRecord.year}</td>
              <td>{formatter.format(annualRecord.valueEndOfYear)}</td>
              <td>{formatter.format(annualRecord.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
