export default function CountryComponent(props) {
  // const { brand, maker, year, price, color } = props;
  const { countryName } = this.props.details;

  //NOTE: in a class component you will prepend your props with "this" keyword
  //e.g. this.props.details

  return (
    <div>
      <h1>countries details</h1>
      <p>countryName: {countryName}</p>
      <hr />
    </div>
  );
}
