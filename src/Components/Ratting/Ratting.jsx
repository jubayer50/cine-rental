import start from "../../assets/star.svg";

const Ratting = ({ value }) => {
  const stars = Array(value).fill(start);
  return (
    <>
      {stars.map((start, index) => (
        <img key={index} src={start} alt="start" width="14" height="14" />
      ))}
    </>
  );
};

export default Ratting;
