type Props = {
  setLottoNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

const LottoNumbers = ({ setLottoNumbers }: Props) => {
  const generateNumbers = () => {
    const nums = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 50) + 1
    );
    setLottoNumbers(nums);
  };

  return <button onClick={generateNumbers}>Generate Lotto Numbers</button>;
};

export default LottoNumbers;
